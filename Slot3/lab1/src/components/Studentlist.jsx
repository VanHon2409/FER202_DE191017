import Student from "./Student";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import students from '../data/StudentData';

function Studentlist() {
  return (
    <div className="container mt-4">
      <Row>
        {students.map((student) => (
          <Col key={student.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Student student={student} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Studentlist;
