import { useContext,useEffect,useState } from "react";
import { authContext } from "./authcontext";
import { useParams } from "react-router-dom";
import { UserContext } from "../../contexts/usercontext";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import authstyle from "./auth.module.css";

export function Signinup(){
    const {mode}=useParams();
    const {setEmail,setPassword, error, handleSignUp, handleSignIn }=useContext(authContext);
    const [Name,setName]=useState('');
    const navigate=useNavigate();
    const {User}=useContext(UserContext);
    useEffect(()=>{
        if(User)
        {
            navigate("/");
        }
    })

    if(mode==="signin")
    {
        return(
        <div class="container" style={{height:"100vh",width:"100%"}}>
        <div className={authstyle.authbox}>

            <h1>Sign In</h1>
            <input type="text" placeholder="Enter Email" onChange={(e) =>
                setEmail(e.target.value)} />
            <input type="password" placeholder="Enter Password" onChange={(e) =>
                setPassword(e.target.value)} />
            <button onClick={handleSignIn}>Sign In</button>
            <Link to="/auth/signup">Or Signup Instead</Link>    
            {error && <p>{error}</p>}
        </div>
        </div>
            
        );
    }
    else if(mode==="signup"){
        return(
            <div class="container" style={{height:"100vh",width:"100%"}}>
            <div className={authstyle.authbox}>
            <h1>Signup</h1>
            <input type="text" placeholder="Enter Name" onChange={(e) =>
                setName(e.target.value)} />
            <input type="text" placeholder="Enter Email" onChange={(e) =>
                setEmail(e.target.value)} />
            <input type="password" placeholder="Enter Password" onChange={(e) =>
                setPassword(e.target.value)} />
            <button onClick={()=>handleSignUp(Name)}>Sign Up</button>
            </div>
            </div>
        )
    }
}