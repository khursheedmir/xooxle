import { db } from "./firebase.js";
import { collection, addDoc, getDocs } from "firebase/firestore";

async function handleSearch() {
  const query = document.getElementById("searchInput").value.trim();
  if (!query) return alert("Please enter a search term.");

  // Save search to Firestore
  try {
    await addDoc(collection(db, "searchHistory"), {
      query: query,
      timestamp: new Date()
    });
    displaySearchHistory();
  } catch (error) {
    console.error("Error saving to Firestore:", error);
  }

  // You can also add actual search logic here (e.g., Google Custom Search API)
}

async function displaySearchHistory() {
  const historyList = document.getElementById("historyList");
  historyList.innerHTML = "";

  const snapshot = await getDocs(collection(db, "searchHistory"));
  snapshot.forEach((doc) => {
    const li = document.createElement("li");
    li.textContent = doc.data().query;
    historyList.appendChild(li);
  });
}

window.handleSearch = handleSearch;
displaySearchHistory(); // Load existing history on page load
