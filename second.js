  /* function handleclick(){
    const temp=document.getElementById("first");
    temp.textContent="HELLO WORLD CLICKED";
}   */


//const element=document.getElementById("second");
//element.onclick=function(){
    //element.textContent="KEEP WORKING HARD AND KEEP SMILING CLICKED";


    // However, using addEventListener allows you to add multiple event listeners to the same element for the same event type, while assigning a function to the onclick property will overwrite any existing event listener for that event type on that element.




  /* const element=document.getElementById("second");
element.addEventListener("click",function(){
    element.textContent="KEEP WORKING HARD AND KEEP SMILING CLICKED";
    element.style.color="white";
})

const curr=document.getElementById("parent");
console.log(curr.children);


for(let child of curr.children){
    child.addEventListener("click",function(){
        child.textContent="CHILDREN CLICKED";
        child.style.color="white";
    })
    
}

*/



const grandparent=document.getElementById("grandparent");
grandparent.addEventListener("click",function(){
  
    grandparent.textContent="GRANDPARENT CLICKED";
})
const parent=document.getElementById("parent");
parent.addEventListener("click",function(){
   
    parent.textContent="PARENT CLICKED";
})

const child=document.getElementById("child");
child.addEventListener("click",function(){  
    child.textContent="CHILD CLICKED";
})





 