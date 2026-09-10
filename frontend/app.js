

// ==========================================
// FASTAPI URL
// ==========================================

const API_URL = "http://127.0.0.1:8000";

console.log("script.js is running");


// ==========================================
// SHOW / HIDE SECTIONS
// ==========================================

window.showSection = function (sectionId) {

    const sections = document.querySelectorAll(".section");

    // Hide all sections
    sections.forEach(function (section) {
        section.classList.add("hidden");
    });

    // Show selected section
    const selectedSection = document.getElementById(sectionId);

    if (selectedSection) {
        selectedSection.classList.remove("hidden");
    }

    // Automatically load students
    if (sectionId === "viewSection") {
        getAllStudents();
    }
};


// ==========================================
// ADD STUDENT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const addForm = document.getElementById("addStudentForm");

    addForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const name = document.getElementById("addName").value.trim();
        const marks = document.getElementById("addMarks").value;
        const course = document.getElementById("addCourse").value.trim();

        const message = document.getElementById("addMessage");

        try {

            const response = await fetch(
                `${API_URL}/students?name=${encodeURIComponent(name)}&marks=${marks}&course=${encodeURIComponent(course)}`,
                {
                    method: "POST"
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.detail || "Failed to add student");
            }

            message.textContent = "Student added successfully!";
            message.className = "success";

            addForm.reset();

        } catch (error) {

            message.textContent = error.message;
            message.className = "error";

        }

    });

});


// ==========================================
// VIEW ALL STUDENTS
// ==========================================

async function getAllStudents() {

    const table = document.getElementById("studentTable");

    table.innerHTML = `
        <tr>
            <td colspan="4">Loading students...</td>
        </tr>
    `;

    try {

        const response = await fetch(`${API_URL}/students`);

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.detail || "Failed to fetch students");
        }

        table.innerHTML = "";

        if (!result.data || result.data.length === 0) {

            table.innerHTML = `
                <tr>
                    <td colspan="4">No students found.</td>
                </tr>
            `;

            return;
        }

        result.data.forEach(function (student) {

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.marks}</td>
                <td>${student.course}</td>
            `;

            table.appendChild(row);

        });

    } catch (error) {

        table.innerHTML = `
            <tr>
                <td colspan="4" class="error">
                    ${error.message}
                </td>
            </tr>
        `;

    }
}


// ==========================================
// VIEW ONE STUDENT
// ==========================================

async function getOneStudent() {

    const id = document.getElementById("viewStudentId").value;

    const resultDiv = document.getElementById("oneStudentResult");

    if (!id) {

        resultDiv.innerHTML = `
            <p class="error">Please enter student ID.</p>
        `;

        return;
    }

    try {

        const response = await fetch(
            `${API_URL}/students/${id}`
        );

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.detail || "Student not found");
        }

        const student = result.data;

        resultDiv.innerHTML = `
            <div class="student-card">

                <p>
                    <strong>ID:</strong> ${student.id}
                </p>

                <p>
                    <strong>Name:</strong> ${student.name}
                </p>

                <p>
                    <strong>Marks:</strong> ${student.marks}
                </p>

                <p>
                    <strong>Course:</strong> ${student.course}
                </p>

            </div>
        `;

    } catch (error) {

        resultDiv.innerHTML = `
            <p class="error">${error.message}</p>
        `;

    }
}


// ==========================================
// UPDATE STUDENT
// ==========================================

async function updateStudent() {

    const id = document.getElementById("updateId").value;
    const name = document.getElementById("updateName").value.trim();
    const marks = document.getElementById("updateMarks").value;
    const course = document.getElementById("updateCourse").value.trim();

    const message = document.getElementById("updateMessage");

    if (!id || !name || !marks || !course) {

        message.textContent = "Please fill all fields.";
        message.className = "error";

        return;
    }

    try {

        const response = await fetch(
            `${API_URL}/students/${id}?name=${encodeURIComponent(name)}&marks=${marks}&course=${encodeURIComponent(course)}`,
            {
                method: "PUT"
            }
        );

        const result = await response.json();

        if (!response.ok) {
            throw new Error(
                result.detail || "Failed to update student"
            );
        }

        message.textContent = "Student updated successfully!";
        message.className = "success";

        document.getElementById("updateId").value = "";
        document.getElementById("updateName").value = "";
        document.getElementById("updateMarks").value = "";
        document.getElementById("updateCourse").value = "";

    } catch (error) {

        message.textContent = error.message;
        message.className = "error";

    }
}


// ==========================================
// DELETE STUDENT
// ==========================================

async function deleteStudent() {

    const id = document.getElementById("deleteId").value;

    const message = document.getElementById("deleteMessage");

    if (!id) {

        message.textContent = "Please enter student ID.";
        message.className = "error";

        return;
    }

    const confirmed = confirm(
        "Are you sure you want to delete this student?"
    );

    if (!confirmed) {
        return;
    }

    try {

        const response = await fetch(
            `${API_URL}/students/${id}`,
            {
                method: "DELETE"
            }
        );

        const result = await response.json();

        if (!response.ok) {
            throw new Error(
                result.detail || "Failed to delete student"
            );
        }

        message.textContent = "Student deleted successfully!";
        message.className = "success";

        document.getElementById("deleteId").value = "";

    } catch (error) {

        message.textContent = error.message;
        message.className = "error";

    }
}