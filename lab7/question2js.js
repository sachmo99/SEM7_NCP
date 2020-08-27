function getSelectedOptions(sel,fn){
    var opts = [], opt;
    var  len =  sel.options.length;
    for(var i = 0;i<len; i++){
        opt = sel.options[i];
        if(opt.selected){
            opts.push(opt);
            if(fn){
                fn(opt);
            }
        }
    }
        return opts;
}
function callback(opt) {
    
    var display = document.getElementById('display');
    display.innerHTML+= opt.value + ',';
}


function call_submit(e) {
    e.preventDefault();
    console.log('submission called');
    const hyphen_alphanumeric = document.getElementById(input1);
    var output = "";
    re_hyphen_alphanumeric = /^[A-Za-z0-9\-]$/;
    if(!hyphen_alphanumeric.value.match(re_hyphen_alphanumeric)){
        output+= "The hyphen alphanumeric box input doesnt qualify! \n";
        //alert("The hyphen alphanumeric box input doesnt qualify!");
    }
    console.log(output);
    var selects = document.getElementById('cars');
    var opts = getSelectedOptions(selects);
    output += "THe multi select options length is "  + opts.length + "\n"; 
    var checkboxes = document.getElementById('vehicle1');
    if(checkboxes.checked){
        output+= "checkbox is checked \n";
    }else{
        output+="checkbox is not checked \n";
    }
    console.log(output);
    var radio = document.getElementsByName('gender');
    for(var i = 0;i<radio.length;i++){
        if(radio[i].checked){
            output+= radio[i].value + " checked! \n";
        }
    }
    console.log(output);
    re_password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    var password_input = document.getElementById('password');
    if(!password_input.value.match(re_password)){
        output+= "Password not in format! \n";
    }else{
        output+= "Password is accepted \n";
    }
    console.log(output);
    var date = document.getElementById('date');
    re_date = /^[0-3]?[0-9]\/[01]?[0-9]\/[12][90][0-9][0-9]$/;
    if(!date.value.match(re_date)) {
        output+= "Date not in format \n";
    }else{
        output += "Date in format \n";
    }
    console.log(output);
    var time = document.getElementById('time');
    re_time = /^\d{1,2}:\d{2}([ap]m)?$/;
    if(!time.value.match(re_time)) {
        output+= "Time not in format \n";
    }else{
        output += "Time in format \n";
    }
    console.log(output);
    var disp = document.getElementById('display');

    if(output.length>0){
        disp.innerHTML = output;
        console.log(output);
    }else{
        disp.innerHTML = "All validations PASSED";
    }



}