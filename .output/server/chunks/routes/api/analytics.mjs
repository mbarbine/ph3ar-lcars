function analytics(req, res) {
  const { eventName, data } = req.body;
  console.log(`Event tracked: ${eventName}`, data);
  res.status(200).json({ success: true });
}

export { analytics as default };
//# sourceMappingURL=analytics.mjs.map
