import './index.css';
import { useState, useEffect } from 'react';

function Login(){

    const [userName, setUserName] = useState([]);
    const changeUserName = (e) => {
        setUserName(e.target.value);
    }

    useEffect ( () => {

        const url = "/api?name=${encodeURIComponent(userName)}";
        console.log("hi")

        fetch(url)
            .then (response => response.json())
            .then (result => {
                console.log(result)
                setUserName(result)
                console.log(userName[1])
            })
            .catch(error => {
                console.log(error)
            })

    }, [] )    

    return(
        <section>
            <div className="formBox">
                <div className="formVal">
                    <form action="">
                        <h2>Login</h2>

                        <div className="inputBox">
                            <input type="username" onChange={changeUserName} required/>
                            <label>Username</label>
                        </div>

                        <div className="inputBox">
                            <input type="password" required/>
                            <label>Password</label>
                        </div>
                        
                        <button>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login;