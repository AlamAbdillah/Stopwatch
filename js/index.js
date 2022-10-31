var x = 0, minutes, second, my_interval;
function update(){
    minutes = x / 60;
    second = x % 60;
    if(minutes <= 10 && second >= 10){
        document.getElementById('timer').innerHTML= "0" + Math.floor(minutes) + ":" + second;
    }else if(minutes >= 10 && second <= 10){
        document.getElementById('timer').innerHTML= Math.floor(minutes) + ":" + "0" + second;
    }else if(minutes <= 10 && second <= 10){
        document.getElementById('timer').innerHTML= "0" + Math.floor(minutes) + ":" + "0" + second;
    }else{
        document.getElementById('timer').innerHTML= Math.floor(minutes) + ":" + second;
    }
}

function plus(){
    x += 30;
    update();
}
function min(){
    if(x > 0){
        x -= 30;
        update();
    }
}
function st_interval(){
    x -= 1;
    update();

    if(x <= 0){
        clearInterval(my_interval);
    }
}
function start(){
    var milisecond = document.getElementById("inp_s").value;
    if(milisecond == undefined || milisecond == ""){
        my_interval = setInterval(st_interval, 1000);
    }else{
        console.log(milisecond);
        my_interval = setInterval(st_interval, milisecond);
    }
}