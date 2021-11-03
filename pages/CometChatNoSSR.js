import { useEffect, useState } from "react";
// import CONSTANTS from './CONSTANTS'
import Link from "next/link";
import { CometChatUI } from "../pages/cometchat-pro-react-ui-kit/CometChatWorkspace/src/components/index";
import AppContext from "../context/AppContext";

const CONSTANTS = {
  APP_ID: "196508ba26c2db10",
  REGION: "us",
  AUTH_KEY: "9da79cec26e6c1fba1d79b467515073cd154af56",
  UID: "SUPERHERO1",
};
import { useContext } from "react";

const CometChatNoSSR = () => {
  const value = useContext(AppContext);
  const userName = value.userName;
  const user = value.user;
  const setUser = value.setUser;
  const [userLogged, setUserLogged] = useState("");
  useEffect(() => {
    let appSetting = new CometChat.AppSettingsBuilder()
      .subscribePresenceForFriends()
      .setRegion(CONSTANTS.REGION)
      .build();

    CometChat.init(CONSTANTS.APP_ID, appSetting).then(
      () => {
 
        const UID = userName;
        const authKey = CONSTANTS.AUTH_KEY;
        CometChat.login(UID, authKey).then(
          (userDB) => {
            setUser(userDB);
            console.log(user);
          },
          (error) => {
            console.log("Login failed with exception:", {
              error,
            });
          }
        );
      },
      (error) => {
        console.log("Initialization failed with error:", error);
        // Check the reason for error and take appropriate action.
      }
    );
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossOrigin="anonymous"
      />

      <CometChatUI />

      <Link href="add-friend" passHref>
        <button className="add-button">
          <i className="fas fa-plus"></i>
        </button>
      </Link>
    </div>
  );
};
export default CometChatNoSSR;
