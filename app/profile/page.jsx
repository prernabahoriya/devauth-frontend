"use client";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [message, setMessage] = useState("Loading...");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setMessage("⚠️ No token found. Please login.");
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/profile", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await res.json();

        if (res.ok) {
          setMessage(data.message);
          setUserId(data.userId);
        } else {
          setMessage(data.message || "❌ Access denied");
        }
      } catch (error) {
        setMessage("Something went wrong 😕");
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow space-y-4 text-center">
        <h2 className="text-2xl font-bold mb-2">Profile Page</h2>
        <p className="text-gray-700">{message}</p>
        {userId && <p className="text-gray-500 mt-2">🆔 User ID: {userId}</p>}
      </div>
    </div>
  );
}


// This code fetches the user's profile information from the server using a token stored in localStorage.
// It displays a message indicating whether the profile was successfully retrieved or if there was an error.
// If successful, it also shows the user's ID. The component uses the `useEffect` hook to perform the fetch operation when the component mounts.