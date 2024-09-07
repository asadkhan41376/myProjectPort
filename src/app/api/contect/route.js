import nodemailer from 'nodemailer';

export async function POST(req) {
  const body = await req.json(); // jo bhi req ari hy use json me convert krra hy 
  const { user_name, user_email, user_phone, message } = body; // destrchring

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: user_email,
      to: 'asadkhan41376@gmail.com', // Receiver email address
      subject: `Message from ${user_name}`,
      text: `Name: ${user_name}\nEmail: ${user_email}\nPhone: ${user_phone}\nMessage: ${message}`,
    });

    return new Response(JSON.stringify({ message: 'Message sent successfully' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Failed to send message' }), {
      status: 500,
    });
  }
}
