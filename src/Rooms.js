// import React from 'react'
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import ListGroup from 'react-bootstrap/ListGroup';

// function Rooms({rooms}) {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//   return (
//     <div>
//         <Button  style={{marginLeft:'370px',marginBottom:'13px'}} variant="primary" onClick={handleShow}>
//                 Rooms
//             </Button>

//             <Modal  show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>
//                         <h2 className='text-center'>Rooms</h2>
//                     </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <ListGroup>
//                         <ListGroup.Item className='text-center'>{rooms.r1}</ListGroup.Item>
//                         <ListGroup.Item className='text-center'>{rooms.r2}</ListGroup.Item>
//                         <ListGroup.Item className='text-center'>{rooms.r3}</ListGroup.Item>
//                         <ListGroup.Item className='text-center'>{rooms.r4}</ListGroup.Item>
//                         <ListGroup.Item className='text-center'>{rooms.r5}</ListGroup.Item>
//                         <ListGroup.Item className='text-center'>{rooms.r6}</ListGroup.Item>
//                     </ListGroup>
//                 </Modal.Body>
//             </Modal>
//     </div>
//   )
// }

// export default Rooms