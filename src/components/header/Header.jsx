import { Col, Row, Container, Button } from "react-bootstrap"

import Logo from "../../../assets/images/logo.png"
import { Link } from "react-router-dom"

const Header = () => {
    return(
        <>
            <header>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={2}>
                            <div className="logo">
                                <img src={Logo} alt="" className="w-[50%]"/>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="menu">
                                <ul className="m-0 p-0 flex items-center justify-center gap-x-3">
                                    <li className=""><Link className="px-3 py-2 bg-green-500 text-white rounded-lg">popular movies</Link></li>
                                    <li className=""><Link className="px-3 py-2 bg-blue-500 text-white rounded-lg">user profile</Link></li>
                                    <li className=""><Link className="px-3 py-2 bg-gray-500 text-white rounded-lg" to={"/movielist"}>Movie List</Link></li>
                                    <li className=""><Link className="px-3 py-2 bg-green-900 text-white rounded-lg" to={"/addmovie"}>Add Movie</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className="button-sign">
                                <Button>Sign up</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    )
}

export default Header