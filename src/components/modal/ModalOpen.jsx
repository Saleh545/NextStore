import React, { useState } from "react";
import { Col, Container, Modal, ModalBody, Row } from "reactstrap";
import Header from "../header/Header.jsx";
import Sidebar from "./sidebar/Sidebar.jsx";
import { IoMdCloseCircleOutline } from 'react-icons/io';
import Routes from "../routes/Routes.jsx";


const Modalopen = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Container fluid>
        <Header toggle={toggle} />
        <div className="modalSize ">
          <Modal style={{margin:" 16px  auto"}} isOpen={modal} toggle={toggle} size="xl">
            <ModalBody>
                <IoMdCloseCircleOutline onClick={()=>!toggle()} style={{ width:"25px", height:"30px", position:"absolute", right:"0", top:"0", margin:"1rem", cursor:"pointer" }} />
              <Row >
                <Col lg="4" >
                  <Sidebar />
                </Col>
                <Col lg="8" >
                <Routes/>
                </Col>
              </Row>
            </ModalBody>
          </Modal>
        </div>
      </Container>
    </div>
  );
};

export default Modalopen;
