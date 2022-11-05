import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../components/Firebase/Firebase.init";


export const useProfile = ()=>{
    const [user] = useAuthState(auth);
    const [profile, setProfile] = useState({});
    
    
    useEffect(() => {
        fetch(`https://daisy-tools-parts.onrender.com/myProfile/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setProfile(data)
            // console.log(data)
        })
    }, [user])
  
    return [profile]
}