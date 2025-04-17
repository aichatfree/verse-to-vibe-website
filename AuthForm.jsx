import { useState } from "react";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  
  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      alert("Successfully signed in/created account!");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleAuthSubmit}>
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
      <button type="submit">{isSignUp ? "Sign Up" : "Log In"}</button>
      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? "Already have an account? Log In" : "Don't have an account? Sign Up"}
      </button>
    </form>
  );
};
