var score = document.getElementById("score");
var grade = document.getElementById("grade");
var unit = document.getElementById("unit");
var gradeMark;
var gP = document.getElementById("gpa");
// Change Score to Grade
function grader () {
    switch (true) {
        case (score.value >= 70): 
            grade.value = "A";
            gradeMark = 5;
        break;
        case (score.value >= 60): 
            grade.value = "B";
            gradeMark = 4;
        break;
        case (score.value >= 50): 
            grade.value = "C";
            gradeMark = 3;
        break;
        case (score.value >= 40): 
            grade.value = "D";
            gradeMark = 2;
        break;
        case (score.value < 40): 
            grade.value = "F";
            gradeMark = 0;
        break;
    }


}

// Convert Grade to GP
function returnGP () {
    gP.innerText = "Your GPA is "+ gradeMark.toFixed(2);
    return gP;
}