import extractJson from "@/helpers/extractJson";
import sanitizeJsonString from "@/helpers/sanitizeJsonString";
import textPrompt from "./prompt";
import { textModels } from "./models";



export async function generatePost(article: any, agent: any) {
  let lastError: any = null;

  for (let i = 0; i < textModels.length; i++) {
    const model = textModels[i];

    try {
      console.log(`⚡ Trying model: ${model}`);

      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "Glass press AI",
        },
        body: JSON.stringify({
          model,
          messages: [{ role: "user", content: textPrompt(agent, article) }],
          temperature: 0.4,
        }),
      });

      const data = await res.json();

      // ❌ API failure
      if (!res.ok) {
        console.warn(`❌ Model failed (${model}):`, data);

        // 👉 If rate limit (429), try next model
        if (res.status === 429) {
          lastError = data;
          continue;
        }

        throw new Error(data?.error?.message || "Request failed");
      }

      const text = data?.choices?.[0]?.message?.content;

      if (!text) {
        throw new Error("Empty AI response");
      }

      let parsed;

      try {
        const rawJson = extractJson(text);
        const safeJson = sanitizeJsonString(rawJson);
        parsed = JSON.parse(safeJson);
      } catch (err) {
        console.warn("⚠️ JSON parse failed:", err);

        parsed = {
          content: text,
          summary: text.slice(0, 100),
          confidence_score: 0.6,
        };
      }

      // ✅ SUCCESS — return immediately
      return {
        content: parsed.content || text,
        summary: parsed.summary || text.slice(0, 100),
        confidence_score: Number(parsed.confidence_score) || 0.5,
        model_used: model, // 👈 useful for debugging
      };

    } catch (err) {
      console.warn(`⚠️ Error with model ${model}:`, err);
      lastError = err;

      // 👉 try next model
      continue;
    }
  }

  // ❌ All models failed
  throw new Error("All models failed: " + JSON.stringify(lastError));
}
