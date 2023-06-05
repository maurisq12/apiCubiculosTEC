import nodemailer from 'nodemailer'

export const enviarCorreo = async (req, res) => {

  // create reusable transporter object using the default SMTP transport
  console.log("1")
  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "cubiculosTEC@outlook.com", // generated ethereal user
      pass: "proyectoap123", // generated ethereal password
    },
  });
  console.log("2")
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "cubiculosTEC@outlook.com", // sender address
    to: "maurisq@hotmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
  console.log("3")

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  return;

}

