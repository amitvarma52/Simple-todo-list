// const btn=document.querySelector(".btn-headline")
// btn.addEventListener("click",function(){
//     console.log(this.textContent)
// })

// adding   event to multiple button

// const allButtons=document.querySelectorAll("button")
// allButtons.forEach(function(button){
//     button.addEventListener("click",function(){
//         console.log(this.textContent)
//     })
// })



// event object
// here abc is example of information object

// const allButtons=document.querySelectorAll("button")
// allButtons.forEach(function(button){
//     button.addEventListener("click",function(abc){
//         console.log(abc)
//     })
// })



// two important properties of event object

// const allButtons=document.querySelectorAll("button")
// allButtons.forEach(function(button){
//     // here by using event object we can also use arrow function for better performance
//     button.addEventListener("click",abc=>{
//         num=0;
//         for(i=0;i<=1000000000;i++){num++}
//         console.log(num)
//         console.log(abc.currentTarget.textContent)
//     })
// })
// console.log("end")


// code for changing bg and color to gray and yellow

// const allButtons=document.querySelectorAll("button")
// allButtons.forEach(function(button){
//     button.addEventListener("click",(event)=>{
//         event.currentTarget.style.backgroundColor="yellow"
//         event.currentTarget.style.color="gray"
//         console.log(event.currentTarget.textContent)
//     })
// })



// project code



