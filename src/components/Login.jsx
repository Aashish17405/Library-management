import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from '../assets/spinnerlottie.json';

function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate =useNavigate();

    async function handleSubmit(event){
        event.preventDefault();
        try{
            const response = await fetch("http://localhost:3000/", {
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    username:username,
                    password:password
                })
            })
            const data = await response.json();
            if(response.ok){
                console.log('Logged In Successfully');
                setUsername('');
                setPassword('');
                if(data.token){
                    localStorage.setItem('token', data.token);
                    navigate('/home');
                }
            }
            else{
                setUsername('');
                setPassword('');
                alert(data.message);
            }
        }catch(e){
            // console.error('Error:', e.message);
            console.log(e.message);
            setUsername('');
            setPassword('');
        }
    }
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return <div>
        
        <Lottie options={defaultOptions} height={400} width={400}/>
        
        <h3>Enter Username:</h3>
        <input type="text" placeholder="username" autoComplete="off" value={username} onChange={(event)=>{
            setUsername(event.target.value);
        }}></input><br/><br/>
        <h3>Enter Password:</h3>
        <input type="password" placeholder="password" value={password} onChange={(event)=>{
            setPassword(event.target.value);
        }}></input><br/><br/>
        <button onClick={handleSubmit}>Login</button>
    </div>
}
export default Login;