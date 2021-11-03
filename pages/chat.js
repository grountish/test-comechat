import dynamic from "next/dynamic";
import { useEffect } from "react";

const CometChatNoSSR = dynamic(() => import("./CometChatNoSSR"), {
  ssr: false,
});

function Chat() {
    var UID = "user1";
  useEffect(() => {
    window.CometChat = require("@cometchat-pro/chat").CometChat;

    var name = "Kevin";

    var user = new CometChat.User(UID);

    user.setName(name);
    // CometChat.getUser(user).then((user) => {
    //   if (user.name) {
    //     console.log(user);
    //   } else {

    //       CometChat.createUser(user, "9da79cec26e6c1fba1d79b467515073cd154af56").then(
    //         (user) => {
    //           console.log("user created", user);
    //         },
    //         (error) => {
    //           console.log("error", error);
    //         }
    //       );
    //   }
    // });

  });

  return (
    <div>
      <CometChatNoSSR uid={UID} />
    </div>
  );
}

export default Chat;
