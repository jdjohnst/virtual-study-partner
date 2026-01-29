# Virtual Study Partner PWA

A minimalist, distraction-free study companion web application. It features a video background, a Pomodoro-style timer loop, and is fully installable as a Progressive Web App (PWA).

## Features

* **PWA Ready:** Installable on iOS, Android, macOS, and Windows.
* **Offline Capable:** Service Worker caches assets for offline use.
* **Focus Mode:** Full-screen video background with glassmorphism UI.
* **State Machine:** Handles Idle, Study, and Break states preventing timer conflicts.
* **Jitter-Free:** Uses monospaced fonts for stable timer rendering.

## Tech Stack

* HTML5
* CSS3 (Flexbox, Grid, Backdrop-filter)
* Vanilla JavaScript (ES6+)

## Project Structure

```text
/
├── index.html       # Main application and logic
├── manifest.json    # PWA configuration
├── sw.js            # Service Worker for offline caching
├── icon-192.png     # App Icon (Small)
├── icon-512.png     # App Icon (Large)
└── README.md        # Documentation