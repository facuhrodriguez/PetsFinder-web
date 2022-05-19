import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  FloatingLabel,
  Row,
  Col,
  input,
} from "react-bootstrap";

const Formulario = () => {
  return (
    <>
      <Form className="mb-3 mt-2">
        <Form.Floating className="mb-3">
          <Form.Control
            id="petName"
            type="text"
            placeholder="nombre de la mascota"
          />
          <label htmlFor="floatingInputCustom">Nombre de la mascota</label>
        </Form.Floating>

        <Form.Floating className="mb-3">
          <Form.Control id="zone" type="text" placeholder="zona" />
          <label htmlFor="zone">Zona</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            id="petDescription"
            as="textarea"
            placeholder="Descripcion"
          />
          <label htmlFor="petDescription">Descripción</label>
        </Form.Floating>
        <FloatingLabel
          className="mb-3"
          controlId="petType"
          label="Tipo de mascota"
        >
          <Form.Select aria-label="Floating label select example">
            <option>Seleccionar tipo de mascota</option>
            <option value="1">Perro</option>
            <option value="2">Gato</option>
            <option value="3">Otro</option>
          </Form.Select>
        </FloatingLabel>
        <Form.Floating className="mb-3">
          <Form.Control id="petAge" type="text" placeholder="Edad" />
          <label htmlFor="petAge">Edad</label>
        </Form.Floating>
      </Form>
    </>
  );
};

export default Formulario;
