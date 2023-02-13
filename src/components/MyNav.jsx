import { Navbar, Nav } from 'react-bootstrap'

const MyNav = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Shop</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#browse">Browse</Nav.Link>
    </Nav>
  </Navbar>
)

export default MyNav
