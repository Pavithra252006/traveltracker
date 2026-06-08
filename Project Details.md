# Travel Tracker: A Mobile App for Capturing Trip Information

## Project Description

Travel Tracker is a GPS-based mobile application that automatically captures and stores trip-related information such as start location, destination, travel distance, and travel duration. The application helps collect accurate travel data for transportation planning, travel analysis, and understanding travel patterns more effectively than traditional survey methods.

---

## Problem Statement

Transportation planning requires accurate travel data. Traditional travel surveys are time-consuming, expensive, and cover only a limited number of people. These limitations result in incomplete travel information and affect effective transportation planning. An automated solution is needed to collect reliable and real-time travel data.

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

## Module List

### 1. User Authentication Module

* User Registration
* User Login

### 2. GPS Tracking Module

* Capture Current Location
* Track Travel Route

### 3. Trip Management Module

* Start Trip
* End Trip
* Record Trip Details

### 4. Database Management Module

* Store User Information
* Store Trip Information
* Retrieve Travel History

### 5. Analytics Module

* View Travel Records
* Generate Travel Statistics

---

## Table List

### User Table

| Field Name | Data Type    | Description            |
| ---------- | ------------ | ---------------------- |
| UserID     | INT          | Unique User Identifier |
| Name       | VARCHAR(50)  | User Name              |
| Email      | VARCHAR(100) | User Email Address     |
| Password   | VARCHAR(100) | User Password          |

### Trip Table

| Field Name    | Data Type    | Description            |
| ------------- | ------------ | ---------------------- |
| TripID        | INT          | Unique Trip Identifier |
| UserID        | INT          | User Reference         |
| StartLocation | VARCHAR(100) | Starting Point         |
| EndLocation   | VARCHAR(100) | Destination Point      |
| Distance      | FLOAT        | Travel Distance        |
| Duration      | VARCHAR(50)  | Travel Duration        |
| TransportMode | VARCHAR(50)  | Mode of Transport      |
| Date          | DATE         | Travel Date            |

### Location Table

| Field Name | Data Type | Description                |
| ---------- | --------- | -------------------------- |
| LocationID | INT       | Unique Location Identifier |
| TripID     | INT       | Trip Reference             |
| Latitude   | DOUBLE    | Latitude Coordinate        |
| Longitude  | DOUBLE    | Longitude Coordinate       |
| Timestamp  | DATETIME  | Time of Location Capture   |

## Expected Outcome

The Travel Tracker application is expected to provide an efficient and automated solution for collecting trip-related information. The system will accurately record travel details such as start location, destination, distance, and duration using GPS technology.

### Expected Results

* Automated collection of travel data.
* Accurate recording of trip information.
* Secure storage of user and trip data.
* Easy access to travel history records.
* Reduced dependence on traditional travel surveys.
* Improved transportation planning and analysis.
* Foundation for future AI-based travel prediction and route recommendation systems.
