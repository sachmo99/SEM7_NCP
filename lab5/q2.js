function grader(marks) {
    var h1 = document.getElementById('grade');
    console.log(marks);
    if(marks > 90){
        h1.innerHTML = '<h1>A</h1>';
        return "A";
    }
    else if(marks > 80){
        h1.innerHTML = '<h1>B</h1>';
        return "B";
    }
    else if(marks > 70){
        h1.innerHTML = '<h1>C</h1>';
        return "C";
    }
    else if(marks > 60){
        h1.innerHTML = '<h1>D</h1>';
        return "D";
    }
    else {
        h1.innerHTML = '<h1>F</h1>';
        return "F";
    }
}

function allmarkgrader() {
    var x;
    var allmarks = document.getElementById('allmarks');
    for(x = 60;x<=100;x++){
        allmarks.innerHTML+= "<h2>marks:" + x + "<br>" + "grade:" + grader(x) + "</h2><hr>";
    }
}