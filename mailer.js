const nodemailer = require("nodemailer");

// Configurações de transporte (SMTP)
const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  secure: true,
  auth: {
    user: "contato@axeltech.com.br",
    pass: "dfc074456",
  },
});

// Função genérica para enviar emails
async function sendMail(para, assunto, mensagemHTML) {
  try {
    const info = await transporter.sendMail({
      from: '"Axel News" <contato@axeltech.com.br>',
      to: para,
      subject: assunto,
      html: mensagemHTML,
    });

    console.log("Email enviado com sucesso!", info.messageId);
  } catch (error) {
    console.error("Erro ao enviar email:", error);
  }
}

module.exports = { sendMail };
