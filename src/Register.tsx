import { useState, FormEvent } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
// Missing import for `auth`
import { auth } from "./firebaseConfig"; // This import will cause an error due to missing `auth` export

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);


  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // Incorrect usage of `auth` in `createUserWithEmailAndPassword`
      await createUserWithEmailAndPassword(auth,email, password);
      alert("User registered!");
    } catch (err: any) {
      setError(err.message);
      console.error("Registration error:", err.message); // Error handling is incomplete
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input
        type="email" // Email input should be type "email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        minLength={6}
      />
      <button type="submit">Register</button> {/* Missing `type="submit"` */}
      {error && <p style={{ color: "red"}}>{error}</p>} 
    </form>
  );
};

export default Register;