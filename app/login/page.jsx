"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
// This code defines a simple login page using React and Tailwind CSS.
// It includes a form with fields for email and password, a submit button, and a link to the signup page.
import { toast } from "react-hot-toast"; // ✅ Importing toast for notifications

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  // ✅ useRouter is used to programmatically navigate after login

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://devauth-backend-y1mk.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Login response", data);

      if (res.ok) {
        toast.success(data.message);
        localStorage.setItem("token", data.token);
        router.push("/dashboard");  // ✅ Redirect to dashboard after login

      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error", error);
      toast.error("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow space-y-4 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
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
        <button type="submit" className="bg-blue-500 text-white px-4 py-3 rounded w-full hover:bg-blue-600 transition">
          Login
        </button>
      </form>
    </div>
  );
}

// This code defines a simple login page using React and Tailwind CSS.
// It includes a form with fields for email and password, a submit button, and a link to the signup page.
// The layout is centered on the screen with a light gray background, and the form has a white background with rounded corners and shadow for better visibility.