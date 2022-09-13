import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { CartContext } from '../../Contexts/CartContext';

export default function Forms(mostrar) {

  const {makeBuyOrder} = useContext(CartContext)
  const [show, setShow] = useState(mostrar);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkForm = (mail1, mail2, nombre, telefono) => {
    if(!nombre){
      alert("No ingreso su nombre")
      return(false)
    }
    if(!telefono){
      alert("No ingreso su telefono")
      return(false)
    }
    if(!mail1){
      alert("No ingreso su mail")
      return(false)
    }
    if(!mail2){
      alert("No RE ingreso si mail")
      return(false)
    }
    if(mail1 != mail2){
      alert("No coinciden los mails")
      return(false)
    }

    return(true)
  }

  const guardarForm = async () => {
    const mail1 = await document.getElementById("mail1");
    const mail2 = await document.getElementById("mail2");
    const nombre = await document.getElementById("nombre");
    const telefono = await document.getElementById("telefono");
    let formOk = false;
    console.log(mail1.value, mail2, nombre, telefono)
    formOk = checkForm(mail1.value, mail2.value, nombre.value, telefono.value)
    
    if(formOk){
      const Buyer = {
        name: nombre.value,
        phone: telefono.value,
        mail: mail1.value
      }
      await makeBuyOrder(Buyer)
      handleClose()
    }

  }

  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control id="nombre"
                type="text"
                placeholder="Ingrese su nombre"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Telefono</Form.Label>
              <Form.Control id="telefono"
                type="number"
                placeholder="Ingrese su celular"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Email</Form.Label>
              <Form.Control id="mail1"
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Reingrese su mail</Form.Label>
              <Form.Control id="mail2"
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={guardarForm}>
            Confirmar compra
          </Button>
        </Modal.Footer>
    </Modal>
    </>
  );
}