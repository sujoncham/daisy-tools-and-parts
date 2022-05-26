import { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('')
    useEffect(()=>{
        const email = user?.user?.email;
        const currentEmail = {email: email};
        if(email){
            fetch(`http://localhost:5000/users/${email}`, {
            method: 'PUT', 
            headers:{
                'content-type' : 'applicaton/json'
            },
            body:JSON.stringify(currentEmail)

            })
            .then(res => res.json())
            .then(data => {
                console.log('data adding', data);
                // setToken(data)
            })
        }

    }, [user])


    return [token];
    
};

export default useToken;