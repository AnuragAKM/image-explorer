# 📸 Image Search & Download Web App

A simple and clean web application that allows users to search for high-quality images and download them instantly. The app uses the **Pexels API** to fetch images based on the search query. It supports **infinite scrolling** (load more), image download, and photographer credits.

---

## 🚀 Features

- 🔎 Search for images using keywords (e.g., "Nature", "Virat Kohli", "Cars", etc.)
- 📥 Download images in a single click
- 📄 Load more images using "More" button
- 👤 Show photographer credit
- ⚡ Fast and responsive experience using JavaScript and Fetch API

---

## 📂 Project Structure

```plaintext
├── index.html          # Main HTML structure
├── style.css           # Custom styling for the app
├── script.js           # JavaScript logic (search, fetch, display, download)
├── camera.svg          # Icon for photographer credit
├── download.svg        # Icon for download button
├── README.md

# 📸 Image Search & Download Web App

A simple web application to search and download high-quality images using the Pexels API.

---

## 🔑 Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Pexels API** – Free API to fetch stock images

---

## ⚙️ Setup Instructions

1. Clone the repository or download the project files.
2. Create a free account on [Pexels](https://www.pexels.com/api/) and get your API key.
3. Replace the API key in `script.js`:

```js
const apiKey = "YOUR_PEXELS_API_KEY";
```

4. Open `index.html` in your browser and enjoy!

---


---

## 🔒 API Usage Note

- You get **200 requests per hour** on the free plan of Pexels API.
- Always give **credit to the photographer** (already implemented in the app).

---

## 📌 Future Improvements (Optional)

- Add **light/dark mode**
- Add **image resolution selector** (small, medium, large)
- Allow **search history** or **trending search terms**
- Integrate **Unsplash API** as alternative (toggle between APIs)
- Implement **lazy loading** or **infinite scroll**
