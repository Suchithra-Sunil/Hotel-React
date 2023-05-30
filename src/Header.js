import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function Header() {
    return (
        <div>
            <Navbar bg="black" variant="dark" style={{height:'60px'}}>
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to={''}>
                            <img
                                alt=""
                                src="/logo.jpg"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />
                        </Link>{' '}
                        Hotels.com
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <div className='bg-white text-black'>
            <h3 className='text-center mt-3'><strong>The Most Luxurious Hotels In Town!</strong></h3>
        </div>   

        </div>
    )
}

export default Header