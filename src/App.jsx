import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Usuarios from "./components/Usuarios.jsx";
//import UsuariosJson from "./assets/fichero.json";
import { listUser } from "./assets/fichero.js";
import { useState, useEffect } from "react";

const App = () => {
  const [notificationState, setNotificationState] = useState(0);
  const [markAll, setMarkAll] = useState(false);
  // const listUser = UsuariosJson.listUser;

  useEffect(() => {
    let cont = 0;
    listUser.map((user) => (user.notification === true ? cont++ : ""));
    setNotificationState(cont);
  }, []);

  return (
    <>
      <section className="section">
        <Header
          notificationState={notificationState}
          setNotificationState={setNotificationState}
          setMarkAll={setMarkAll}
        />
        {listUser.map((user, index) => (
          <Usuarios
            key={index}
            setNotificationState={setNotificationState}
            notificationState={notificationState}
            markAll={markAll}
            // Below I used a Spread Operator, to make this component, less verbous.
            {...user}
          />
        ))}
        <Footer />
      </section>
    </>
  );
};

export default App;
