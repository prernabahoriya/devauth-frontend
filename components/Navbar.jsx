"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

   useEffect(() => {
  const checkAuth = () => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  };

  checkAuth(); // Check when Navbar loads

  // ✅ Update when user navigates to different pages
  window.addEventListener("storage", checkAuth);

  return () => {
    window.removeEventListener("storage", checkAuth);
  };
}, []);
  // This effect checks if the user is logged in by looking for a token in localStorage.
  // It sets the `isLoggedIn` state accordingly.

  const handleLogout = () => {
  localStorage.removeItem("token");
  setIsLoggedIn(false);
  router.push("/login");
  window.location.reload(); // ✅ Force reload to update Navbar
};
  // This function handles the logout process by removing the token from localStorage,
  // updating the `isLoggedIn` state, redirecting to the login page, and

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link href="/">DevAuth</Link>
      </div>
      <div className="space-x-4">
        <Link href="/">Home</Link>

          {!isLoggedIn && <Link href="/login">Login</Link>}
          {!isLoggedIn && <Link href="/signup">Signup</Link>}

          {isLoggedIn && <Link href="/dashboard">Dashboard</Link>}
          {isLoggedIn && <Link href="/profile">Profile</Link>}

          {isLoggedIn && (
            <button onClick={handleLogout} className="text-red-400 hover:text-red-600">
              Logout
            </button>
          )}
      </div>
    </nav>
  );
}
