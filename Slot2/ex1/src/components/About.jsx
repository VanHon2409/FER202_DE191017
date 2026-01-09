// khai bao 1 doi tuong student gom id, name , avatar, age
//In thong tin cua h1,p va img
function About(){
    const student = {
    id: 1,
    name: "An",
    avatar: "/images/613124001_1469595701835470_3651199107613382687_n.jpg",
    age: 20,
    grade: "10A1"
};

    return (
        <div>
            <h1>{student.name}</h1>
            <p>id: {student.id}</p>
            <p>name: {student.name}</p>
            <p>age: {student.age}</p>
            <p>grade: {student.grade}</p>
            <img src={student.avatar} alt={student.avatar} 
            style={{width: '200px', height: '200px'}}
            />
        </div>
    );
}
export default About;