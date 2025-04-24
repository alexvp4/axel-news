const fs = require("fs");
const path = require("path");

function getTemplate(templateFileName) {
  const templatePath = path.join(__dirname, "templates", templateFileName);

  try {
    return fs.readFileSync(templatePath, "utf8");
  } catch (err) {
    console.error(`Erro ao ler o template ${templateFileName}:`, err);
    return "";
  }
}

module.exports = { getTemplate };
