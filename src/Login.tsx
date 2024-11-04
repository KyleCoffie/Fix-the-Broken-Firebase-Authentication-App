import { useState, FormEvent } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig"; // Will error due to missing `auth` export

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // Incorrectly omitting `auth` as the first parameter
      await signInWithEmailAndPassword(email, password);
      alert("User logged in!");
    } catch (err: any) {
      console.log("Login error:", err.message); // Error message not displayed to user
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
