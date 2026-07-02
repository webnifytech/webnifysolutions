import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, phone, service, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "webnifysolutions@gmail.com", 
        pass: "obbmzcarsaucqvii",   
      },
    });

    const mailOptions = {
      from: `"Webnify Solutions" <yourgmail@gmail.com>`,
      to: [
        "anubhavshakya543@gmail.com",
        "webnifysolutions@gmail.com",
      ],
      subject: "New Enquiry from Contact Form - Webnify Solutions",
      html: `
        <h2>New Enquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error });
  }
}