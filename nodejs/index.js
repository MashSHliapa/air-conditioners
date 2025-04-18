import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'yandex',
  host: 'smtp.yandex.ru',
  port: 465,
  secure: true,
  auth: {
    user: 'maria.shliapa.dev@yandex.ru',
    pass: process.env.PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

app.post('/send-email', upload.none(), async (req, res) => {
  try {
    const { name, phone, email, text, agreement } = req.body;

    const mailOptions = {
      from: 'maria.shliapa.dev@yandex.ru',
      to: 'maria.shliapa.dev@yandex.ru',
      subject: 'Заказ на сайте',
      text: `Имя: ${name}
      \nEmail: ${email}
      \nPhone: ${phone}
      \nText: ${text}
      \nAgreement: ${agreement}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'success' });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Something went wrong!!lalal' });
  }
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server started on port ${PORT}`);
  }
});
