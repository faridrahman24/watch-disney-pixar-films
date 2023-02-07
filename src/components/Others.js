import { Card, Col, Container, Row, Image, Button } from "react-bootstrap"
import abugslifeImage from "../assets/images/others/a-bugs-life.jpg"
import findingdoryImage from "../assets/images/others/finding-dory.jpg"
import httydImage from "../assets/images/others/httyd.jpg"
import ratatouilleImage from "../assets/images/others/ratatouille.jpg"
import theincrediblesImage from "../assets/images/others/the-incredibles.jpg"
import walleImage from "../assets/images/others/wall-e.jpg"

const others = () => {
    return(
        <div>
            <Container>
                <br />
                <h1 className="font-others text-white">OTHERS MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="others">
                        <Card className="bg-white text-white movieImage">
                            <Image src={abugslifeImage} alt="A Bugs Life Movies"/>
                            <div className="bg-success">
                                <div className="mt-3 mb-3 text-center">
                                    <Button variant="success">Play!</Button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-white text-white movieImage">
                            <Image src={findingdoryImage} alt="Finding Dory Movies" className="images"/>
                            <div className="bg-primary">
                                <div className="mt-3 mb-3 text-center">
                                    <Button variant="primary">Play!</Button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-white text-white movieImage">
                            <Image src={httydImage} alt="How to Train Your Dragon Movies" className="images"/>
                            <div className="bg-dark">
                                <div className="mt-3 mb-3 text-center">
                                    <Button variant="dark">Play!</Button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-white text-white movieImage">
                            <Image src={ratatouilleImage} alt="Ratatouille Movies" className="images"/>
                            <div className="bg-warning">
                                <div className="mt-3 mb-3 text-center">
                                    <Button variant="warning">Play!</Button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-white text-white movieImage">
                            <Image src={theincrediblesImage} alt="The Incredibles Movies " className="images"/>
                            <div className="bg-danger">
                                <div className="mt-3 mb-3 text-center">
                                    <Button variant="danger">Play!</Button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-white text-white movieImage">
                            <Image src={walleImage} alt="Wall-E Movies" className="images"/>
                            <div className="bg-info">
                                <div className="mt-3 mb-3 text-center">
                                    <Button variant="info">Play!</Button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default others