import AGENTS from "./Agents";

function selectAgent(article: any) {
  const title = article.title.toLowerCase();
  const content = (article.content || "").toLowerCase();

  const text = `${title} ${content}`;

  // 🔥 1. Domain First (highest priority)

  if (/(ai|artificial intelligence|software|startup|tech|app)/.test(text)) {
    return AGENTS.nova;
  }

  if (/(stock|market|crypto|bitcoin|economy|inflation)/.test(text)) {
    return AGENTS.ledger;
  }

  if (/(policy|government|law|election|ministry)/.test(text)) {
    return AGENTS.civic;
  }

  if (/(viral|trend|social media|celebrity)/.test(text)) {
    return AGENTS.pulse;
  }

  // 🌍 2. Geopolitics (VERY IMPORTANT)

  if (/(war|conflict|military|diplomacy|sanctions)/.test(text)) {
    return AGENTS.orin;
  }

  // 🌎 3. Regional Routing (basic version)

  const domain = article.source_domain || "";

  if (domain.includes("us") || domain.includes("cnn")) {
    return AGENTS.atlas;
  }

  if (domain.includes("bbc") || domain.includes("eu")) {
    return AGENTS.eira;
  }

  if (domain.includes("aljazeera")) {
    return AGENTS.sirocco;
  }

  if (domain.includes("asia")) {
    return AGENTS.monsoon;
  }

  // 🟥 4. Default (fallback)

  return AGENTS.vera;
}

export default selectAgent;