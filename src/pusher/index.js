import Pusher from "pusher";

const pusher = new Pusher({
  appId: "1260685",
  key: "2b4b95ca21b84c3f5841",
  secret: "5307096f266b5d41fc42",
  cluster: "us2",
  useTLS: true
});

export default pusher;
