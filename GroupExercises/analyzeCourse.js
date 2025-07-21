function analyzeCourse(courses){
for(let i=0; i<courses.length; i++){
    let course = courses[i];
    for (let key in course){
        if(course[key] === "title"){
            let courseTitle = course[key];
        }
        if(course[key] === "students"){
            let courseStudents = course[key];
            for(let i=0; i<courseStudents.length; i++){
                let student = courseStudents[i];
                for (let key in student){
                    if(student[key] === "name"){
                        let studentName = student[key];
                    }
                    if(student[key] === "scores"){
                        let studentScores = student[key];
                        let average = studentScores.reduce((a, b) => (a+b))/studentScores.length;
                    }
                }
            }
        }
    }
}
}

const courses = [
  {
    title: "JavaScript 101",
    students: [
      { name: "Alice", scores: [80, 85, 90] },
      { name: "Bob", scores: [50, 45, 60] },
      { name: "Charlie", scores: [95, 100, 98] }
    ]
  },
  {
    title: "HTML & CSS",
    students: [
      { name: "David", scores: [60, 70, 75] },
      { name: "Eva", scores: [30, 40, 35] },
      { name: "Frank", scores: [88, 92, 85] }
    ]
  }
];

console.log(analyzeCourse(courses))