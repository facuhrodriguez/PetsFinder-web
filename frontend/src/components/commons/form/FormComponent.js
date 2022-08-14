import { BsFillPlusCircleFill } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import Formulario from "../../form/Formulario";
import "./formStyle.css";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Button,
} from "reactstrap";

const FormComponent = () => {
  const ModalPet = () => {
    useEffect(() => {
      if (formModal) {
        <Formulario />;
      }
    }, []);
  };
  let [formModal, setFormModal] = useState(false);
  const openModal = () => {
    setFormModal(true);
  };

  const closeModal = () => {
    setFormModal(false);
  };
  return (
    <>
      <div className="addPet" onClick={() => openModal()}>
        <BsFillPlusCircleFill />
      </div>

      <Modal isOpen={formModal}>
        <ModalHeader
          toggle={function noRefCheck() {
            setFormModal(false);
          }}
        >
          <h2 className="modal-login">Publicar Nueva Mascota</h2>
        </ModalHeader>

        <Formulario />
        <ModalFooter>
          <Button className="btn-login" block>
            Publicar
          </Button>
          <Button color="danger" block onClick={() => closeModal()}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default FormComponent;
