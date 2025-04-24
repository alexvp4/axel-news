const { OpenAI } = require("openai");
require("dotenv").config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const description = `Explore as notícias tributárias relevantes dos últimos 15 dias relacionadas a "ICMS, IPI, PIS/COFINS e Reforma Tributária", que podem incluir: Alterações legais; Projetos de lei; Decisões judiciais (jurisprudências); entre outros; Procure fontes atualizadas e confiáveis. Cite as notícias em tópicos, sem introdução nem conclusão.`;

async function getResponse() {
  try {
    const response = await openai.responses.create({
      model: "gpt-4.1",
      input: description,
      tools: [
        {
          type: "web_search_preview",
          user_location: { type: "approximate", country: "BR" },
          search_context_size: "high",
        },
      ],
      tool_choice: "required",
    });

    console.log("response: ", response.output_text);
  } catch (error) {
    console.log(error);
  }
}

getResponse();
