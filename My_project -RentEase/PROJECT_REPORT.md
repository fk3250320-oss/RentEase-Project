# RentEase Project Report

## Overview

RentEase is a rental marketplace interface built with HTML, CSS, and JavaScript. It allows users to create rental bundles from furniture and appliance products, review pricing, and submit a callback request.

## Purpose

The goal of RentEase is to demonstrate a functional rental storefront with client-side state management, search/filter controls, and a responsive UI.

## Features

- Product catalog with category tabs and search
- Sort by featured, price low-to-high, and price high-to-low
- Monthly rental estimates with discount calculation
- Refundable deposit estimate
- Rental duration and location controls
- Bundle item count and quantity updates
- Simple checkout request form
- Electron wrapper for desktop launch

## Added Items

New rental products included:
- Instant Water Geyser
- RO Water Purifier
- HEPA Air Purifier
- Modular Wardrobe
- Classic Almirah

## Files and Responsibilities

- `index.html` — app structure and sections
- `styles.css` — visual design and layout
- `app.js` — product array, state logic, UI rendering, event handling
- `main.js` — Electron main process for desktop app
- `package.json` — app metadata and dev dependency
- `run-rentease.bat` — Windows desktop shortcut launcher
- `rentease.ico` — custom icon for shortcut

## Next steps for deployment

1. Install Git and create a GitHub repository.
2. Push the local project to the GitHub repo.
3. Enable GitHub Pages in repository settings to get a live site URL.
4. Optionally package the app with Electron Packager for a distributable executable.
