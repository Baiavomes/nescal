import React, { useState } from "react";
import { Row, Col, Form, Button, Table } from "react-bootstrap";
import axios from "axios";

export const Tabelaprofessor = () => {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [alunos, setAlunos] = useState([]);
  const professorId = 1;
  const handlecadastro = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/professor/${professorId}/criarAluno",
        {
          nome: nome,
          curso: curso,
          professorId: professorId,
        }
      );
      alert(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className="d-grid align-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div
        className="border rounded p-5"
        style={{ backgroundColor: "#5f4888", borderRadius: "25px" }}
      >
        <Form style={{ color: "#ffffff", margin: "5px" }}>
          <h4>Cadastrar Aluno</h4>
          <Row className="d-flex align-item-center flex-wrap">
            <Col xs="auto">
              <Form.Group controlId="formBasicText">
                <Form.Label>Curso</Form.Label>
                <Form.Control
                  type="text"
                  placehlderId="Nome"
                  volue={nome}
                  onChange={(event) => setNome(event.target.value)}
                />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Group controlId="formBasicText">
                <Form.Label>Curso</Form.Label>
                <Form.Control
                  type="text"
                  placehlderId="Curso"
                  volue={curso}
                  onChange={(event) => setCurso(event.target.value)}
                />
              </Form.Group>
            </Col>
            <Col xs="auto" style={{ marginTop: "22.5px" }}>
              <Button
                styl={{
                  backgroundColor: "#9378D8",
                  borderColor: "#9378D8",
                  marginTop: "10px",
                }}
                type="submit"
              >
                Cadastra
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
      <div>
        <Table
          striped
          border
          haver
          className="border rounded p-5"
          size="md"
          style={{ backgroundColor: "#ffffff" }}
        >
          <thead>
            <tr>
              <th>Nome</th>
              <th>Curso</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jão</td>
              <td>Silva</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Maria</td>
              <td>Santos</td>
              <td>25</td>
            </tr>
            <tr>
              <td>Lucas</td>
              <td>Oliveira</td>
              <td>18</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};
