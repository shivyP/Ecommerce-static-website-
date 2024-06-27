//the javascrpit file is used to apply the accessibility features to all
//pages 


/*get the header element  */

let darkMode= localStorage.getItem("darkMode");
let pageTop=document.getElementById("topContent"); //header and its elements (nav)
let darker=document.getElementById("blackBox"); //gets the black box
let light=document.getElementById("whiteBox"); //gets the white box 
let pageContent=document.getElementsByClassName("productPages");
let li=pageTop.getElementsByTagName("li");  //get the nav elements                                   //li=pageTop.getElementsByTagName("li");
let cartImg=document.querySelector(".cart");
let ft=document.getElementById("bottomPage");
//change size 
let curFontSize=document.getElementsByClassName(".fsize"); //current font size
let larger=document.getElementById("increaseText"); //increse 
let smaller=document.getElementById("reduceText"); //decrease
let resetText=document.getElementById("resetText");
let access=document.getElementsByClassName("access");
var fileName=String(String(location.pathname.split("/").slice(-1)).split('.').slice(0,-1));
let ftSize=0;
//increase the font size 
larger.addEventListener('click',(e)=>{
  e.preventDefault();
  li=pageTop.getElementsByTagName("li");
  ftSize=Number(window.getComputedStyle(li[0]).getPropertyValue("font-size").split("p")[0]); //update window font size
  console.log("ftSie", ftSize);
  ftSize+=2; //increase by 2 
  console.log("ftSie", ftSize);
  changeFont(); 
});

//reduce the font size 
smaller.addEventListener('click',(e)=>{
  e.preventDefault();
  ftSize=Number(window.getComputedStyle(li[0]).getPropertyValue("font-size").split("p")[0]); //update window font size
  ftSize-=2; //increase by 2 
  if (ftSize<16) ftSize=16; // font size cannot be less than 16 as per the legal requirements
  changeFont(); 
  
});

//reset the font size 
resetText.addEventListener('click',(e)=>{
  e.preventDefault();
  ftSize=18; //reset the fonst size to 18px as intially assigned 
  changeFont(); 
  li=ft.getElementsByTagName("li");
  for(let i=0; i<li.length;i++){
    ftSize=15;
    li[i].style.fontSize=String(ftSize)+"px";
  }
  ft.getElementsByTagName("p")[0].children[0].style.fontSize=String(ftSize)+"px";
  ft.getElementsByTagName("p")[0].style.fontSize=String(ftSize)+"px";
  localStorage.setItem("fontSize", "Null");
})



 darker.addEventListener('click', (e)=>{
   e.preventDefault();
   li=pageTop.getElementsByTagName("li");
   localStorage.setItem('darkMode', 'on');
   
   toDarkMode();
 });



 light.addEventListener('click',()=>{
  
  localStorage.setItem('darkMode', 'off');
  pageTop.classList.remove("dMode");
  ft.classList.remove("dMode");
  

  for(let i=0; i<li.length;i++){
    li[i].classList.remove("changeColor");
  }
  li=ft.getElementsByTagName("li");

  for(let i=0; i<li.length;i++){
    li[i].classList.remove("changeColor");
  }
  ft.getElementsByTagName("p")[0].children[0].classList.remove("changeColor");
  ft.getElementsByTagName("p")[0].classList.remove("changeColor");
  // for(let i=0; i<li.length;i++){
  //   li[i].classList.remove("changeColor");
  // }
});


function toDarkMode(){
  pageTop.classList.add("dMode");
  if(fileName!="index" && fileName!="signIn" && fileName!="LogIn") pageProduct.style.border="0px";
  if (fileName=="LogIn") {
    document.getElementById("logForm").style.borderTopColor="transparent";
  }
  ft.classList.add("dMode");
  for(let i=0; i<li.length;i++){
    li[i].children[0].classList.add("changeColor");
  }
  li=ft.getElementsByTagName("li");
  
  for(let i=0; i<li.length;i++){
    li[i].children[0].classList.add("changeColor");
  }
  console.log("p",ft.getElementsByTagName("p"));
  ft.getElementsByTagName("p")[0].children[0].classList.add("changeColor");
  ft.getElementsByTagName("p")[0].classList.add("changeColor");
  cartImg.src="assets/cart3.png";
  localStorage.setItem('darkMode', 'on');

  access[0].children[0].children[0].style.borderRightColor="white";
  access[0].children[0].children[1].style.borderRightColor="white";
}
   

if (darkMode == 'on'){
    toDarkMode();   
}


//function to increase the font size of nav and footer links 
function changeFont(){
  li=pageTop.getElementsByTagName("li");  //get the nav elements 
  let count=0;
  while (count<2){
    count++;
    for(let i=0; i<li.length;i++){
      li[i].style.fontSize=String(ftSize)+"px";
    }
    li=ft.getElementsByTagName("li");// footer links 

}
  ft.getElementsByTagName("p")[0].children[0].style.fontSize=String(ftSize)+"px";
  ft.getElementsByTagName("p")[0].style.fontSize=String(ftSize)+"px";
  localStorage.setItem("fontSize",ftSize);
};


if (localStorage.getItem("fontSize")){
  ftSize=Number(localStorage.getItem("fontSize"));
  changeFont();
}

















//have to capture all the buttons 
//focus only on hearder elements 


// let darker=document.getElementById("blackBox"); //gets the black box
// let light=document.getElementById("whiteBox"); //gets the white box
// let bg=document.querySelector(".bd");
// var elm1=document.getElementsByClassName("changeColor");
// let cartImg=document.querySelector(".cart");
// let darkMode= localStorage.getItem("darkMode");
// let addButton=document.getElementById("spAdd");
// let prova=document.querySelector(".prova");
// let productPages=document.querySelector(".productPages");





// console.log("p", prova);


// let bd=document.querySelector(".c");


// console.log("bd",bd);

// //check if darkmode is set or not 

// function toDarkMode(){
//    console.log(elm1.length);
//    color="#616261";//#747474 -> need for the new dark theme
//    //document.body.style.backgroundColor = color;
//    bd.setAttribute("class", "dMode");
//    // zoomImage.style.backgroundColor="#414040";
  
//    cartImg.src="assets/cart3.png";
//    for (let i=0; i<elm1.length;i++){
//       //alert("in here");
//       elm1[i].style.color='white';
//  }
//    // addButton.style.backgroundColor="white";
//    // addButton.style.color="black";
// }

// //caputure on click events
// darker.addEventListener('click', (e)=>{
//    e.preventDefault();
//    localStorage.setItem('darkMode', 'on');
//    toDarkMode();
//    window.location.reload();
   
   
// })


// if (darkMode == 'on'){
//    toDarkMode();   
// }









// //change font style
// let curFontSize=document.getElementsByClassName(".fsize");
// let larger=document.getElementById("increaseText");
// let smaller=document.getElementById("reduceText");






// console.log(larger);
// console.log(curFontSize);

// larger.addEventListener('click', (e)=>{
//    e.preventDefault();
//    console.log("in here");
//    headerElement[0].style.width



//    localStorage.setItem("font-size","bigger")
//    prova.setAttribute("class","incre");
// })

// if (localStorage.getItem("font-size")=="bigger"){
//    //alert("in here");
//    for (let i=0; i<curFontSize.length;i++){
//       curFontSize.classList.remove("fsize");
//       curFontSize.classList.add("incre");
//    }
// }




// /*********************************************************************************** */







// // var opacity=0;
// // let intervalId=0; //keep the record of when the animation started 
// // let basCon=document.getElementById("basketCont"); //the element to animate 
// // document.querySelector('.cart').addEventListener('click',animation);
// // function animation(){
// //    alert("in here");
// //    basCon.classList.toggle('an');
// //    //get the actutal opactity of the element 
// //    //intervalId=setInterval(startAnimation,100);

// // }
// // function startAnimation(){
// //    opacity=90;
// //    console.log("op", opacity);
   
// //    if(opacity>70){
// //       basCon.style.visibility="visible";
// //       opacity-=5;
// //       console.log(opacity);
// //       basCon.style.marginLeft="20%";
// //    }
// //    else{
// //       clearInterval(intervalId);
// //    }
// // }
// // console.log ("in animation");
