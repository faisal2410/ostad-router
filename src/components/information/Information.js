import React from 'react';
import { Card, Col, Row } from 'antd';
import leadLogo from "../../images/leadlogo.png";
import celc from "../../images/celc.svg";
const { Meta } = Card;

const Information = () => {
    return (
        <Row> 
        <Col lg={24}>
        <Card
        hoverable        
        cover={<img className="img-fluid" alt="english" src={leadLogo} />}
      >
        <Meta title="Children English Learning Course" description="www.instagram.com" />
      </Card>
        </Col>       
        <Col lg={24}>
        <Card
        hoverable        
        cover={<img className="img-fluid" alt="celc" src={celc} />}
      >
        <Meta title="IELTS Accademic" description="www.instagram.com" />
      </Card>
        </Col>       
     
      
      </Row>
    );
};

export default Information;