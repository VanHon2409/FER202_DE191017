import About from "./About";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import listOfStudent from '../listOfStudent';


function StudentList() {
  return (
    <div className="container mt-4">
      <Row>
        {listOfStudent.map((student) => (
          <Col
            key={student.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="mb-4"
          >
            <About student={student} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default StudentList;
