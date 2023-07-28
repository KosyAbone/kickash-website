import express from 'express';
let router = express.Router();

// import the index controller
import { DisplayHomePage, DisplayAboutPage, DisplayServicesPage, DisplayProjectsPage, DisplayContactPage, SendMailFromContactPage } from '../Controllers';

/* GET Default Route */
router.get('/', (req, res, next) => DisplayHomePage(req, res, next) );

/* GET Home Page */
router.get('/home', (req, res, next) => DisplayHomePage(req, res, next) );

/* GET About Page */
router.get('/about', (req, res, next) => DisplayAboutPage(req, res, next) );

/* GET Services Page */
router.get('/services', (req, res, next) => DisplayServicesPage(req, res, next) );

/* GET Projects Page */
router.get('/features', (req, res, next) => DisplayProjectsPage(req, res, next) );

/* GET Contact Page */
router.get('/contact', (req, res, next) => DisplayContactPage(req, res, next) );

/* POST Contact Form to send mail */
router.post('/contact', (req, res, next) => SendMailFromContactPage(req, res, next) );

export default router;
