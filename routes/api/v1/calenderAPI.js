const express = require('express');
const router = express.Router();
const Event = require('../../../models/calender');

router.post('/add-event', async (req, res) => { 
  const { event_name, startTime, endTime, description } = req.body;

  
  if (!event_name || !startTime || !endTime) {
    return res.status(400).json({ message: 'Event name, start time, and end time are required.' });
  }

  try {
    const newEvent = await Event.create({
      event_name,
      start_time: startTime, 
      end_time: endTime, 
      description: description || '', 
    });
    res.status(201).json({ success: true, event: newEvent });
  } catch (error) {
    console.error('Error adding event:', error);
    res.status(500).json({ message: 'Error adding event' });
  }
});


router.get('/get-events', async (req, res) => { //gets data from database to send to frontend
  try {
    const events = await Event.findAll();
    const formattedEvents = events.map(event => ({
      title: event.event_name, 
      start: new Date(event.start_time).toISOString(), //formats the time in full calendar format
      end: new Date(event.end_time).toISOString(),
      description: event.description || ''
    }));
    res.status(200).json(formattedEvents);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ message: 'Error fetching events' });
  }
});

module.exports = router;





