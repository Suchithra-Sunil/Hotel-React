import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import Singleview from './Singleview';


function Attractions({ mainspots }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button className='' style={{marginLeft:'250px'}} variant="primary" onClick={handleShow}>
                Places NearBy
            </Button>

            <Modal  show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h2 className='text-center'>Places NearBy</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        <ListGroup.Item className='text-center'>{mainspots.a1}</ListGroup.Item>
                        <ListGroup.Item className='text-center'>{mainspots.a2}</ListGroup.Item>
                        <ListGroup.Item className='text-center'>{mainspots.a3}</ListGroup.Item>
                        <ListGroup.Item className='text-center'>{mainspots.a4}</ListGroup.Item>
                        <ListGroup.Item className='text-center'>{mainspots.a5}</ListGroup.Item>
                        <ListGroup.Item className='text-center'>{mainspots.a6}</ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Attractions