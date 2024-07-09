const api = "https://student-submission-portal-back-end.vercel.app";
// const api = "http://localhost:3001";

const checkAuth = async () => {
    const res = await fetch(`${api}/students/check-auth`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        credentials: "include"
    });
    const result = await res.json();

    return result;
};

const getUserData = async () => {
    const res = await fetch(`${api}/students/get-data`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        credentials: "include"
    });
    const result = await res.json();

    return result;
};

const studentLogin = async (emailOrCnic, password) => {
    const res = await fetch(`${api}/students/login`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            emailOrCnic, password
        }),
        credentials: "include"
    });
    const result = await res.json();

    return result;
};

const teacherLogin = async (emailOrCnic, password) => {
    const res = await fetch(`${api}/teacher/login`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            emailOrCnic, password
        }),
        credentials: "include"
    });
    const result = await res.json();

    return result;
};

const studentsignup = async (data) => {

    const res = await fetch(`${api}/student/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
        credentials: "include"
    });
    const result = await res.json();

    return result;
};

const studentLogout = async () => {
    const res = await fetch(`${api}/students/logout`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        credentials: "include"
    });
    const result = await res.json();

    return result;
};

<<<<<<< HEAD
const getTeacherAssignment = async () => {
    const res = await fetch(`https://links-ehps.onrender.com/assignment/get-assignment/668674f32aff4efcec1e31d8`);
=======
const teacherLogout = async () => {
    const res = await fetch(`${api}/teachers/logout`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        credentials: "include"
    });
>>>>>>> 639ebf83fc53017c5a420f70107eeda0a1851b50
    const result = await res.json();

    return result;
};

<<<<<<< HEAD
export { checkAuth, getUserData, studentsignup, studentLogin ,getTeacherAssignment};
=======
export { checkAuth, getUserData, studentsignup, studentLogin, studentLogout };
>>>>>>> 639ebf83fc53017c5a420f70107eeda0a1851b50
