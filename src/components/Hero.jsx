import {useState} from 'react'

function Hero(){
    const[user, setUser] = useState()
    console.log({user})
    //user === falsey (undefined)
    //!user === truthy
    //!!user === false (Boolean)
    //!!!user === true (Boolean)
    if(!user){
        return <button>Login</button>
    }
return (
    <h1>Hello {user}</h1>
)


}

export default Hero