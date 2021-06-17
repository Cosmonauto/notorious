import React from "react";
import { Form, Col, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import "../FormOrder/FormPage.css";

const FormPage = () => {
    return (
        <>
            <div className="form-section">
                <h2 style={{ textAlign: "center" }}>Форма оплаты заказа</h2>
                <Container>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Ваше ФИО</Form.Label>
                                <Form.Control type="name" placeholder="Name" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Адрес доставки</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Город</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form.Row>

                        <Link to="/payment">
                            <Button
                                variant="primary"
                                style={{
                                    width: "150px",
                                    height: "40px",
                                    borderRadius: "0",
                                }}
                                type="text"
                            >
                                Submit
                            </Button>
                        </Link>
                    </Form>
                </Container>
            </div>
        </>
    );
};
export default FormPage;
