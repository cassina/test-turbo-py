import { onRequest } from "firebase-functions/v2";

export const helloWorld = onRequest((req, res) => {
  res.status(200).json({ message: "Hello from Cloud Run!" });
});
