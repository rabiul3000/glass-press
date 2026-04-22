function extractJson(text: string): string {
  const first = text.indexOf("{");
  if (first === -1) throw new Error("No JSON start");

  let depth = 0;
  let end = -1;

  for (let i = first; i < text.length; i++) {
    if (text[i] === "{") depth++;
    if (text[i] === "}") depth--;

    if (depth === 0) {
      end = i;
      break;
    }
  }

  let json = end !== -1 ? text.slice(first, end + 1) : text.slice(first);

  // 🔥 Fix missing braces
  const open = (json.match(/{/g) || []).length;
  const close = (json.match(/}/g) || []).length;

  if (close < open) {
    json += "}".repeat(open - close);
  }

  return json;
}

export default extractJson;