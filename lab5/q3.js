function ctof(value) {
    var output_f = document.getElementById('ctof_answer');
    ans = value*(9/5) + 32;
    output_f.innerHTML = '<h2>'+ value+'&#176;C is ' + ans + '&#176;F</h2>';
    console.log('<h2>'+ value+'&#176;C is ' + ans + '&#176;F</h2>');
}

function ftoc(value) {
    var output_c = document.getElementById('ftoc_answer');
    ans = (value - 32)*(5/9);
    output_c.innerHTML = '<h2>'+ value+'&#176;F is ' + ans + '&#176;C</h2> ';
}