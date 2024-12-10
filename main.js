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
market.post('/add-event', async (req, res) => {
    const { event_name, startTime, endTime, description } = req.body;

    // Ensure required fields are provided
    if (!event_name || !startTime || !endTime) {
        return res.status(400).json({ message: 'Event name, start time, and end time are required.' });
    }

    try {
        // Send event data to the database via the API
        const response = await fetch('http://localhost:3001/api/event/add-event', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ event_name, startTime, endTime, description }),
        });

        const result = await response.json();

        if (response.ok) {
            return res.status(200).json({ success: true, message: 'Event added successfully.', event: result.event });
        } else {
            return res.status(500).json({ message: 'Error adding event to the database.' });
        }
    } catch (error) {
        console.error('Error adding event:', error);
        return res.status(500).json({ message: 'Error processing the event.' });
    }
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

