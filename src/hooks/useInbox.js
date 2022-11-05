import { useEffect, useState } from 'react';

const useInbox = () => {
    const [inboxs, setInboxs] = useState([]);

    useEffect(()=>{
        fetch('https://daisy-tools-parts.onrender.com/inbox')
        .then(res =>res.json())
        .then(data =>setInboxs(data));
    }, []);

    return [inboxs];
};

export default useInbox;