// server/api/logger.js
export default function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
}

export function errorHandler(err, req, res, next) {
  console.error(`[${new Date().toISOString()}] Error:`, err);
  res.status(500).send('Internal Server Error');
}

