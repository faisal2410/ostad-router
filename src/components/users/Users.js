import {  Col, Row } from "antd";
import React from "react";
import { useLoaderData } from "react-router-dom";

import User from "../user/User";

const Users = () => {
  const {data} = useLoaderData();
  
  
  return (    
  <>
  <Row>
       {data.map(user=> <Col
        xs={{
          span: 24         
        }}
        sm={{
          span: 12         
        }}
        md={{
          span: 8         
        }}
        lg={{
          span: 8        
        }}       
       >
       <User key={user.id} user={user}></User>
       </Col>
       )
       }
     
    </Row>
    </>
  );
};

export default Users;
