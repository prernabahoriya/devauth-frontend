"use client";
import { useState } from "react";
import { toast } from "react-hot-toast"; // ✅ Importing toast for notifications

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://devauth-backend-y1mk.onrender.com/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Signup response", data);

      if (res.ok) {
        toast.success(data.message);
      } else {
        toast.error(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error", error);
      toast.error("Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleSignup} className="bg-white p-8 rounded-xl shadow space-y-4 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Signup</h2>
        <input
          type="email"
          placeholder="Email"
          className="border p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-3 rounded w-full hover:bg-green-600 transition">
          Signup
        </button>
      </form>
    </div>
  );
}
// This code defines a Signup page for a web application using React.
// It includes a form for users to enter their email and password, and handles the signup process by sending a POST request to the server.
// The form is styled using Tailwind CSS for a clean and modern look.
