"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute"; // ✅ Import the ProtectedRoute wrapper

  
  export default function Dashboard() {
 const [user, setUser] = useState("");
 const router = useRouter();

 useEffect(() => {
   const token = localStorage.getItem("token");
   if (!token) return;

   //✅ You can fetch some user data if needed
   setUser("welcome to the dashboard");
 }, []);

 const handleLogout = () => {
   localStorage.removeItem("token");
   router.push("/login");
 };

 return (
   <ProtectedRoute>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-bold mb-4">Dashboard</h2>
          <p>{user}</p>
          <button
            onClick={handleLogout}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </ProtectedRoute>
  );
}