const temp=document.createElement("h2");
temp.textContent="LET IT BE-IT WILL FIND ITS WAY";
temp.id="second";
console.log(temp);
const element=document.getElementById("first");

element.after(temp);

const temp2=document.createElement("h3");
temp2.textContent="TRUST ME IT GETS BETTER";
console.log(temp2);
temp.before(temp2);

temp2.id="third";
//temp2.className="diwali";

temp2.classList.add("diwali");
temp2.classList.add("holi");

temp2.style.backgroundColor="yellow";
temp2.style.fontsize="20px ";

console.log(temp2);



// making a list using js

//const list=document.getElementById("listing");

//const item1=document.createElement("li");
//item1.textContent="MILK";
//const item2=document.createElement("li");
//item2.textContent="BREAD";
//const item3=document.createElement("li");
//item3.textContent="HALWA";
//list.appendChild(item1);
//const item4=document.createElement("li");
//item4.textContent="CHOCOLATE";


// adding an item at the end of the list
//list.appendChild(item2);


// adding an item at the beginning of the list
//list.prepend(item3); 


// adding an item at the middle of the list

//item1.after(item4);


// REAL WORLD SCENRIO

const arr=["milk","bread","halwa","chocolate"];

const list=document.getElementById("listing");
const fragment=document.createDocumentFragment();

for(let food of arr){
    const item=document.createElement("li");
    item.textContent=food;
    fragment.appendChild(item);
}

list.appendChild(fragment);

const arr2=["jan","feb","mar","apr"];

const list2=document.getElementById("listing2");
const fragment2=document.createDocumentFragment();

for(let month of arr2){
    const item=document.createElement("li");
    item.textContent=month;
    fragment2.appendChild(item);
}
list2.appendChild(fragment2);






