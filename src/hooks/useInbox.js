import { useEffect, useState } from 'react';

const useInbox = () => {
    const [inboxs, setInboxs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/inbox')
        .then(res =>res.json())
        .then(data =>setInboxs(data));
    }, []);

    return [inboxs];
};

export default useInbox;