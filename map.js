// let startBtn = document.getElementById('start');
// let stopBtn = document.getElementById('stop');
// let resetBtn = document.getElementById('reset');
 
// let hour = 0;
// let minute = 0;
// let second = 0;
// let count = 0;
 
// startBtn.addEventListener('click', function () {
//     timer = true;
//     stopWatch();
// });
 
// stopBtn.addEventListener('click', function () {
//     timer = false;
// });
 
// resetBtn.addEventListener('click', function () {
//     timer = false;
//     hour = 0;
//     minute = 0;
//     second = 0;
//     count = 0;
//     document.getElementById('hr').innerHTML = "00";
//     document.getElementById('min').innerHTML = "00";
//     document.getElementById('sec').innerHTML = "00";
//     document.getElementById('count').innerHTML = "00";
// });
 
// function stopWatch() {
//     if (timer) {
//         count++;
 
//         if (count == 100) {
//             second++;
//             count = 0;
//         }
 
//         if (second == 60) {
//             minute++;
//             second = 0;
//         }
 
//         if (minute == 60) {
//             hour++;
//             minute = 0;
//             second = 0;
//         }
 
//         let hrString = hour;
//         let minString = minute;
//         let secString = second;
//         let countString = count;
 
//         if (hour < 10) {
//             hrString = "0" + hrString;
//         }
 
//         if (minute < 10) {
//             minString = "0" + minString;
//         }
 
//         if (second < 10) {
//             secString = "0"+secString ;
//         }
 
//         if (count < 10) {
//             countString = "0"+countString;
//         }
 
//         document.getElementById('hr').innerHTML = hrString;
//         document.getElementById('min').innerHTML = minString;
//         document.getElementById('sec').innerHTML = secString;
//         document.getElementById('count').innerHTML = countString;
//         setTimeout(stopWatch, 10);
//     }
// }

// counter


// function timedate(){
    
// let gettime=document.querySelector("#time").value;
// let getdate=document.querySelector("#date").value;
    
//     console.log(gettime,getdate);
// }
// let getbtn=document.querySelector("#btn");
// getbtn.addEventListener("click",timedate)



function stopwatch(){
    let getminute=document.querySelector("#minute").innerHTML;
    let getsecond=document.querySelector("#second").innerHTML;
   

    let minute=getminute;
    let second=getsecond;
  
    
   let intervalclear= setTimeout(function(){
        second++;
        if(second == 60){
            minute++;
            second=0;
        }
        if(minute == 10){
            
           minute=0;
           
            // second=0;
            
        }
       
        document.querySelector("#minute").innerHTML=minute;
        document.querySelector("#second").innerHTML=second;

        stopwatch();
    },10)
    
   
}

let getbtn1=document.querySelector("#btn1");
getbtn1.addEventListener("click",stopwatch)
