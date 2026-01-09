import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function About() {
    const student = {
        id: 'PH12345',
        name: 'Nguyen Van A',
        avatar: "/images/612098504_906661415645245_4557067835381258750_n.jpg",
        age: 20,
        grade: "10A1"
    };
  return (
    <Card style={{ width: '18rem' }}>
      <img src={student.avatar} alt={student.avatar} 
            style={{width: '200px', height: '200px'}}
            />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          <h1>{student.name}</h1>
            <p>id: {student.id}</p>
            <p>name: {student.name}</p>
            <p>age: {student.age}</p>
            <p>grade: {student.grade}</p>
            
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default About;