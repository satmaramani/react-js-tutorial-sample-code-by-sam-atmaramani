import logo from './monty.jpg';

import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';


const Header = () => (
  <header>
    <Navbar fixed="top" color="light" light expand="xs" className="border-bottom border-gray bg-white" style={{ height: 80 }}>

      <Container>
        <Row noGutters className="position-relative w-100 align-items-center">

          <Col className="d-none d-lg-flex justify-content-start">
            <Nav className="mrx-auto" navbar>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">
                  <img src={logo} alt="avatar" className="img-fluid rounded-circle" style={{ width: 75 }} />
                </NavLink>
              </NavItem>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">Home</NavLink>
              </NavItem>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">Events</NavLink>
              </NavItem>

              <UncontrolledDropdown className="d-flex align-items-center" nav inNavbar>
                <DropdownToggle className="font-weight-bold" nav caret>Learn</DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="font-weight-bold text-secondary text-uppercase" header disabled>Learn React</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Documentation</DropdownItem>
                  <DropdownItem>Tutorials</DropdownItem>
                  <DropdownItem>Courses</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

            </Nav>
          </Col>

          <Col className="d-flex justify-content-xs-start justify-content-lg-center">
            <NavbarBrand className="d-inline-block p-0" href="/" style={{ width: 80 }}>
              <img src={logo} alt="logo" className="position-relative img-fluid" />
            </NavbarBrand>
          </Col>
          <Col className="d-flex justify-content-xs-start justify-content-lg-center">
            <NavbarBrand className="d-inline-block p-0" href="/" style={{ width: 80 }}>
              Powered by <b>Techy<font color='red'>Sam</font></b>
            </NavbarBrand>
          </Col>
          <Col className="d-none d-lg-flex justify-content-end">
            <Form inline>
              {/* <Input type="search" className="mr-3" placeholder="Search React Courses" />
              <Button type="submit" color="info" outline>Search</Button> */}

              <a TARGET="_blank" href="https://www.youtube.com/channel/UCQokP0wZvxOTReFjIZFlZlA">Go to My YouTube Video Link </a><br />
              <a TARGET="_blank" href="https://github.com/satmaramani/react-js-tutorial-sample-code-by-sam-atmaramani">Go to My Github.com Code Repo </a>
            </Form>
          </Col>

        </Row>
      </Container>

    </Navbar>
  </header>
);

export default Header;