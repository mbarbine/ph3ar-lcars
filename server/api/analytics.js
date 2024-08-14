export default function (req, res) {
    const { eventName, data } = req.body;
  
    // Here you would integrate with a real analytics backend
    console.log(`Event tracked: ${eventName}`, data);
  
    res.status(200).json({ success: true });
  }
  