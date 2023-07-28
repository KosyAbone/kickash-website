"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMailFromContactPage = exports.DisplayContactPage = exports.DisplayProjectsPage = exports.DisplayServicesPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'About Us', page: 'about' });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayServicesPage(req, res, next) {
    res.render('index', { title: 'Our Services', page: 'services' });
}
exports.DisplayServicesPage = DisplayServicesPage;
function DisplayProjectsPage(req, res, next) {
    res.render('index', { title: 'Our Features', page: 'features' });
}
exports.DisplayProjectsPage = DisplayProjectsPage;
function DisplayContactPage(req, res, next) {
    const sentMail = "initial";
    res.render('index', { title: 'Contact Us', page: 'contact', sentMail });
}
exports.DisplayContactPage = DisplayContactPage;
function SendMailFromContactPage(req, res, next) {
    const { name, email, inquiry } = req.body;
    const transporter = nodemailer_1.default.createTransport({
        service: "gmail",
        port: 587,
        secure: false,
        auth: {
            user: "byteforce77@gmail.com",
            pass: "wjrjbsemafagvlkx",
        }
    });
    const mailOptions = {
        from: email,
        to: 'byteforce77@gmail.com',
        subject: 'User Inquiry',
        text: `Name: ${name}\nEmail: ${email}\nInquiry: ${inquiry}`,
    };
    const autoReplyMailOptions = {
        from: 'byteforce77@gmail.com',
        to: email,
        subject: 'Automatic Reply: Thank You for Your Inquiry',
        text: `Dear ${name},\n\nThank you for contacting us. We have received your inquiry and will get back to you as soon as possible.\n\nBest regards,\nTeam Byte Force`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
            const sentMail = "error";
            res.render('index', { title: 'Contact Us', page: 'contact', sentMail });
        }
        else {
            console.log('Email sent:', info.response);
            const sentMail = "sent";
            transporter.sendMail(autoReplyMailOptions, (error, info) => {
                if (error) {
                    console.log('Error sending auto-reply:', error);
                }
                else {
                    console.log('Auto-reply sent:', info.response);
                }
            });
            res.render('index', { title: 'Contact Us', page: 'contact', sentMail });
        }
    });
}
exports.SendMailFromContactPage = SendMailFromContactPage;
//# sourceMappingURL=index.js.map