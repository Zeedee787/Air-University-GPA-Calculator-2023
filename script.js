function calculateGPA() {
  var grades = document.getElementsByName("grade");
  var credits = document.getElementsByName("credit");
  var totalGrades = 0;
  var totalCredits = 0;
  for (var i = 0; i < grades.length; i++) {
    totalGrades += parseFloat(grades[i].value) * parseFloat(credits[i].value);
    totalCredits += parseFloat(credits[i].value);
  }
  var gpa = totalGrades / totalCredits;
  document.getElementById("result").innerHTML = "GPA: " + gpa.toFixed(2);
}

function calculateCGPA() {
  var gpa1 = parseFloat(document.getElementById("gpa1").value);
  var credits1 = parseFloat(document.getElementById("credits1").value);
  var gpa2 = parseFloat(document.getElementById("gpa2").value);
  var credits2 = parseFloat(document.getElementById("credits2").value);
  var totalGrades = gpa1 * credits1 + gpa2 * credits2;
  var totalCredits = credits1 + credits2;
  var cgpa = totalGrades / totalCredits;
  document.getElementById("result").innerHTML = "CGPA: " + cgpa.toFixed(2);
}
