export default function (req, res) {
    const { username, password } = req.body;
  
    if (username === 'admin' && password === 'password') {
      res.status(200).json({ token: 'fake-jwt-token' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  }
  