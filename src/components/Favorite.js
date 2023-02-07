import { Card, Col, Container, Row, Image, Button } from "react-bootstrap"
import carsImage from "../assets/images/favorite/cars.jpg"
import findingnemoImage from "../assets/images/favorite/finding-nemo.jpg"
import monsterincImage from "../assets/images/favorite/monster-inc.jpg"
import monsteruniversityImage from "../assets/images/favorite/monster-university.jpg"
import toystoryImage from "../assets/images/favorite/toy-story.jpg"
import upImage from "../assets/images/favorite/up.jpg"

const favorite = () => {
    return(
        <div>
            <Container>
                <br />
                <h1 className="font-fav text-white">FAVORITE MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-white text-white movieImage">
                            <Image src={carsImage} alt="Cars Movies"/>
                            <div className="bg-danger">
                                <div className="mt-3 mb-3 text-center">
                                    <Button variant="danger">Play!</Button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-white text-white movieImage">
                            <Image src={findingnemoImage} alt="Finding Nemo Movies" className="images"/>
                            <div className="bg-primary">
                                <div className="mt-3 mb-3 text-center">
                                    <Button variant="primary">Play!</Button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-white text-white movieImage">
                            <Image src={monsterincImage} alt="Monster Inc Movies" className="images"/>
                            <div className="bg-success">
                                <div className="mt-3 mb-3 text-center">
                                    <Button variant="success">Play!</Button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-white text-white movieImage">
                            <Image src={monsteruniversityImage} alt="Monster Univesity Movies" className="images"/>
                            <div className="bg-info">
                                <div className="mt-3 mb-3 text-center">
                                    <Button variant="info">Play!</Button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-white text-white movieImage">
                            <Image src={toystoryImage} alt="Toy Story Movies " className="images"/>
                            <div className="bg-secondary">
                                <div className="mt-3 mb-3 text-center">
                                    <Button variant="secondary">Play!</Button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-white text-white movieImage">
                            <Image src={upImage} alt="Up Movies" className="images"/>
                            <div className="bg-warning">
                                <div className="mt-3 mb-3 text-center">
                                    <Button variant="warning">Play!</Button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default favorite