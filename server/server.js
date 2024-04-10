const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5100;
const fs = require("fs");
const path = require("path");
const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "../client/build");
const hbs = require("nodemailer-express-handlebars");
require("dotenv").config();

app.use(cors());
app.use(express.static(buildPath));
app.use(express.json());

app.post("/send-popup", async (req, res) => {
  try {
    const { name, phone, cleaningType, square, address, comments } = req.body;
    await sendMail(name, phone, cleaningType, square, address, comments);
    res.json({ msg: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error sending message" });
  }
});

app.post("/send-sert", async (req, res) => {
  try {
    const { firstName, phoneNumber, sumSertificate, squareSertificate, notes } = req.body;
    await sendSert(firstName, phoneNumber, sumSertificate, squareSertificate, notes);
    res.json({ msg: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error sending message" });
  }
});

async function sendSert(firstName, phoneNumber, sumSertificate, squareSertificate, notes) {
  const sertTransporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });
  
  sertTransporter.use(
    "compile",
    hbs({
      viewEngine: {
        extName: ".hbs",
        partialsDir: "views/",
        layoutsDir: "views/",
        defaultLayout: "sert.hbs",
      },
      viewPath: "views/",
      extName: ".hbs",
    })
  );

 

  const emailSettings = {
    from: `Karina chisto-if <${process.env.GMAIL_USER}>`,
    to: process.env.SEND_TO,
    subject: "Нова заявка на сертифікат",
    template: "sert",
    context: {
      firstName,
      phoneNumber,
      sumSertificate: sumSertificate ? "Сертифікат на суму" : "",
      squareSertificate: squareSertificate? "Сертифікат на площу" : "",
      notes,
    },
    
  }

  try {
    const info = await sertTransporter.sendMail(emailSettings);
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error(error);
    throw new Error("Error sending email");
  }
}

async function sendMail(name, phone, cleaningType, square, address, comments) {
  const popupTransporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });


  popupTransporter.use(
    "compile",
    hbs({
      viewEngine: {
        extName: ".hbs",
        partialsDir: "views/",
        layoutsDir: "views/",
        defaultLayout: "popup.hbs",
      },
      viewPath: "views/",
      extName: ".hbs",
    })
  );

  const cleaningTypeText = Array.isArray(cleaningType)
    ? cleaningType
        .map((type) => {
          switch (type) {
            case "general":
              return "Генеральне";
            case "regular":
              return "Регулярне";
            case "renovation":
              return "Післяремонтне";
            case "commercial":
              return "Комерційне";
            default:
              return "Не вказано";
          }
        })
        .join(", ")
    : cleaningType
    ? "Не вказано"
    : "";

  const mailConfigs = {
    from: `Karina chisto-if <${process.env.GMAIL_USER}>`,
    to: process.env.SEND_TO,
    subject: "Нова заявка",
    template: "popup",
    context: {
      name,
      phone,
      cleaningType: cleaningTypeText,
      square,
      address,
      comments,
    },
  };

  try {
    const info = await popupTransporter.sendMail(mailConfigs);
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error(error);
    throw new Error("Error sending email");
  }
}

app.get("/", (req, res) => {
  res.send("Server started");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
