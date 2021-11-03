import dynamic from "next/dynamic";
import { useState } from "react";
import Link from "next/link";
 
const CONSTANTS = {
  APP_ID: "196508ba26c2db10",
  REGION: "us",
  AUTH_KEY: "9da79cec26e6c1fba1d79b467515073cd154af56",
  UID: "SUPERHERO1",
};

function Chat() {
  const [resu, setResu] = useState("log");
  const postData = async () => {
    console.log(23);
  };

  return (
    <div>
      <button onClick={postData}>CREATE</button>
      <h1>{resu}</h1>
      <Link href="/chat">CHAT</Link>
    </div>
  );
}

export default Chat;
