const form=document.querySelector('form');

form.addEventListener('submit',(e)=>{

    e.preventDefault();
    const income=document.querySelector("#income");

    const amount=parseInt(income.value);

   const result= document.querySelector('h2');

   let totaltax=0;

   if(amount<=1200000){
    totaltax=0;
   }

   else if(amount>1200000 && amount<=1600000){
    totaltax=(amount-1200000)*0.15;
   }

   else if(amount>1600000 && amount<=2000000){
        totaltax=(amount-1600000)*0.20+60000;
   }
   else{
        totaltax=(amount-2000000)*0.25+140000;
   }
    result.textContent=`total tax: ${totaltax}`;
})