# 🔐 **DevAuth**

A simple full-stack authentication app built with **Next.js**, **Express.js**, **MongoDB**, and **JWT**.  
It allows users to securely **sign up**, **log in**, access **protected routes**, and manage sessions using **JSON Web Tokens (JWT)**.

---

## 🚀 **Live Demo**

- **Frontend (Vercel):** [https://devauth-frontend.vercel.app](https://devauth-frontend.vercel.app)
- **Backend (Render):** [https://devauth-backend-xxxxx.onrender.com](https://devauth-backend-xxxxx.onrender.com)

---

## 🛠️ **Tech Stack**

| Frontend       | Backend      | Database       | Authentication |
|----------------|---------------|----------------|----------------|
| Next.js 15     | Express.js    | MongoDB Atlas  | JWT            |
| Tailwind CSS   | Node.js       | Mongoose       | bcryptjs       |
| Vercel (deploy)| Render (deploy)|                | dotenv         |

---

## ✨ **Features**

- ✅ **User Signup & Login** with JWT-based authentication.
- ✅ Passwords securely hashed using **bcryptjs**.
- ✅ **Protected routes** (**Dashboard** & **Profile**) only accessible after login.
- ✅ Auto token validation from backend (**secure**).
- ✅ Responsive UI with **Tailwind CSS**.
- ✅ Simple **Navbar** with Logout functionality.
- ✅ Deployed on **Vercel (frontend)** & **Render (backend)**.

---

## 🔒 **Routes Overview**

| Route         | Method | Protected | Description                 |
|---------------|--------|-----------|-----------------------------|
| `/signup`     | POST   | ❌ No      | Create new user             |
| `/login`      | POST   | ❌ No      | Login and receive JWT       |
| `/profile`    | GET    | ✅ Yes     | Get protected user info     |
| `/dashboard`  | GET    | ✅ Yes     | Example dashboard route     |

---

## 🙌 **Acknowledgements**

This was built as part of my **learning journey** into full-stack web development with **Node.js** & **Next.js**.

---

## 📣 **Connect with Me**

- **LinkedIn:** [Prerna Bahoriya](https://in.linkedin.com/in/prerna-bahoriya-a948492b2)
- **GitHub:** [prernabahoriya](https://github.com/prernabahoriya)


