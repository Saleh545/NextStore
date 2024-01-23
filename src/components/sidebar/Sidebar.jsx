import React from 'react'
import Computers from './sidebar items/Computers'
import Telephones from './sidebar items/Telephones'
import { Row } from 'reactstrap'

const Sidebar = () => {
  return (
    <div >
        <Row style={{backgroundColor:"red"}} xs={4}>
        <Computers/>
        <Telephones/>
        </Row>
    </div>
  )
}

export default Sidebar