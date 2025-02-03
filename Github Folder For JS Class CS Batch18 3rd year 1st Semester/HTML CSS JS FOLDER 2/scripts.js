function calculate() {
    const averageScore = parseFloat(document.getElementById("averageScore").value);

    if (isNaN(averageScore) || averageScore < 0 || averageScore > 100) {
        alert("Please enter a valid score between 0 and 100.");
        return;
    }

    document.getElementById("totalAverage").textContent = averageScore;

    let result = "";
    let grade = "";
    let meaning = ""; // Added meaning variable

    if (averageScore >= 60) {
        result = "Pass";
        if (averageScore >= 85) {
            grade = "A";
            meaning = "Excellent";
        } else if (averageScore >= 80) {
            grade = "B+";
            meaning = "Very Good";
        } else if (averageScore >= 70) {
            grade = "B";
            meaning = "Good";
        } else if (averageScore >= 65) {
            grade = "C+";
            meaning = "Fairly Good";
        } else {
            grade = "C";
            meaning = "Fair";
        }
    } else {
        result = "Fail";
        if (averageScore >= 45) {
            grade = "D";
            meaning = "Poor";
        } else if (averageScore >= 40) {
            grade = "E";
            meaning = "Very Poor";
        } else {
            grade = "F";
            meaning = "Failure";
        }
    }

    document.getElementById("result").textContent = result;
    document.getElementById("grade").textContent = grade;
    document.getElementById("meaning").textContent = meaning; // Display the meaning
}