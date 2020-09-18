// რამდენი დღეა ახალ წლამდე  !
// ეხლანდელი დროის აღება
// ბოლო დღე
// ბოლო დღე - ეხლანდელი





let a = new Date();


let b = new Date("Dec 31 2020 23:59:59");

let betweenTime =  Math.floor((b - a)/1000);

let seconds = betweenTime; 

function time(seconds){
    
  let minutes = Math.floor(seconds/60); 
  let hours = Math.floor(minutes/60);
  let days = Math.floor(hours/24);
  let months = Math.floor(days/30);
  let year = Math.floor(months/12);

  let results = ""
  
  let countedSeconds = seconds % 60;


  minutes = minutes % 60;
  hours = hours % 24;
  days = days % 30;
  months = months % 12;


  if(countedSeconds < 1){
    results = "0 seconds"
    }else{
        results = countedSeconds + "seconds"
    }
    if(minutes>0){
       results =results + minutes + "minutes" 
    }
    if(hours>0){
        results =results + hours + "hours" 
     }
     if(days>0){
        results =results + days + "days" 
     }
     if(months>0){
        results =results + months + "months" 
     }
     if(year>0){
        results =results + year + "year" 
     }
     return results;
}




console.log(time(seconds));
