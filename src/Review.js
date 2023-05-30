import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Review({reviewList}) {
    return (
        <div className='mt-4'>
            <Accordion className='w-75 ms-5' defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Reviews</Accordion.Header>
                    <Accordion.Body>
                        {
                            reviewList.map(i=>
                              <>
                                  <div>
                                    <h6>{i.name}</h6>
                                    <p>{i.date}</p>
                                    <h6>{i.rating}</h6>
                                    <p>{i.comments}</p>
                                  </div>  
                                  <hr />
                              </>
                                )
                        }
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Review