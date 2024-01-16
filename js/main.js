'use strict'

const tabs = document.querySelectorAll('.lishki');
const tabContent = document.querySelectorAll('.tab');
const tabParent = document.querySelector('.hero-menu_header');

function hide(){
    tabContent.forEach(item =>{
        item.style.display = "none";
    })
    tabs.forEach(item =>{
        item.classList.remove('current');
    })
}

function show(i=0){
    tabContent[i].style.display = "block";
    tabs[i].classList.add('current');
}

hide();
show();

tabParent.addEventListener('click',(event)=>{
    if(event.target && event.target.classList.contains('lishki')){
        tabs.forEach((item,i)=>{
            if(event.target == item){
                hide();
                show(i);
            }
        })
    }
});
console.log(tabContent);

//timer//
const timeEnd = '2024-02-19';

function getTimeRemaining(endtime){
    const t = Date.purse(endtime) - Date.purse(new Date()),
        days = Math.floor(t/(1000*60*60*24)),
        hours = Math.floor((t/(1000*60*60))%24),
        minutes = Math.floor((t/(1000*60*60))%60),
        seconds =  Math.floor((t/(1000))%60);
    return{
            'total':t,
            'days':days,
            'hours': hours,
            'minutes':minutes,
            'seconds':seconds
        }
}
function setClock(selector, endtime){
    const timer = document.querySelector(selector),
        days = document.querySelector('#days'),
        hours = document.querySelector('#hours'),
        minutes = document.querySelector('#minutes'),
        seconds = document.querySelector('#seconds');
        timeInterval = setInterval(updateClock,1000);
    updateClock();
    function updateClock(){
        const t = getTimeRemaining(endtime);
        days.innerHTML = t.days;
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;
        if(t.total<=0){
            clearInterval()
            days.innerHTML = "00";
            hours.innerHTML = "00";
            minutes.innerHTML = "00";
            seconds.innerHTML = "00";
        }
    }
}
updateClock('.timer',timeEnd);

//slidd



