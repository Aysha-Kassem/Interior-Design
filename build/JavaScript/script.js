// open list of smaller nav 
document.getElementById("open").onclick =  () => {
    document.getElementById("list").classList.remove("hidden");
    document.getElementById("list").classList.add("grid");
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "block";
}

// close list of smaller nav 
document.getElementById("close").onclick =  () => {
    document.getElementById("list").classList.remove("grid");
    document.getElementById("list").classList.add("hidden");
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
}

// counters
// counter 1
const interval = 10;  
let counter1 = 0;
const maxCount1 = 400;
const counterElement1 = document.getElementById("counter1");
const increment1 = () =>{
    if(counter1 < maxCount1){
        counter1 ++;
        counterElement1.textContent = counter1;
    }else{clearInterval(counterInterval1);}
}
const counterInterval1 = setInterval(increment1,interval)
// counter 2
let counter2 = 0;
const maxCount2 = 600;
const counterElement2 = document.getElementById("counter2");
const increment2 = () =>{
    if(counter2 < maxCount2){
        counter2 ++;
        counterElement2.textContent = counter2;
    }else{clearInterval(counterInterval2);}
}
const counterInterva2 = setInterval(increment2,interval)
// counter 3
let counter3 = 0;
const maxCount3 = 100;
const counterElement3 = document.getElementById("counter3");
const increment3 = () =>{
    if(counter3 < maxCount3){
        counter3 ++;
        counterElement3.textContent = counter3;
    }else{clearInterval(counterInterval3);}
}
const counterInterva3 = setInterval(increment3,interval)


// scroll to top

window.addEventListener('scroll', function() {
    if (this.scrollY > 400) {
        document.getElementById('scroll-top').style.display = 'flex';
    } else {
        document.getElementById('scroll-top').style.display = 'none';
    }
    document.getElementById('scroll-top').addEventListener('click', function() {
        window.scrollTo({top: 0, behavior:'smooth' });
    });
}); 

