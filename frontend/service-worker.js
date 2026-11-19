const CACHE_NAME = "birthday-reminder-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/public/index.css",
  "/src/main.jsx",
  "/src/components/BirthdayElement.jsx",
  "/src/components/BirthdayReminder.jsx",
  "/src/components/Navbar.jsx",
  "/src/components/NewBirthday.jsx",
  "/src/components/ShowAll.jsx",
  "/src/components/ThisMonth.jsx",
  "/src/components/Upcoming.jsx",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
