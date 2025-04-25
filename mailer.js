const nodemailer = require("nodemailer");
require("dotenv").config();

// Configurações de transporte (SMTP)
const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.PORT,
  secure: true,
  auth: {
    user: process.env.USER,
    pass: process.env.USER_PASS,
  },
});

// Função genérica para enviar emails
async function sendMail(destinatarios, assunto, mensagemHTML) {
  try {
    const info = await transporter.sendMail({
      from: '"Axel News" <contato@axeltech.com.br>',
      // coloca um destinatário genérico no TO ou use o seu próprio
      to: '"Lista de Distribuição" <contato@axeltech.com.br>',
      // aqui você passa o array ou string de e-mails que quer ocultar
      bcc: destinatarios,
      subject: assunto,
      html: mensagemHTML,
    });

    console.log("Email enviado com sucesso!", info.messageId);
  } catch (error) {
    console.error("Erro ao enviar email:", error);
  }
}

module.exports = { sendMail };
