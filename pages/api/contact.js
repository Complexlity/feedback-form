// pages/api/contact.js

export default function handler(req, res) {
  if (req.method === "POST") {
    const formValues = req.body;
    try {
      // Function to validate email and send form values goes here
      return res.status(200).json({ message: "Success: Message Sent" });
    } catch (error) {
      return res.status(400).json({
        message: "Failed: Something went wrong. Please try again later",
      });
    }
  }
}
