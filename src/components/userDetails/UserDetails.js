import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
  const {data}=useLoaderData()
  console.log(data)
    return (
        <div>
            <h1> User Name: {data.name}</h1>
            <h1> Email: {data.email}</h1>           
            <h1> Phone: {data.phone}</h1>           
        </div>
    );
};

export default UserDetails;