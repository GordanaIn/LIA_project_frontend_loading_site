
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
    saveCompany:async (company)=>{
       return  await (await fetch('http://localhost:8081/api/company/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(company)
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
    login: async (login)=>{
        const response= await (await fetch('http://localhost:8081/api/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(login)
        })).json()
        return response;
    }
}
export default UserService;
