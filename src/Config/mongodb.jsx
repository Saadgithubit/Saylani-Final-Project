// const api = "https://student-submission-portal-back-end.vercel.app";
const api = "http://localhost:3001";

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

// const signup = async (username, email, password) => {

//     const res = await fetch(`${api}/users/signup`, {
//         method: "POST",
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             username, email, password
//         }),
//         credentials: "include"
//     });
//     const result = await res.json();

//     return result;
// };

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

export { checkAuth, getUserData };