import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, email, message } = await req?.json();

  const transporter = nodemailer.createTransport(
    sendgridTransport({
      auth: {
        api_key:
          "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",
      },
    })
  );

  let mailer = nodemailer.createTransport(sgTransport(options));

  // Configura el contenido del correo electrónico
  const mailOptions = {
    to: "jhonned01@gmail.com",
    from: "jhonned01@gmail.com",
    subject: "Hi there",
    text: "Awesome sauce",
    html: "<b>Awesome sauce</b>",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  console.log("mailOptions", mailOptions);

  // try {
  //   // Envía el correo electrónico
  //   mailer.sendMail(mailOptions, function (err, res) {
  //     if (err) {
  //       console.log(err);
  //     }
  //     console.log(res);
  //   });
  //   NextResponse.json(
  //     { message: "Correo electrónico enviado con éxito" },
  //     {
  //       status: 200,
  //     }
  //   );
  // } catch (error) {
  //   NextResponse.json(
  //     { message: "Error al enviar el correo electrónico" },
  //     {
  //       status: 500,
  //     }
  //   );
  // }
}
