import React, {useState} from 'react'

function Hero(){
    const[user, setUser] = useState()
    console.log({user})
    const handleLogin = () => {
        setUser ({firstName: 'Jacques', email: 'jacquesblaguerre@gmail.com', admin: true})
    }
    const handleLogout = () => {
        setUser()
    }
    if(!user){
        return <button onClick={handleLogin}>Login</button>
    }
return (
<>
    <h1>Hello {user.firstName}</h1>
    <button onClick={handleLogout}>Log out</button>
    </>  
)


}

export default Hero