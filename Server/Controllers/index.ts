import express from 'express';
import nodemailer from 'nodemailer';

// Controller Logic to display your home page
export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home' });
}

// Controller Logic to display your about page
export function DisplayAboutPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    res.render('index', { title: 'About Us', page: 'about' });
}

// Controller Logic to display your services page
export function DisplayServicesPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    res.render('index', { title: 'Our Services', page: 'services' });
}

// Controller Logic to display your projects page
export function DisplayProjectsPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    res.render('index', { title: 'Our Features', page: 'features' });
}

// Controller Logic to display your projects page
export function DisplayContactPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    const sentMail = "initial";
    res.render('index', { title: 'Contact Us', page: 'contact', sentMail });
}

//Controller Logic to handle Contact Form submission
export function SendMailFromContactPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    const { name, email, inquiry } = req.body;

    // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: "byteforce77@gmail.com",
      pass: "wjrjbsemafagvlkx",
    }
  });

  // Email content for the inquiry
  const mailOptions = {
    from: email,
    to: 'byteforce77@gmail.com',
    subject: 'User Inquiry',
    text: `Name: ${name}\nEmail: ${email}\nInquiry: ${inquiry}`,
  };

   // Email content for the automatic reply
  const autoReplyMailOptions = {
    from: 'byteforce77@gmail.com',
    to: email,
    subject: 'Automatic Reply: Thank You for Your Inquiry',
    text: `Dear ${name},\n\nThank you for contacting us. We have received your inquiry and will get back to you as soon as possible.\n\nBest regards,\nTeam Byte Force`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      const sentMail = "error";
      res.render('index', { title: 'Contact Us', page: 'contact', sentMail});
    } else {
        console.log('Email sent:', info.response);
        const sentMail = "sent";

        // Send the automatic reply
        transporter.sendMail(autoReplyMailOptions, (error, info) => {
            if (error) {
                console.log('Error sending auto-reply:', error);
            } else {
                console.log('Auto-reply sent:', info.response);
            }
        });
        res.render('index', { title: 'Contact Us', page: 'contact', sentMail});
    }
});

  
}