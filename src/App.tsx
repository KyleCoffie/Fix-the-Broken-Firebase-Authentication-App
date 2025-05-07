// App.tsx
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "./firebaseConfig"; // This import will cause an error due to missing `auth` export
// auth import missing due to broken firebaseConfig export
import Register from "./Register";
import Login from "./Login";

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Incorrectly calling onAuthStateChanged without `auth`
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
      setUser(currentUser);
      });

      return () => unsubscribe();
     }, []);

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.email}</h2>
          <button onClick={() => auth.signOut().then(() => setUser(null)).catch((error) => console.error("Logout error:", error))}>
            Logout
          </button>
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