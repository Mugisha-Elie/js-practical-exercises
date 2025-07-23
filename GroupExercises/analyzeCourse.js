 


function analyzeCourses(courses) {
  courses.map((course) => {
    //note: get course title
    const courseTitle = course.title;
    console.log(`📚 ${courseTitle}`);

    let topStudent = {
      name: "",
      average: 0,
    };

    //note: map through student array to perform operation
    course.students.map((student) => {
      const { name, scores } = student;

      //note: get the total score of each students
      let totalScores = scores.reduce(
        (prevScores, currentScore) => prevScores + currentScore,
        0
      );

      //note: get the average of each student
      let averageScore = totalScores / scores.length;

      //   console.log(scores);
      //   console.log(averageScore.toFixed(2));

      if (averageScore >= 60) {
        console.log(`${name} - Avg: ${averageScore.toFixed(2)} ✅ Pass`);
      } else {
        console.log(`${name} - Avg: ${averageScore.toFixed(2)} ❌ Fail`);
      }

      // Track top student
      if (averageScore > topStudent.average) {
        topStudent = {
          name,
          average: Number(averageScore.toFixed(2)),
        };
      }
    });
    console.log(`🏆 Top Student: ${topStudent.name} (${topStudent.average})`);
    console.log("----------------------");
  });
}

const courses = [
  {
    title: "JavaScript 101",
    students: [
      { name: "Alice", scores: [80, 85, 90] },
      { name: "Bob", scores: [50, 45, 60] },
      { name: "Charlie", scores: [95, 100, 98] },
    ],
  },
  {
    title: "HTML & CSS",
    students: [
      { name: "David", scores: [60, 70, 75] },
      { name: "Eva", scores: [30, 40, 35] },
      { name: "Frank", scores: [88, 92, 85] },
    ],
  },
];

analyzeCourses(courses);