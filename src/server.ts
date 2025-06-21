import "dotenv/config"; // Load environment variables from .env file
const port = process.env.PORT || 5000;

(async () => {
  await connectDB();

  app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
  });
})();
