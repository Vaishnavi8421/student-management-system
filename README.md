
# Student Management System

A simple **Student Management System** built using FastAPI, Supabase, HTML, CSS, and JavaScript. The project provides basic CRUD operations to manage student records.

## Features

* Add a new student
* View all students
* View a single student
* Update student details
* Delete a student
* Store student data in Supabase
* REST API using FastAPI
* Simple and responsive frontend

## Technologies Used

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Python
* FastAPI
* Uvicorn

### Database

* Supabase

### Tools

* Visual Studio Code
* Git
* GitHub

## Project Structure

```text
Student Management System/
│
├── backend/
│   └── main.py
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── .gitignore
└── requirements.txt
```

> The `.env` file contains Supabase credentials and is intentionally excluded from GitHub using `.gitignore`.

## API Endpoints

| Method | Endpoint         | Description      |
| ------ | ---------------- | ---------------- |
| POST   | `/students`      | Add a student    |
| GET    | `/students`      | Get all students |
| GET    | `/students/{id}` | Get one student  |
| PUT    | `/students/{id}` | Update a student |
| DELETE | `/students/{id}` | Delete a student |

## Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
cd student-management-system
```

### 2. Install dependencies

```bash
pip install -r requirements.txt
```

### 3. Create `.env`

Create a `.env` file in the project root:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
```

Do not upload this file to GitHub.

### 4. Run the backend

From the project root:

```bash
python -m uvicorn backend.main:app --reload
```

The API will run at:

```text
http://127.0.0.1:8000
```

### 5. Run the frontend

Open `frontend/index.html` using **VS Code Live Server**.

## Database

The project uses a Supabase table named `students` with the following columns:

```text
id
name
marks
course
```

## Purpose

This project was developed as a practical project to understand **frontend-backend integration, REST APIs, CRUD operations, database connectivity, and Git/GitHub workflow**.

## Author

**Vaishnavi Patil**

Computer Science & Engineering Student
=======
# Student Management System

A simple Student Management System built using **FastAPI, Supabase, HTML, CSS, and JavaScript**.

This project provides basic CRUD operations to manage student records.

## Features

* Add a new student
* View all students
* View a single student by ID
* Update student details
* Delete a student
* Store student data using Supabase
* REST API using FastAPI
* Simple frontend using HTML, CSS and JavaScript

## Technologies Used

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Python
* FastAPI
* Uvicorn

### Database

* Supabase

### Tools

* Visual Studio Code
* Git
* GitHub

## Project Structure

```text
Student Management System/
│
├── backend/
│   └── main.py
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── requirements.txt
├── .gitignore
└── .env
```

> `.env` contains database credentials and is not included in the GitHub repository.

## API Endpoints

| Method | Endpoint         | Description            |
| ------ | ---------------- | ---------------------- |
| POST   | `/students`      | Add a new student      |
| GET    | `/students`      | Get all students       |
| GET    | `/students/{id}` | Get one student        |
| PUT    | `/students/{id}` | Update student details |
| DELETE | `/students/{id}` | Delete a student       |

## Installation

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
cd student-management-system
```

### 2. Install dependencies

```bash
pip install -r requirements.txt
```

### 3. Create `.env`

Create a `.env` file in the project root:

```text
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
```

Do not upload the `.env` file to GitHub.

### 4. Run the backend

From the project root:

```bash
python -m uvicorn backend.main:app --reload
```

The API will run at:

```text
http://127.0.0.1:8000
```

### 5. Run the frontend

Open `frontend/index.html` using **VS Code Live Server**.

## Database

The project uses a Supabase table named:

```text
students
```

with the following columns:

| Column | Type    |
| ------ | ------- |
| id     | Integer |
| name   | Text    |
| marks  | Integer |
| course | Text    |

## Purpose

This project was developed as a learning project to understand:

* REST API development
* CRUD operations
* FastAPI
* Database integration
* Frontend-backend communication
* Git and GitHub

## Author

**Vaishnavi Patil**

Computer Science & Engineering Student
>>>>>>> 9202297 (Connect frontend to deployed backend)
