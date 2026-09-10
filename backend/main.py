from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from supabase import create_client, Client
from dotenv import load_dotenv
import os

# Load variables from .env
load_dotenv()

# Create FastAPI application
app = FastAPI()

@app.get("/")
def home():
    return {"message": "FastAPI is working"}
#middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
) 

# Get Supabase credentials
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

# Check credentials
if not SUPABASE_URL or not SUPABASE_KEY:
    raise ValueError("SUPABASE_URL and SUPABASE_KEY must be set in .env")

# Connect to Supabase
supabase: Client = create_client(
    SUPABASE_URL,
    SUPABASE_KEY
)


# CREATE
@app.post("/students")
def create_student(name: str, marks: int, course: str):

    student = {
        "name": name,
        "marks": marks,
        "course": course
    }

    try:
        response = (
            supabase
            .table("students")
            .insert(student)
            .execute()
        )

        return {
            "message": "Student created successfully",
            "data": response.data
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


# READ ALL
@app.get("/students")
def get_students():

    try:
        response = (
            supabase
            .table("students")
            .select("*")
            .execute()
        )

        return {
            "message": "Students fetched successfully",
            "data": response.data
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )

# Get one student
@app.get("/students/{student_id}")
def get_student(student_id: int):

    try:
        response = (
            supabase
            .table("students")
            .select("*")
            .eq("id", student_id)
            .execute()
        )

        if not response.data:
            raise HTTPException(
                status_code=404,
                detail="Student not found"
            )

        return {
            "message": "Student fetched successfully",
            "data": response.data[0]
        }

    except HTTPException:
        raise

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )

# UPDATE
@app.put("/students/{student_id}")
def update_student(
    student_id: int,
    name: str,
    marks: int,
    course: str
):

    student = {
        "name": name,
        "marks": marks,
        "course": course
    }

    try:
        response = (
            supabase
            .table("students")
            .update(student)
            .eq("id", student_id)
            .execute()
        )

        if not response.data:
            raise HTTPException(
                status_code=404,
                detail="Student not found"
            )

        return {
            "message": "Student updated successfully",
            "data": response.data
        }

    except HTTPException:
        raise

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


# DELETE
@app.delete("/students/{student_id}")
def delete_student(student_id: int):

    try:
        response = (
            supabase
            .table("students")
            .delete()
            .eq("id", student_id)
            .execute()
        )

        if not response.data:
            raise HTTPException(
                status_code=404,
                detail="Student not found"
            )

        return {
            "message": "Student deleted successfully",
            "data": response.data
        }

    except HTTPException:
        raise

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )
