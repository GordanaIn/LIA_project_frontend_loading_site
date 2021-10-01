
const UserService = {
    saveUser:async (user)=>{
        const response= await (await fetch('http://localhost:8080//api/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })).json()
    },
    saveStudent:async (student)=>{
        const response= await (await fetch('http://localhost:8080//api/student', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(student)
        })).json()
    },
}
export default UserService;
