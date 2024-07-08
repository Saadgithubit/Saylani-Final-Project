import axios from "axios";

const api = "https://links-ehps.onrender.com";
// const api = "http://localhost:3001";

const checkAuth = async () => {
    // const res = await fetch(`${api}/students/check-auth`, {
    //     headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //     },
    //     credentials: "include"
    // });
    // const result = await res.json();

    // return result;
    try {


        const res = await axios.post(`${api}/students/check-auth`)
        console.log(res);
        return res.data

    } catch (error) {
        console.log(error);
    }
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
    try {


        const res = await axios.put(`${api}/student/login`, emailOrCnic, password)
        console.log(res);
        return res.data

    } catch (error) {
        console.log(error);
    }
};
const teachersignup = async (data) => {
    console.log(data);

    try {
        const res = await axios.post(`${api}/teacher/signup`, data)
        console.log(res);
        return res.data

    } catch (error) {
        console.log(error);
    }

}
const teacherLogin = async (emailOrCnic, password) => {
    try {


        const res = await axios.put(`${api}/teacher/login`, emailOrCnic, password)
        console.log(res);
        return res.data

    } catch (error) {
        console.log(error);
    }
};

const studentsignup = async (data) => {
    console.log(data);

    try {
        const res = await axios.post(`${api}/student/signup`, data)
        console.log(res);
        return res.data

    } catch (error) {
        console.log(error);
    }


    const TeacherAssignmentPost = async (description, content, title, courseId) => {
        console.log(data);

        try {
            const res = await axios.post(`${api}/assignment/post-assignment`, description, content, title, courseId)
            console.log(res);
            return res.data

        } catch (error) {
            console.log(error);
        }

    }

    const GetTeacherAssignment = async (Assignmentid) => {
        try {
            const res = await axios.get(`${api}/assignment/get-assignment/${Assignmentid}`)
            console.log(res);
            return res.data
    
        } catch (error) {
            console.log(error);
        }
    }
    // const res = await fetch(`${api}/student/signup`, {
    //     method: "POST",
    //     headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ data }),
    //     credentials: "include"
    // });
    // const result = await res.json();

    // return result;
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

const teacherLogout = async () => {
    const res = await fetch(`${api}/teachers/logout`, {
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


const courseAdd = async (teacher, batch, courseName) => {
    try {
        const res = await axios.post(`${api}/course/add`, teacher, batch, courseName)
        console.log(res);
        return res.data

    } catch (error) {
        console.log(error);
    }
}

const studentAdd = async (batch, courseName) => {
    try {
        const res = await axios.post(`${api}/course/addStudent`, batch, courseName)
        console.log(res);
        return res.data

    } catch (error) {
        console.log(error);
    }
}


const getCourseandAllStudenDetail = async (courseid) => {
    try {


        const res = await axios.put(`${api}/getStudets/${courseid}`)
        console.log(res);
        return res.data

    } catch (error) {
        console.log(error);
    }
};

const getStudentAllCourses = async () => {

    // 1
    try {


        const res = await axios.put(`${api}/student/getAllCourses`)
        console.log(res);
        return res.data

    } catch (error) {
        console.log(error);
    }


    // 2

    //     try {


    //         const res = await axios.put(`${api}/course/getstudentallcourses`)
    //         console.log(res);
    //         return res.data

    //     } catch (error) {
    //    console.log(error);     
    //     }
};

const getTeacherAllCourses = async () => {
    try {


        const res = await axios.put(`${api}/course/getteacherallcourses`)
        console.log(res);
        return res.data

    } catch (error) {
        console.log(error);
    }
};





export { checkAuth, getUserData, studentsignup, studentLogin, studentLogout };
