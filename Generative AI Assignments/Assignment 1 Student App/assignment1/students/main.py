from fastapi import FastAPI, Body
import uvicorn

app = FastAPI()

Students = [{
    "id": 1,
    "name": "Ahmad",
    "age": 21,
    "class": "15",
},
    {
    "id": 2,
    "name": "Ali",
    "age": 20,
    "class": "9th",
},
    {
    "id": 3,
    "name": "Subhan",
    "age": 21,
    "class": "15",
}
]

# - GET / students: Retrieve all students.


@app.get("/students")
def read_all_students():
    return Students

#  - GET /students/{student_id}: Retrieve specific student details.


@app.get("/students/{student_id}")
def read_specific_student(student_id):
    for student in Students:
        if student.get("id") == int(student_id):
            return student
    return {"message": "Student not Exsist"}


# POST / students: Add a new student


@app.post("/students/")
def post_student(new_student=Body()):
    Students.append(new_student)
    return {"message": "New Student Added"}


# PUT /students/{student_id}: Update a student's details.
@app.put("/students/{student_id}")
def update_student(student_id, updated_student=Body()):
    for student in range(len(Students)):
        if Students[student].get("id") == int(student_id):
            Students[student] = updated_student
            return {"message": "Student Updated"}
    return {"message": "Student Not Exsist"}


# DELETE / students/{student_id}: Delete a student.
@app.delete("/students/{student_id}")
async def delete_student(student_id):
    for student in Students:
        if student.get("id") == int(student_id):
            Students.remove(student)
            return {"message": "Student Deleted"}


def start():
    uvicorn.run("main:app", host="127.0.0.1", port=8000)
