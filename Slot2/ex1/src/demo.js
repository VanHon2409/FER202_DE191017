const x = -10;
console.log(`The value of x is : ${x} `);
//kiểm tra x là số dương hay số âm
if(x>=0){
    console.log(`${x} la so duong `)
}else{
    console.log(`${x} la so am `)
}
//dung toan tu 3 ngoi
const result = (x >= 0) ? `${x} la so duong ` : `${x} la so am`
console.log(result)

const greet = (name,age =18) =>{
    return `Xin chao ${name}, ban ${age} tuoi`;
}
//goi ham greet
console.log(greet("An",20));
console.log(greet("Binh"));

//Viet ham tinh binh phuong xua 1 so x
const square = x =>x*x;
console.log(`Ham binh phuong cua ${x} la ${square(x)}`)
//viet ham in 1 doi tuong student gom cac thuoc tinh :id, name , age, grade
const printStudent = (student) =>{
    console.log(`Id ${student.id} Ten ${student.name}, Tuoi ${student.age}, Lop ${student.grade} `)
}

//khong dung ham printStudent ma su dung vong lap de in ra thong tin cua 1 mang students
const students = [
    {id:1, name:"An", age:20, grade:"A1"},
    {id:2, name:"Binh", age:21, grade:"B2"},
    {id:3, name:"Cuong", age:22, grade:"B1"},
    {id:4, name:"Duong", age:32, grade:"A2"}
]
students.forEach(student => {
    console.log(`Id ${student.id} Ten ${student.name}, Tuoi ${student.age}, Lop10${student.grade} `)
})

//them 1 hoc sinh moi vao list students su dung spread operator
const newStudent = {id:5, name:"Hung", age:23, grade:"C1"};
const updatedStudents = [...students, newStudent];
console.log("Danh sach hoc sinh sau khi them : ");
console.log(updatedStudents);