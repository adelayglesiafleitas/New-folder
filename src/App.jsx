import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Usuarios from "./components/Usuarios.jsx";
import UsuariosJson from "./assets/fichero.json";
import { useState, useEffect } from "react";

const App = () => {
  const [notification, setNotification] = useState(0);
  const [markAll, setMarkAll] = useState(false);
  const listUser = UsuariosJson.listUser;

  useEffect(() => {
    let cont = 0;
    listUser.map((user) => (user.notification === "true" ? cont++ : ""));
    setNotification(cont);
  }, []);

  return (
    <>
      <section className="section">
        <Header
          notificationHoock={notification}
          setNotification={setNotification}
          setMarkAll={setMarkAll}
        />
        {listUser.map((user) => (
          <Usuarios
            key={listUser.length}
            name={user.name}
            post={user.post}
            reaction={user.reaction}
            time={user.time}
            avatar={user.avatar}
            messaje={user.message}
            imgChest={user.imgChest}
            notification={user.notification}
            setNotification={setNotification}
            notificationHoock={notification}
            markAll={markAll}
          />
        ))}
        <Footer />
      </section>
    </>
  );
};

export default App;
