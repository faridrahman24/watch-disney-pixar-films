import { Col, Container, Row } from 'react-bootstrap';

const Intro = () => {
    return (   
        <div className = "intro">
            <Container className="text-black text-center justify-content-center align-items-center">
            <Row>
                <Col>
                <div className='title1'>Disney Pixar</div>
                <div className='title2'>Animation Studios</div>
                </Col>
            </Row>
            </Container>
        </div>    
    )
}

export default Intro