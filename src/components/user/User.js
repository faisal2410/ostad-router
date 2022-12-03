import { Card } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    return (
        <Card
      title="User Information"
      extra={<Link to={`/users/${user.id}`}>User Details</Link>}
    >
      <p>{user.name}</p>
      <p>{user.email}</p>     
    </Card>
    );
};

export default User;