const date = new Date();

const renderCalendar=()=>{
date.setDate(1);
const firstDayIndex = date.getDay();
//console.log(firstDayIndex);

const monthDays=document.querySelector('.days');

//to get the last day of the previous month we have to pass the number 0 along with the getfullyear(),getmonth()
//const lastDay=new Date(date.getFullYear(),date.getMonth(),0);gives April 30
//to get the last day of the current month we have to add 1 to the getmonth() shown below.gives may 31
//const lastDay=new Date(date.getFullYear(),date.getMonth()+1,0);

const lastDay=new Date(date.getFullYear(),date.getMonth()+1,0).getDate();

const prevlastDay=new Date(date.getFullYear(),date.getMonth(),0).getDate();

const lastDayIndex=new Date(date.getFullYear(),date.getMonth()+1,0).getDay()

const nextDay=7-lastDayIndex-1;//total no of days-lastDayIntex- 1 because the weekdays numbers are start from 0

const months=[
    "january",
    "february",
    "march",
    "april",
    "may",
    "june", 
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
];

//to get month and date dynamically

document.querySelector('.date h1').innerHTML=months[date.getMonth()];//gets the system month on the h1 tag
//document.querySelector('.date p').innerHTML=date.toDateString();

//to get the days dynamically

let days="";

for(let x=firstDayIndex;x>0;x--)
{
    days+=`<div class="prev-month">${prevlastDay-x+1}</div>`;


}

for (let i=1;i<=lastDay;i++){
    if(i===new Date().getDate()&&date.getMonth())
    {
        days +=`<div class="today">${i}</div>`;
    }
    else{
        days +=`<div>${i}</div>`;
    }
  
    //monthDays.innerHTML=days;
}

for(let k=1;k<=nextDay;k++){
    days+=`<div class="next-month">${k}</div>`;
    monthDays.innerHTML=days;
}

    
}


document.querySelector('.prev').addEventListener('click',()=>{
    date.setMonth(date.getMonth()-1);
    renderCalendar();
})
document.querySelector('.next').addEventListener('click',()=>{
    date.setMonth(date.getMonth()+1);
    renderCalendar();
})
