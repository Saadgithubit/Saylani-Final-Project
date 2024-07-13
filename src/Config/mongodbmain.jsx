import axios from "axios";
import Swal from 'sweetalert2'
import Cookies from 'js-cookie'



const api = "https://links-ehps.onrender.com";
// const api = "http://localhost:3005";
const tokenName = Cookies.get('jwttoken')

const headers = {
    Authorization: `Bearer ${tokenName}`
};
console.log(tokenName);
// http://localhost:3005
// https://links-ehps.onrender.com
axios.defaults.withCredentials = true;
const options = {
    secure: true,
    sameSite: "None",
    httpOnly: true,
    expires: 100
};

const getCookieExpxireTime = () => {
    const cookieExpireTime = 100 * 365 * 24 * 60 * 60 * 1000;

    const expires = new Date(Date.now() + cookieExpireTime);

    return expires;
};
// const api = "http://localhost:3001";
const opt = { 
    options
    };
opt.expires = getCookieExpxireTime();
const checkAuth = async () => {

    try {
        const res = await axios.post(`${api}/student/check-auth`,null,headers)
        // console.log(res);
        return res.data

    } catch (error) {
        console.log(error);
    }
};

const getStudentData = async () => {
    const res = await fetch(`${api}/students/get-data`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        credentials: "include"
    });
    const result = await res.json();
    console.log(result)
    return result;
};






const studentLogin = async (emailOrCnic, password) => {
    try {
        const res = await axios.put(`${api}/student/login`, { emailOrCnic, password });

        // Assuming res.data.msg contains a success message
        Swal.fire({
            title: "Good job!",
            text: res.data.msg,
            icon: "success"
        });

        console.log(res.data);

        // Set cookie with secure and HTTP-only options
        Cookies.set('jwttoken', res?.data?.token, { expires: 100 })


        return res.data;
    } catch (error) {
        console.error("Error in studentLogin:", error);
        // Handle error gracefully, e.g., show error message
        Swal.fire({
            title: "Error!",
            text: "Failed to login. Please try again.",
            icon: "error"
        });
        // Optionally rethrow the error to propagate it further
        throw error;
    }
};

const teachersignup = async (data) => {

    try {
        const res = await axios.post(`${api}/teacher/signup`, data)
        Swal.fire({
            title: "Good job!",
            text: res.data.msg,
            icon: "success"
        });
        return res.data

    } catch (error) {
        console.log(error.response.data);
    }

}
const teacherLogin = async (emailOrCnic, password) => {
    try {
        const res = await axios.put(`${api}/teacher/login`, { emailOrCnic, password });

        // Assuming res.data.msg contains a success message
        Swal.fire({
            title: "Good job!",
            text: res.data.msg,
            icon: "success"
        });

        console.log(res.data);

        // Set cookie with secure and HTTP-only options
        Cookies.set('jwttoken', res?.data?.token, { expires: 100 })


        return res.data;
    } catch (error) {
        console.error("Error in studentLogin:", error);
        // Handle error gracefully, e.g., show error message
        Swal.fire({
            title: "Error!",
            text: "Failed to login. Please try again.",
            icon: "error"
        });
        // Optionally rethrow the error to propagate it further
        throw error;
    }
};

const studentsignup = async (data) => {

    try {
        const res = await axios.post(`${api}/student/signup`, data)
        Swal.fire({
            title: "Good job!",
            text: res.data.msg,
            icon: "success"
        });
        return res.data
    } catch (error) {
        console.log(error.response.data);
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

    const gatallUsers = async () => {
        try {
            const res = await axios.get(`${api}/student/get-all-users`)
            console.log(res);
            return res.data

        } catch (error) {
            console.log(error);
        }
    }


    // https://links-ehps.onrender.com/
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
    try {
        // Retrieve the token from cookies or wherever you store it

        // Set headers with Authorization token
        

        // Make the API call with headers
        const res = await axios.put(`${api}/student/logout`, null, { headers });
        console.log(res);
        if(res.data.msg){
            
            Cookies.remove('jwttoken')
        }
        // Assuming res.data contains logout success message or data
        return res.data;

    } catch (error) {
        console.log("Error in studentLogout:", error);
        // Handle error gracefully
        throw error;
    }
};

const teacherLogout = async () => {
    try {
        // Retrieve the token from cookies or wherever you store it

        // Set headers with Authorization token
        

        // Make the API call with headers
        const res = await axios.put(`${api}/teacher/logout`, null, { headers });
        console.log(res);
        if(res.data.msg){
            
            Cookies.remove('jwttoken')
        }
        // Assuming res.data contains logout success message or data
        return res.data;

    } catch (error) {
        console.log("Error in studentLogout:", error);
        // Handle error gracefully
        throw error;
    }
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

const getTeacherAllAsigmment = async () => {

    // 1
    try {


        const res = await axios.get(`${api}/assignment/get-assignment`)
        console.log(res);
        return res.data

    } catch (error) {
        console.log(error);
    }

};

const getAsigmmentById = async (id) => {

    // 1
    try {


        const res = await axios.get(`${api}/assignment/get-assignment/${id}`)
        console.log(res);
        return res.data

    } catch (error) {
        console.log(error);
    }

};


export { checkAuth, studentsignup, getAsigmmentById, studentLogin, getTeacherAllAsigmment, studentLogout, teachersignup, teacherLogin, getStudentData };
