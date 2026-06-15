# Form Design

## Project Title

Travel Tracker: A Mobile App for Capturing Trip Information

## Introduction

The form design defines the input fields required for user registration, authentication, trip tracking, and profile management within the Travel Tracker application.

---

# 1. Registration Form

## Purpose

Allows new users to create an account.

### Fields

| Field Name       | Data Type | Required |
| ---------------- | --------- | -------- |
| Name             | Text      | Yes      |
| Email            | Email     | Yes      |
| Password         | Password  | Yes      |
| Confirm Password | Password  | Yes      |

### Form Layout

```text
Name
[_______________]

Email
[_______________]

Password
[_______________]

Confirm Password
[_______________]

[ Sign Up ]
```

---

# 2. Login Form

## Purpose

Allows registered users to access the application.

### Fields

| Field Name | Data Type | Required |
| ---------- | --------- | -------- |
| Email      | Email     | Yes      |
| Password   | Password  | Yes      |

### Form Layout

```text
Email
[_______________]

Password
[_______________]

[ Login ]
```

---

# 3. Trip Form

## Purpose

Collects trip-related information from the user.

### Fields

| Field Name       | Data Type | Required |
| ---------------- | --------- | -------- |
| Current Location | GPS       | Yes      |
| Destination      | Text      | Yes      |
| Transport Mode   | Dropdown  | Yes      |

### Transport Mode Options

* Car
* Bike
* Bus
* Train
* Walking

### Form Layout

```text
Current Location
[ Auto Detected ]

Destination
[_______________]

Transport Mode
[ Bus ▼ ]

[ Start Tracking ]
```

---

# 4. Profile Form

## Purpose

Allows users to view and update personal information.

### Fields

| Field Name   | Data Type | Required |
| ------------ | --------- | -------- |
| Name         | Text      | Yes      |
| Email        | Email     | Yes      |
| Phone Number | Number    | No       |

### Form Layout

```text
Name
[_______________]

Email
[_______________]

Phone Number
[_______________]

[ Update ]
```

---

# Expected Outcome

The form design provides a structured method for collecting user information, trip details, and profile data. These forms improve usability and ensure accurate data collection within the Travel Tracker application.
