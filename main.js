require("dotenv").config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const market = express();

market.use(express.json());
market.use(bodyParser.json({ limit: '1MB' }));
market.use(bodyParser.urlencoded({ limit: '1MB', extended: true }));

market.use(cookieParser({ limit: '1MB' }));
market.use(express.static(path.join(__dirname, 'views/static')));
market.set("views", path.join(__dirname, 'views'));
market.set("view engine", "ejs");

market.use('/api/account', require('./routes/api/v1/accountAPI'));
market.use('/api/product', require('./routes/api/v1/productAPI'));
market.use('/api/socials', require('./routes/api/v1/socialMediaLinkAPI'));
market.use('/api/application', require('./routes/api/v1/applicationAPI'));
market.use('/api/event', require('./routes/api/v1/calenderAPI'));  // This is where event-related routes are handled.

market.use('/', require('./routes/root'));
market.use('/makers', require('./routes/makers'));
market.use('/account', require('./routes/account'));
market.use('/products', require('./routes/products'));
market.use('/admin', require('./routes/admin'));

const auth = require('./middleware/auth');
const convert = require('html-to-text');
const accountController = require('./controllers/accountController');

let events = [];

// Add Event Route (handle POST requests to add events)
market.post('/add-event', (req, res) => {
    const { title, startTime, endTime, description } = req.body;

    // Save event (for now it's an in-memory array, but you should persist it in a DB)
    const newEvent = { title, startTime, endTime, description };
    events.push(newEvent);

    // Optionally log it to the console for debugging
    console.log('Event added:', newEvent);

    // Send success response
    return res.status(200).json({ success: true, message: 'Event added successfully.', event: newEvent });
});

// Catch-all 404 route
market.get('*', auth.guestAccess, async (req, res) => {
    res.status(404).render('errors/404.ejs', { session: req.session,
        featured: await accountController.getFeaturedAccounts(),
        clean: convert.convert,
    });
});

// Start the server
market.listen(3001, 'localhost')

