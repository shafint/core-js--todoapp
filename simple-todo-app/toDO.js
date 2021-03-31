const input=document.querySelector("#addTaks")
const form=document.getElementById("formId");
const ul=document.getElementById("toDoUl");

form.addEventListener("submit",(e)=>{
  e.preventDefault();
 let inptVal=input.value;
 if(!inptVal){
   alert("please Type some thing");
 }else{
  let li=`<li class="hellow">${inptVal} <button class="deleted btn btn-danger">Deleted</button></li>`
  ul.insertAdjacentHTML("beforeend",li);
 const valuDlet= document.querySelectorAll(".deleted");
 valuDlet.forEach((val,ind)=>{
  val.addEventListener("click",()=>{
    const list=document.querySelectorAll(".hellow");
    list[ind].classList.add("active")
   })
 })
  input.value="";
 }
})