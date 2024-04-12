import "../styles/Usuarios.css";
import { useState, useEffect } from "react";

const Usuarios = ({
  name,  post,  reaction,  time,  avatar,  messaje,  imgChest,  notification,  setNotificationState,  notificationState,  markAll,}) => {
  const [userNotification, setUserNotification] = useState(false);

  useEffect(() => {
    if (notification === true) {
      setUserNotification(true);
    }
  }, [notification]);

  const readToggle = () => {
    userNotification == true ? setUserNotification(false) : "";
    setNotificationState((notificationState) => notificationState - 1);
  };

  return (
    <>
      <div className="post">
        <img className="image" src={avatar} alt="avatar" />
        <div className="allText">
          <p>
            <span className="name">{name}</span>
            <span>{post}</span>
            <span className="reaction">{reaction}</span>
            <span
              className={`status ${userNotification ? "not-read" : ""}`}
              onClick={readToggle}
            ></span>
          </p>
          <p className="time">{time}</p>

          {typeof messaje !== "undefined" && (
            <div className="message-container">
              <p className="message">{messaje}</p>
            </div>
          )}
        </div>

        {typeof imgChest !== "undefined" && (
          <img className="imageChest" src={imgChest} alt="avatar" />
        )}
      </div>
    </>
  );
};

export default Usuarios;
