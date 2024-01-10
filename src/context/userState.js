import { useState } from "react";
import UserContext from "./userContext";

const UserState = ({ children }) => {
  const s1 = {
    username: "",
    password: "",
    loggedin: false,
  };

  const [state, setState] = useState(s1);

  function login(username, password) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    setState({ loggedin: true, username, password });
  }

  function loadCredentials() {
    const newP = new Promise(function (resolve, reject) {
      if (
        !localStorage.getItem("username") ||
        !localStorage.getItem("password")
      ) {
        logout();
        resolve(false);
      } else {
        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");
        setState({ loggedin: true, username, password });
        resolve(true);
      }
    });
    return newP;
  }

  function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    setState(s1);
  }

  return (
    <UserContext.Provider value={{ state, login, loadCredentials, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
