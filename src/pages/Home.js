import { Col, Row } from 'antd';
import React from 'react';
import Hero from '../components/hero/Hero';
import Information from '../components/information/Information';

const Home = () => {
    return (
        <Row >
            <Col lg={18} md={12} sm={24} xs={24}>
                <Hero></Hero>
            </Col>
            <Col lg={6} md={12} sm={24} xs={24}>
             <Information></Information>
            </Col>
        </Row>
    );
};

export default Home;