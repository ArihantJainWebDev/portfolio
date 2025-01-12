const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    console.log('Form Data Received:', { name, email, message });

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'arihantjainwebdev@gmail.com',
                pass: 'bylv tnnn ubwg vcsi',
            },
        });

        const mailOptions = {
            from: email,
            to: 'arihantjainwebdev@gmail.com',
            subject: `New Contact Form Submission from ${name}`,
            text: `You have a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send message.' });
        return;
    }

    res.status(200).json({ message: 'Form data received successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});