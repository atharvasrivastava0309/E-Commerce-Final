# 🛒 ECOMMERCE - MERN STACK PROJECT

Welcome to **Ecommerce**, a full-fledged MERN stack project designed for showcasing a seamless online shopping experience. This project comes with a beautifully designed frontend, powerful backend, dynamic product filtering, responsive routing, and essential user interaction pages like **Contact** and **About Us**.

---

## ✅ What's New / Major Improvements

This version includes several important **UI, UX, and functional fixes** to elevate the shopping experience:

* 🖼️ **Product Images Now Load Promptly**
  Ensured all product images are fully visible and load seamlessly without any delay or broken links.

* 📦 **Complete Product Details Display**
  Every product now reflects accurate and complete information—pricing, description, rating, and category.

* 🎯 **Navbar Icon Visibility Fixed**
  The **Home Page Navbar Icon** now stays highlighted in **red** permanently for clarity—previously, it was not visible due to blending with the background.

* 🌟 **Enhanced Featured Products Section**
  Layout optimized for better readability and product emphasis in the **Featured** area.

* 🧭 **Navbar Overlay Alignment Fix**
  Solved alignment issues when toggling the mobile navigation or switching tabs.

* 📝 **Products Tab Text Overlapping Resolved**
  Fixed the overlapping of text inside the **Products** tab for better readability and UI clarity.

---

## 🧰 Tech Stack

**Frontend**

* React.js
* React Router DOM
* Axios
* CSS3 / Tailwind (optional)

**Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose

**Tools**

* Postman (API Testing)
* VS Code
* Git & GitHub

---

## 🌐 Features

### 🏠 Home Page

* Stunning landing page with an animated scroll experience.
* Call-to-action directing to product listings.

![Home page](./screenshots/screenshot1.png)

---

### 🌟 Featured Products

* Grid view of curated featured items.
* Quick access to trending and hot products.

![Featured Products](./screenshots/screenshot2.png)

---

### 🔍 Full Product Listing + Filters

* View all available products dynamically.
* Filter products based on:

  * **Price Range** (via Slider)
  * **Rating Threshold** (via Slider)
  * **Category Selection**

![Products Page](./screenshots/screenshot4.png)

![Categories Filter](./screenshots/screenshot5.png)
![Categories Filter](./screenshots/screenshot9.png)

---

### 🧭 Routing and Tab Switching

* Smooth navigation between pages using React Router DOM.
* Includes routes:

  * `/` → Home
  * `/products` → Product Listing
  * `/about` → About Us
  * `/contact` → Contact

![Tab Switching](./screenshots/screenshot3.png)

---

### 📇 About Us Page

* Displays developer’s profile with social media link.
* Highlights branding using logos like YouTube and Instagram.

![About Us](./screenshots/screenshot7.png)

---

### ✉️ Contact Page

* Simple yet effective display of contact email for user queries.

![Contact Page](./screenshots/screenshot6.png)

---

### 📥 Footer Section

* Contains mobile app download CTA.
* Responsive and fixed at the bottom of long pages.
* Provides quick access to the brand identity.

![Footer Section](./screenshots/screenshot8.png)

---

## 📡 API Functionalities

* **GET `/api/products`** – Fetch all products
* **GET `/api/products/:id`** – Fetch single product by ID
* **POST `/api/products`** – Create new product (admin only)
* **PUT `/api/products/:id`** – Update a product (admin only)
* **DELETE `/api/products/:id`** – Delete a product (admin only)
* **GET `/api/products?category=laptop&price[lte]=50000&ratings[gte]=4`** – Filter products based on query

---

## 📂 Folder Structure Overview

```
/client
   └── src
       ├── components
       ├── pages
       ├── App.js
       └── index.js

/server
   ├── controllers
   ├── models
   ├── routes
   ├── config
   └── server.js
```

---

## 👤 Developer

**Atharva Srivastava**
📧 [atharvasrivastava@gmail.com](mailto:atharvasrivastava@gmail.com)

---
