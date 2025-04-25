import { sendMail } from "./mailer.js";
import { getTemplate } from "./templateReader.js";

const newsTemplate = getTemplate("newsletter.html");

await sendMail(
  [
    "alex@axeltech.com.br",
    "alexpereira.p@gmail.com",
    // "cleomar@axeltech.com.br",
    // "cleomar-ilha@auroracoop.com.br",
    // "alex-pereira@auroracoop.com.br",
  ],
  "Axel News (teste)",
  newsTemplate
);
