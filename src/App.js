import React, { Component } from 'react';
import { Container, Row, Col, Dropdown, Media, Breadcrumb, Carousel, Jumbotron, Button, ListGroup, Form, Modal } from "react-bootstrap";

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(e) {
    e.preventDefault();
    this.setState({ show: true });
  }

  render() {
    return (
      <Container>
        <div style={{backgroundColor: "black"}} >


        <Row>
          <Col>
            <Dropdown>
              <Dropdown.Toggle varian="success">
                Pilih Bahasa
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/">English</Dropdown.Item>
                <Dropdown.Item href="/">Bahasa Indonesia</Dropdown.Item>
                <Dropdown.Item href="/">Korea</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col></Col>

          <Col><Media>
            <img
              width={64}
              height={64}
              classname="mr-3"
              src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
              alt="Alan Saputra"
            />
            <Media.Body>
              <br />
              <h6>Alan Saputra</h6>
            </Media.Body>
          </Media></Col>
        </Row>
        </div>

        <Row>
          <Col></Col>
          <Col></Col>
          <Col xs lg="14">
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/">Berita</Breadcrumb.Item>
              <Breadcrumb.Item href="/">Bola</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
              alt="Tim Inggris"
            />
            <Carousel.Caption>
            <h3>Inggris Mau Jadi Tim Terbaik Dunia</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
              alt="Bola"
            />
            <Carousel.Caption>
            <h3>Timnas Indonesia</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
              alt="Timnas Indonesia"
            />
            <Carousel.Caption>
            <h3>Timnas Indonesia</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <br />
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item active>Liga 1 Indonesia</ListGroup.Item>
              <ListGroup.Item>Liga Premier Inggris</ListGroup.Item>
              <ListGroup.Item>Seri A</ListGroup.Item>
              <ListGroup.Item>Ligue 1</ListGroup.Item>
              <ListGroup.Item>Bundes Liga</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <Jumbotron>
              <h1>Divisi Primavera</h1>
              <p>Main untuk Catalunya, Gerard Pigue Minta dihormati</p>
              <Button variant="primary">Read More</Button>
            </Jumbotron>
          </Col>
          <Form>
            <Form.Group>
              <Form.Control type="email" placeholder="Masukkan email" />
            </Form.Group>

            <Form.Group>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group>
              <Form.Check type="checkbox" label="Terms & Condition" />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={e => this.handleShow(e)}>
              Login
            </Button>

            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Anda Berhasil Login</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                <Button variant="primary" onClick={this.handleClose}>Save User Name & Password</Button>
              </Modal.Footer>
            </Modal>

          </Form>
        </Row>
      </Container>
    );
  }
}

export default App;
