const express = require('express');
const router = express.Router();
const Event = require('../../../models/calender');

router.post('/add-event', async (req, res) => {
  const { title, startTime, endTime, description } = req.body;

  
  if (!title || !startTime || !endTime) {
    return res.status(400).json({ message: 'Title, start time, and end time are required.' });
  }

  try {
    const newEvent = await Event.create({
      title,
      start: startTime, 
      end: endTime, 
      description: description || '', 
    });
    res.status(201).json({ success: true, event: newEvent });
  } catch (error) {
    console.error('Error adding event:', error);
    res.status(500).json({ message: 'Error adding event' });
  }
});

router.get('/get-events', async (req, res) => {
  try {
      // Fetch all events from the database
      const events = await Event.findAll();
      console.log('Events fetched:', events);
      
      // Send the events as a JSON response
      res.status(200).json(events);
  } catch (error) {
      console.error('Error fetching events:', error);
      res.status(500).json({ message: 'Error fetching events' });
  }
});



module.exports = router;
