import React, { useState } from "react";
import { Container, Modal, ModalBody, ModalHeader } from "reactstrap";
import Header from "../header/Header.jsx";
import Sidebar from "../sidebar/Sidebar.jsx";

const Modalopen = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Container>
        <Header toggle={toggle} />
        <div className="modalSize ">
          <Modal isOpen={modal} toggle={toggle} size="xl">
            <ModalBody>
            <Sidebar/>
            </ModalBody>
          </Modal>
        </div>
      </Container>
    </div>
  );
};

export default Modalopen;
