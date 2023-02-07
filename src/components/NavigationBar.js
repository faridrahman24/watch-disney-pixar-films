import { Nav, Container, Navbar} from "react-bootstrap"

const NavigationBar = () => {
    return(
    <div className="Navbar">
        <Navbar>
            <Container>
                <Navbar.Brand href="/">Film</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#favorite">Favorite</Nav.Link>    
                    <Nav.Link href="#others">Others</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
    )
}

export default NavigationBar