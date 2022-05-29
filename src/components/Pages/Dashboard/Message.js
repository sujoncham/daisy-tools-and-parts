import React, { useEffect, useState } from "react";

const Message = () => {
  const [inboxs, setInboxs] = useState([]);

  useEffect(()=>{
    fetch('https://hidden-beyond-54066.herokuapp.com/inbox/')
    .then(res => res.json())
    .then(data => setInboxs(data));
  }, [])

  return (
    <div>
      <h1 className="mt-10 text-2xl">Client Messages : {inboxs.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#Sl</th>
              <th>Name</th>
              <th>Email</th>
              <th>subject</th>
              <th>opinion</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              inboxs.map((inbox, index) => <tr key={inbox._id} index={index} inbox={inbox}>
              <th>{index + 1}</th>
              <td>{inbox.name}</td>
              <td>{inbox.email}</td>
              <td>{inbox.subject}</td>
              <td>{inbox.opinion}</td>
              <td>
                <button className="btn btn-xs">Delete</button>
              </td>
            </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Message;
