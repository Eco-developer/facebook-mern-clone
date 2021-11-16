import Pusher from "pusher";
import 'dotenv/config';

const pusher = new Pusher({
  appId: "1260685",
  key: process.env.PUSHER_API_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: "us2",
  useTLS: true
});

export default pusher;
