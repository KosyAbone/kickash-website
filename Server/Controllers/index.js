"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactPage = exports.DisplayFeaturesPage = exports.DisplayServicesPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}


function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'About Us', page: 'about' });
}


function DisplayServicesPage(req, res, next) {
    res.render('index', { title: 'Our Services', page: 'services' });
}


function DisplayFeaturesPage(req, res, next) {
    res.render('index', { title: 'Our Features', page: 'projects' });
}


function DisplayContactPage(req, res, next) {
    res.render('index', { title: 'Contact Us', page: 'contact' });
}

exports.DisplayHomePage = DisplayHomePage;
exports.DisplayAboutPage = DisplayAboutPage;
exports.DisplayServicesPage = DisplayServicesPage;
exports.DisplayFeaturesPage = DisplayFeaturesPage;
exports.DisplayContactPage = DisplayContactPage;
//# sourceMappingURL=index.js.map