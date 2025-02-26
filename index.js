const endDate ="13 May 2025 00:00 PM " ;

document.getElementById("end-date").innerHTML = endDate;
var inputs=document.querySelectorAll("input");

const btn=document.getElementById("btn");
// Add event listener to the button
btn.addEventListener("click", function(){
    document.getElementById("popUp").style.display = "flex";
})

const close=document.querySelector(".close");
// Add event listener to the close button
close.addEventListener("click",function(){
    document.getElementById("popUp").style.display ="none";
})

close.addEventListener("click",function(){
    document.getElementById("popUp").style.display ="none";
})


const clock = ()=> {
    const end =new Date(endDate);
    const now =new Date();
    // console.log(endDate);
    // console.log(now);
    const diff = (end - now)/1000; //in seconds
    
    // console.log(diff);



        //converting into days
        if(diff<=0) {
            document.getElementById("popUp").style.display = "flex";
            document.getElementById("popUp").innerText = "Done na!";
            inputs[0].value = 0;
            inputs[1].value = 0;
            inputs[2].value = 0;
            inputs[3].value = 0;
            return;
        }
        inputs[0].value = Math.floor(diff/3600/24);
    
    
//converting into hours
inputs[1].value =Math.floor(diff/3600)%24;


//converting into minutes
inputs[2].value =Math.floor(diff/60)%60;



//cpnverting into seconds
inputs[3].value = Math.floor(diff)%60;





}

clock();



var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
 
  
  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', animateButton, false);
  }


setInterval(
    ()=>{
        clock()}
        ,1000
)









