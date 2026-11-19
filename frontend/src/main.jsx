import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BirthdayReminder from "./components/BirthdayReminder";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BirthdayReminder />
);
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  // Show your custom "Add to Home Screen" button here
});

// Assuming you have a button with id="installButton"
document.getElementById("installButton")?.addEventListener("click", (e) => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      }
      deferredPrompt = null;
    });
  }
});
