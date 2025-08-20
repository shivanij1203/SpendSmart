import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/register/", { email, password });
      alert("Account created! Please login.");
      window.location.href = "/login";
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <input type="email" placeholder="Email" className="w-full p-3 border rounded mb-4" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full p-3 border rounded mb-6" onChange={(e) => setPassword(e.target.value)} />
        <button className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600">Register</button>
      </form>
    </div>
  );
}
