// App.tsx
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
// auth import missing due to broken firebaseConfig export
import Register from "./Register";
import Login from "./Login";

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Incorrectly calling onAuthStateChanged without `auth`
    onAuthStateChanged((currentUser) => setUser(currentUser));
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.email}</h2>
          <button onClick={() => /* handleLogout not implemented */}>Logout</button>
        </div>
      ) : (
        <>
          <Register />
          <Login />
        </>
      )}
    </div>
  );
};

export default App;