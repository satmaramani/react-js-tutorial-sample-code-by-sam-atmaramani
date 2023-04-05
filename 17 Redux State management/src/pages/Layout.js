import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>

    <Container className='bg-danger'>
      <Row>
        <Col><Link to="/">Home</Link></Col>
        <Col><Link to="/blogs">Blogs</Link></Col>
      
        <Col><Link to="/contact">Contact</Link></Col>
        <Col><Link to="/about">About</Link></Col>
        <Col><Link to="/nopage456">Wrong Page </Link></Col>
      </Row>
    </Container>
      <Outlet />
      
    </>
  )
};

export default Layout;