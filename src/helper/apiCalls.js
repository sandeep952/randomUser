import Axios from "axios";

export const getUsers = (next)=>{
    return Axios.get("https://randomuser.me/api?results=100")
    .then((response)=>{
        let usersFromServer = response.data.results;
        
        let users = []
        users[0] = usersFromServer.slice(0,50)
        users[1] = usersFromServer.slice(50)
        next(users)

    })
    .catch((error)=>{
        console.log(error)
    })
}