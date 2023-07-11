import './index.css';
import { useState, useEffect } from 'react';

function Login(){

    const [userName, setUserName] = useState([]);
    const changeUserName = (e) => {
        setUserName(e.target.value);
    }

    const [buttonClicked, setButtonClicked] = useState(false);

    const getData = async (param1, param2) => {
        try {
          const url = `/api?param1=${param1}`;
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });
      
          if (response.ok) {
            const data = await response.json();
            console.log(data); // Handle the response from the server
          } else {
            console.error('Error:', response.status);
          }
        } catch (error) {
          console.error('Error:', error);
        }
    };
      

    // useEffect ( () => {
    //     if (buttonClicked){
    //         const url = "/api?param1=${userName}";
    //         console.log("hi")

    //         fetch(url)
    //             .then (response => response.json())
    //             .then (result => {
    //                 console.log(result)
    //                 setUserName(result)
    //             })
    //             .catch(error => {
    //                 console.log(error)
    //             })
    //     }

    // }, [buttonClicked] )  

    useEffect ( () => {
        if (buttonClicked){
            getData(userName)
        }

    }, [buttonClicked] )  

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
                        
                        <button onClick={ () => setButtonClicked(true) }>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login;