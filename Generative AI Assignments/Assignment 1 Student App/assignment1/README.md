# FastAPI Student Management API

## Overview

This FastAPI application provides a simple API for managing student records. It allows you to perform CRUD operations (Create, Read, Update, Delete) on student data.

## Setup Instructions

To run this FastAPI application, follow these steps:

1. Clone the repository:

```bash
   git clone <repository_url>
```

2. Navigate to the project directory:

```bash
cd assignment1
```

3. Install Dependencies

```bash
poetry install
```

4.Run the FastAPI application:

```bash
poetry run dev # dev configuration has been done in pyproject.toml
```

**or using uvicorn**

```bash
uvicorn main:app --reload
```

The FastAPI application will be running locally on http://127.0.0.1:8000.

# API Endpoints

## Retrieve all students

- **GET /students**
  - Returns a list of all students.

## Retrieve specific student details

- **GET /students/{student_id}**
  - Returns details of a specific student identified by `{student_id}`.

## Add a new student

- **POST /students/**
  - Adds a new student to the database. Requires a JSON payload with student details.

## Update a student's details

- **PUT /students/{student_id}**
  - Updates details of a specific student identified by `{student_id}`. Requires a JSON payload with updated student details.

## Delete a student

- **DELETE /students/{student_id}**
  - Deletes a specific student identified by `{student_id}`.

## Notes

- Make sure to provide valid JSON payloads for POST and PUT requests.
- Ensure that the `{student_id}` provided in the URL path for retrieving, updating, or deleting a student exists in the database.
- This is a basic implementation and may require additional error handling, authentication, and validation depending on your use case.
