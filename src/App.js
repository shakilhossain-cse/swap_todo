// import { useState } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Cards from "./components/Cards";

function App() {
  const [Tasks, setTasks] = useState([]);
  return (
    <Container fluid>
      <Row xs={1} sm={2} md={4} className="g-4 my-4">
        <Cards header="Winnie" setTasks={setTasks} Tasks={Tasks} />
        <Cards header="Brad" setTasks={setTasks} Tasks={Tasks} />
        <Cards header="Bob" setTasks={setTasks} Tasks={Tasks} />
        <Cards header="Thomas" setTasks={setTasks} Tasks={Tasks} />
      </Row>
    </Container>
  );
}

export default App;
