// pages/api/sendEmail.ts
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, last_name, email, tel, text } = req.body;

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: process.env.RECIPIENT_EMAIL,
        subject: `Nouveau message de ${name} ${last_name}`,
        text: `Message de ${name} ${last_name} (${email}, ${tel}):\n\n${text}`,
      });

      res.status(200).json({ message: "Email envoyé avec succès!" });
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
      res.status(500).json({ message: "Erreur lors de l'envoi de l'email." });
    }
  } else {
    res.status(405).json({ message: "Méthode non autorisée" });
  }
}
