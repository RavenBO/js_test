const btn =document.querySelectorAll("button");

/* btn.addEventListener('click',(e)=>{
    e.target.classList.toggle('overlay');
}); */
/* btn.addEventListener('dblclick',(e)=>{
    e.target.classList.add('overlay');
}); */
/* console.log(btn);
const deleteElem =(e)=>{
        e.target.classList.toggle('blue');
}; */
btn.forEach((item)=>{
    item.addEventListener('click', ()=>{         
        for(let key of btn){
            
            if(key.classList.contains('blue')){
                key.classList.remove('blue');
                key.textContent='Нажми на меня';
            }          
        }
        item.classList.add('blue');
        item.textContent='Нажми на меня 2 раза';
    });
});
btn.forEach(i=>{
    i.addEventListener('dblclick',()=>{
        i.classList.remove('blue');
        i.textContent='Нажми на меня';
    });
});
