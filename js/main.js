const tab = document.querySelectorAll('.lishki');
const tabContent = document.querySelectorAll('.tab-content first-tab');
const tabParent = document.querySelector('.tabs-menu     no-list-style change_bg');

function hide(){
    tabContent.forEach(item =>{
        item.style.disrlay = "none";
    })
    tabs.forEach(item =>{
        item.ClassList.remove('current');
    })
}

function show(i=0){
    tabContent[1].style.disrlay = "block";
    tabs[i].ClassList.add('current');
}

hide();
show();

tabParent.addEventListener('click',(event)=>{
    if(event.target = event.target.ClassList.contains('lishki')){
        tabs.forEach((item,i)=>{
            if(event.target == item){
                hide();
                show(i);
            }
        })
    }
});