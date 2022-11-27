import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function CartWidget() {
  return (
    <NavBar bg="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          src="../../public/img/cart4.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </NavBar.Brand>
    </Container>
  </Navbar>
  );
}

export default CartWidget;