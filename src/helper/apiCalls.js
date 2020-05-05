import Axios from "axios";

export const getUsers = (next)=>{
    return Axios.get("https://randomuser.me/api?results=100")
    .then((response)=>{
        let usersFromServer = response.data.results;
        
        let users = []
        let incompleteUsers = usersFromServer.slice(0,50)
        incompleteUsers.forEach((user)=>{
            user.picture =null
        })
        let completeUsers =   usersFromServer.slice(50)
        users = [...incompleteUsers,...completeUsers]
        console.log(users)
        next(users)

    })
    .catch((error)=>{
        console.log(error)
    })
}