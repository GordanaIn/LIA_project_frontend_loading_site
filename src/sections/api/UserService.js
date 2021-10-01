
const UserService = {
    saveUser:async (user)=>{
        const response= await (await fetch('http://localhost:8080/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })).json()
    },
}
export default UserService;
