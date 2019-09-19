import express from "express";

const getServer = async () => {
  const app = express();

  app.get("/", (req, res) => res.status(200).json({ success: true }));

  return app;
};

export default getServer;
