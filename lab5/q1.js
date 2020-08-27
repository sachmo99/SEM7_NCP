function fizzbuzz(){

    var body = document.getElementById('container');
    var x = 0;
    for(x = 1;x <= 100;x++){
        var ans = x;
        if (x%15 == 0){
            ans = "FizzBuzz";
        }else if (x%5 == 0){
            ans = "Buzz";
        }else if (x%3 == 0){
            ans = "Fizz";
        }
        console.log(ans);
        body.innerHTML+= '<h1>'+ans+'</h1></br>'
    }
}
