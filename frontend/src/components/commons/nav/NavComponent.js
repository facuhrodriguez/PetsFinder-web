import { Nav, Navbar, Container } from "react-bootstrap";
import { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Button,
} from "reactstrap";
import "./navComponent.css";

const NavComponent = () => {
  let [openLogin, setOpenLogin] = useState(false);
  const openModal = () => {
    setOpenLogin(true);
  };
  const closeModal = () => {
    setOpenLogin(false);
  };
  return (
    <>
      <div>
        <Modal isOpen={openLogin}>
          <ModalHeader
            toggle={function noRefCheck() {
              setOpenLogin(false);
            }}
          >
            <h2 className="modal-login">Iniciar Sesión</h2>
          </ModalHeader>

          <ModalBody>
            <Label for="username">Nombre</Label>
            <Input type="text" id="username"></Input>
            <Label for="email">Correo Electrónico</Label>
            <Input type="email" id="email"></Input>
          </ModalBody>

          <ModalFooter>
            <Button className="btn-login" block>
              Iniciar sesión
            </Button>
            <Button color="danger" block onClick={() => closeModal()}>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <h2 className="arial">MascotApp</h2>
          </Navbar.Brand>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="arial" href="#finder">
                  Mascotas Encontradas
                </Nav.Link>
                <Nav.Link className="arial" href="#lost">
                  Mascotas Perdidas
                </Nav.Link>
                <Nav.Link className="arial" href="#adopcion">
                  En Adopción
                </Nav.Link>
                <Nav.Link className="arial" href="#trasito">
                  Tránsito
                </Nav.Link>
                <Button className="arial btn-login" onClick={() => openModal()}>
                  Login
                </Button>
                {""}
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavComponent;
