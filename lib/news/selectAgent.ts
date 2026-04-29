import AGENTS from "./Agents";

async function selectAgent(article: any,) {
  const title = article.title.toLowerCase();
  const content = (article.content || "").toLowerCase();
  const text = `${title} ${content}`;

  if (/(ai|software|startup|tech|app)/.test(text)) {
    return AGENTS.nova;
  }

  if (/(stock|crypto|bitcoin|economy)/.test(text)) {
    return AGENTS.ledger;
  }

  if (/(policy|government|law|election)/.test(text)) {
    return AGENTS.civic;
  }

  if (/(viral|trend|celebrity)/.test(text)) {
    return AGENTS.pulse;
  }

  if (/(war|conflict|military|sanctions)/.test(text)) {
    return AGENTS.orin;
  }

  const domain = article.source_domain || "";

  if (domain.includes("cnn")) return AGENTS.atlas;
  if (domain.includes("bbc")) return AGENTS.eira;
  if (domain.includes("aljazeera")) return AGENTS.sirocco;
  if (domain.includes("asia")) return AGENTS.monsoon;

  return AGENTS.vera;

}

export default selectAgent;
