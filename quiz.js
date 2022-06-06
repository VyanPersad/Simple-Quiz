
function sendAnswers() {
    var total = 3;
    var score = 0;

    var q1 = document.forms["quizQuestions"]["q1"].value;
    var q2 = document.forms["quizQuestions"]["q2"].value;
    var q3 = document.forms["quizQuestions"]["q3"].value;

    for (i = 1; i <= total; i++) {
        if (eval('q' + i) == null || eval('q' + i) == '') {
            alert("No Answer selected for " + i);
            return false;
        }
    }
    var answers = ["d", "b", "b",];

    for (i = 1; i <= total; i++) {
        if (eval('q' + i) == answers[i - 1]) {
            score++;
        }
    }

    /*
    if (q1 == answers[0]) {
        score++;
    }
    if (q2 == answers[1]) {
        score++;
    }
    if (q3 == answers[2]) {
        score++;
    }*/

    alert("You scored " + score + " out of " + total + " .");

    var results = document.getElementById('showAnswers');
    results.innerHTML = '<h3>You scored <span>' + score + '</span> out of <span>' + total + '</span></h3>';
    return false;

}
