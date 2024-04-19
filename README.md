# Event 360 - Responsive Website & Dashboard

Event 360 is a responsive website and dashboard project aimed at creating an immersive experience for event management and service showcasing. This project utilizes TypeScript and React for the frontend, integrating with a RESTful API for fetching and managing data. The dashboard section offers intuitive management of event items, recent events, and services, incorporating Tanstack Query for efficient state management.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [API Integration](#api-integration)
- [Responsiveness](#responsiveness)
- [User Interface (UI)](#user-interface-ui)
- [Installation](#installation)
- [Usage](#usage)

## Project Overview

Event 360 is a comprehensive project that includes both a responsive website and a dashboard section. The website features various sections, including Navbar, Header, Our Services, Event Items, Gallery, Pricing, Review, Recent Events, and Footer, all designed according to the provided Figma design.

### Landing Page

- **Navbar**: A navigation bar for easy navigation between sections.
- **Header**: Introduces the purpose of the website with a visually appealing design.
- **Our Services**: Dynamically fetched services displayed using Tanstack Query.
- **Event Items**: Displays upcoming events with Tanstack Query integration.
- **Gallery**: Showcases images related to services or events.
- **Pricing**: Presents pricing details for the offered services.
- **Review**: Displays customer testimonials for credibility.
- **Recent Events**: Highlights recent events with Tanstack Query for real-time updates.
- **Additional Sections**:
  1. **FAQ**: Answers to common questions about services and events.
  2. **Sponsor Updates**: Latest news and updates from event sponsors.

### Dashboard Section

- **Responsive Dashboard**: An intuitive and visually appealing dashboard.
- **User-Friendly Layout**: Prioritizes ease of use and navigation.
- **Event Items Management**: CRUD operations for managing event items.
- **Recent Event Management**: CRUD operations for managing recent events.

---

## Features

- **API Integration**: Fetches service and event data from a RESTful API.
- **Tanstack Query**: Efficient data management and state handling.
- **Responsiveness**: Ensures compatibility with various devices and screen sizes.
- **Animations**: Incorporates animations for enhanced user experience.
- **User Interface (UI)**: Implements a pixel-perfect design based on provided Figma files.
- **Dashboard Functionality**: Intuitive management of event items, and recent events.
- **CRUD Operations**: Allows Create, Read, Update, and Delete operations for events.

---

## Technology Stack

- **Frontend**:

  - TypeScript
  - React
  - Tanstack Query

- **Backend**:

  - TypeScript
  - Node
  - Express
  - MongoDB

- **API Integration**:

  - Axios

- **Animation**:
  - AOS (Animate On Scroll)

---

## API Integration

- The project fetches data from a RESTful API.
- API endpoints are defined for event items, and recent events.
- Utilizes Tanstack Query for efficient data fetching and updates.

---

## Responsiveness

- The website is designed to be fully responsive.
- Compatible with various devices including desktops, tablets, and mobile phones.

---

## User Interface (UI)

- Implements the UI as per the provided Figma design.
- Pixel-perfect design ensuring precise alignment and visual appeal.

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/iibrahim70/event-360-client.git
```

2. Install dependencies::

```bash
cd event-360-client
yarn
```

---

## Usage

1. Start the development server:

```bash
yarn dev
```

2. Open your browser and visit:

```bash
http://localhost:5173
```
