const express = require('express');
const convert = require('html-to-text');
const auth = require('../middleware/auth');
const accountController = require('../controllers/accountController');
const router = express.Router();

/*************************************************************************************************/
/* Render the homepage
/*************************************************************************************************/
router.get('/', auth.guestAccess, async (req, res) => res.render('index', {
  session: req.session,
  featured: await accountController.getFeaturedAccounts(),
  clean: convert.convert,
}));

/*************************************************************************************************/
/* Render the GSMM application page
/*************************************************************************************************/
router.get('/application', auth.guestAccess, async (req, res) => res.render('application', {
  session: req.session,
  featured: await accountController.getFeaturedAccounts(),
  clean: convert.convert,
}));

/*************************************************************************************************/
/* Render the GSMM market page
/*************************************************************************************************/
router.get('/market', auth.guestAccess, async (req, res) => res.render('market', {
  session: req.session,
  featured: await accountController.getFeaturedAccounts(),
  clean: convert.convert,
}));

/*************************************************************************************************/
/* Render the GSMM application terms
/*************************************************************************************************/
router.get('/application/terms', auth.guestAccess, async (req, res) => res.render('legal/generalGuidelines', {
  session: req.session,
  featured: await accountController.getFeaturedAccounts(),
  clean: convert.convert,
}));

/*************************************************************************************************/
/* Render the unauthorized error page
/*************************************************************************************************/
router.get('/error/unauthorized', auth.guestAccess, async (req, res) => res.render('errors/unauthorized', {
  session: req.session,
  featured: await accountController.getFeaturedAccounts(),
  clean: convert.convert,
}));

/*************************************************************************************************/
/* Render articles pages
/*************************************************************************************************/
router.get('/article-teaching', auth.guestAccess, async (req, res) => res.render('articles/article-teaching', {
    session: req.session,
    featured: await accountController.getFeaturedAccounts(),
    clean: convert.convert,
  }));

router.get('/article-making', auth.guestAccess, async (req, res) => res.render('articles/article-making', {
    session: req.session,
    featured: await accountController.getFeaturedAccounts(),
    clean: convert.convert,
  }));

router.get('/article-sharing', auth.guestAccess, async (req, res) => res.render('articles/article-sharing', {
    session: req.session,
    featured: await accountController.getFeaturedAccounts(),
    clean: convert.convert,
  }));

module.exports = router;
