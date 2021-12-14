import {Router} from "@material-ui/icons";

let inMemoryToken;
const UserService = {

    saveStudent:async (student)=>{
        return  await (await fetch('http://localhost:8081/api/student/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(student)
        })).json()
    },
    verifyLogin2: async (login)=>{
        return  await (await fetch('http://localhost:8082/api/login/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body:JSON.stringify(login)
        })).json();
    },
    getRole : async (access_token)=>{
        return fetch('http://localhost:8081/api/getRole/',{
            mode: "cors",
            headers: {
                'Authorization': 'Bearer '+access_token
            },
         }).then(res => res.json());
    },

    verifyLogin1 : async (username, password)=> {
    // Build formData object.
    let formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    return fetch('http://localhost:8081/api/login', {
        method: 'POST',
        mode: "cors",
        body: formData
    }).then(res => res.json());
    },
    addEmployee:async (employee)=>{
       return  await (await fetch('http://localhost:8081/api/company/addEmployee/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(employee)
        })).json()
    },

    saveSchool:async (school)=>{
        return  await (await fetch('http://localhost:8081/api/school/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(school)
        })).json()
    },
    updatePassword:async(modifyPassword)=>{
        return  await (await fetch('http://localhost:8081/api/student/modifyPassword/', {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(modifyPassword)
        })).json()
    },
    /*login: async (jwtToken)=>{
        const response= await (await fetch('http://localhost:8081/api/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(jwtToken)
        })).json()
        return response;
    },*/
    login: async ({ jwt_token, jwt_token_expiry }, noRedirect) =>{
        inMemoryToken = {
            token: jwt_token,
            expiry: jwt_token_expiry
        };
        if (!noRedirect) {
            Router.push('/app')
        }
    },

    verifyLogin: async(username, password)=>{
        const response = await fetch(`http://localhost:8081/api/login`, {
            method: 'POST',
            body: JSON.stringify({ username, password })
        })
        // Extract the JWT from the response
        const { jwt_token } = await response.json()
        //...
        // Do something the token in the login method
        await this.login({ jwt_token })
    },

}
export default UserService;
