import { useContext, useEffect } from 'react'
import userContext from '../context/userContext'
import {useNavigate} from "react-router-dom";

const Protected = ({ children }) => {
    const a = useContext(userContext);
    const navigate=useNavigate()
      
    useEffect(()=>{
    
      async function checkAuthenticity(){
        const ans= await a.loadCredentials();
         if (!ans){
          console.log("sahkgv");
          navigate("/login")
         }
      }
         
      checkAuthenticity();

     },[])

    return children;
}

export default Protected;
