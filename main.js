require("dotenv").config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const market = express();

market.use(express.json());
market.use(bodyParser.json({ limit: '1MB' }));
market.use(bodyParser.urlencoded({ limit: '1MB', extended: true }));

market.use(cookieParser());
market.use(express.static(path.join(__dirname, 'views/static')));
market.set("views", path.join(__dirname, 'views'));
market.set("view engine", "ejs");

market.use('/api/account', require('./routes/api/v1/accountAPI'));
market.use('/api/product', require('./routes/api/v1/productAPI'));
market.use('/api/socials', require('./routes/api/v1/socialMediaLinkAPI'));
market.use('/api/application', require('./routes/api/v1/applicationAPI'));

market.use('/', require('./routes/root'));
market.use('/makers', require('./routes/makers'));
market.use('/account', require('./routes/account'));
market.use('/products', require('./routes/products'));
market.use('/admin', require('./routes/admin'));

var publicDir = path.join(__dirname, 'gssmAR/public');

market.use("/public", express.static(publicDir));
market.get("/", function (req, res){
    res.render("partials/navigation", { session: req.session });
});
market.get("/arcomponent", function (req, res){
    res.render("arcomponent", { session: req.session });
});
market.use('/arcomponent', require('./routes/products'));

const auth = require('./middleware/auth');
const convert = require('html-to-text');
const accountController = require('./controllers/accountController');

market.get('*', auth.guestAccess, async (req, res) => {
    res.status(404).render('errors/404.ejs', { session: req.session,
    featured: await accountController.getFeaturedAccounts(),
    clean: convert.convert,
    });
});

market.listen(3001, 'localhost')