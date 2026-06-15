# Design Review

## Project Title

Travel Tracker: A Mobile App for Capturing Trip Information

## Project Overview

Travel Tracker is a GPS-based mobile application designed to automatically capture and store trip-related information. The application records travel details such as start location, destination, distance traveled, and travel duration. The collected data can be used for travel analysis and transportation planning.

---

## Problem Statement

Transportation planning requires accurate travel data. Traditional travel surveys are time-consuming, expensive, and cover only a limited number of users. These limitations result in incomplete travel information and reduce the effectiveness of transportation planning. Therefore, an automated system is required to collect travel data efficiently and accurately.

---

## Project Objectives

### Main Objective

To develop a mobile application that automatically captures and stores trip-related information using GPS technology.

### Specific Objectives

* Record trip start and end locations.
* Track travel distance and duration.
* Store travel information securely.
* Maintain travel history records.
* Support transportation planning and travel analysis.

---

## Expected Outcome

* Automated collection of travel data.
* Accurate recording of trip information.
* Secure storage of user and trip records.
* Easy access to travel history.
* Improved transportation planning and analysis.
* Support for future AI-based travel prediction systems.

---

## ER Diagram Review

### Entities

#### User

* UserID
* Name
* Email
* Password

#### Trip

* TripID
* UserID
* StartLocation
* EndLocation
* Distance
* Duration
* Date

#### Location

* LocationID
* TripID
* Latitude
* Longitude
* Timestamp

### Relationships

* One User can have many Trips.
* One Trip can have many Location records.

---

## User Interface Review

### Login Screen

Allows users to securely access the application.

### Dashboard Screen

Provides access to trip tracking, travel history, profile management, and logout functions.

### Travel History Screen

Displays previously recorded trips.

### Trip Tracking Screen

Tracks and records travel information using GPS.

---

## Navigation Review

```text
Login
  ↓
Dashboard
  ↓
Start Trip
  ↓
GPS Tracking
  ↓
Trip Summary
  ↓
Travel History
```

The navigation structure is simple, user-friendly, and suitable for mobile devices.

---

## Form Design Review

### Registration Form

* Name
* Email
* Password
* Confirm Password

### Login Form

* Email
* Password

### Trip Form

* Current Location
* Destination
* Transport Mode

### Profile Form

* Name
* Email
* Phone Number

---

## Technology Stack Review

| Component   | Technology           |
| ----------- | -------------------- |
| Frontend    | Java                 |
| IDE         | VS Code              |
| Backend     | Python               |
| Database    | MySQL                |
| GPS Service | Android Location API |

---

## Conclusion

The proposed design for the Travel Tracker application meets the project requirements. The ER Diagram, Navigation Design, Form Design, and User Interface Design provide a strong foundation for application development. The system is scalable, user-friendly, and suitable for future enhancements involving Artificial Intelligence and travel analytics.
