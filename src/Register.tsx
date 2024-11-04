import { useState, FormEvent } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
// Missing import for `auth`
import { auth } from "./firebaseConfig"; // This import will cause an error due to missing `auth` export

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // Incorrect usage of `auth` in `createUserWithEmailAndPassword`
      await createUserWithEmailAndPassword(email, password);
      alert("User registered!");
    } catch (err: any) {
      console.log("Registration error:", err.message); // Error handling is incomplete
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input
        type="text" // Email input should be type "email"
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
      <button>Register</button> {/* Missing `type="submit"` */}
    </form>
  );
};

export default Register;