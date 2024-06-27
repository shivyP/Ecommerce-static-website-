let loginCre=JSON.parse(localStorage.getItem("cre")) || "";
let newUser=[loginCre];
let e=[];
let p=[];
let pr;
let localEmail=localStorage.getItem("email") || "";
let lemail=localEmail.split(",");

let lsp=localStorage.getItem("password") || "";  //orginal array
if (lsp){
	pr=lsp.split(',');//localStorage.getItem("password"); //get the value from the localstoare  
}

//console.log("pass",pr);

console.log("dob", pr);



let inpField = document.getElementsByClassName("inpField");
let fname=document.getElementById("fname");
let lname=document.getElementById("lname");
let email=document.getElementById("email");
let password=document.getElementById("password");
let pass1=document.getElementById("pass1");
let dob=document.getElementById("dob");// the date 
let showPass=document.getElementById("showPass");
let sButton=document.getElementById("signInButton");
let sucMsg=document.getElementById("msg");




showPass.addEventListener('click',()=>{
    if (password.type==="password"){
         password.setAttribute("type","text");
         pass1.setAttribute("type","text");
         checkBox=1;
    }
    else {
        password.setAttribute("type","password");
        pass1.setAttribute("type","password");
        
    }
   
});


fname.addEventListener('focus',() => { startFloat(0)});
lname.addEventListener('focus',() => { startFloat(1)});
email.addEventListener('focus',() => { startFloat(2)});
password.addEventListener('focus',() => { startFloat(3)});
pass1.addEventListener('focus',() => { startFloat(4)});
dob.addEventListener('focus',() => { startFloat(5)});

fname.addEventListener('blur', () => {endFloat(0,fname.value)});
lname.addEventListener('blur', () => {endFloat(1,lname.value)});
email.addEventListener('blur', () => {endFloat(2,email.value)});
password.addEventListener('blur', () => {endFloat(3,password.value)});
pass1.addEventListener('blur', () => {endFloat(4,pass1.value)});
dob.addEventListener('blur',() => {
    inpField[5].classList.remove('active');
});


fname.addEventListener('input',() => { 
    fname.setCustomValidity('');
});
lname.addEventListener('input',() => { 
    lname.setCustomValidity('');
});

email.addEventListener('input',() => { 
    email.setCustomValidity('');
});
password.addEventListener('input',() => { 
    password.setCustomValidity('');
});
pass1.addEventListener('input',() => { 
    pass1.setCustomValidity('');
});




//the floating input fields
function startFloat(index){
    inpField[index].classList.add('active');

};
function endFloat(index, element){
    if (element=='') {
        inpField[index].classList.remove('active');
      
    }
       
}







//input fild -> check if empty and if it has any non-alphabetic character 
sButton.addEventListener("click",(e)=>{
    // e.preventDefault();
    let currentDate= new Date(); 
    let formDate=Number(String(dob.value).split('-')[0]);
    console.log(dob.value, formDate);
    console.log(currentDate.getFullYear() - Number(formDate));
    
   if(isName(fname.value)){
    console.log("in if");

       errorMessage(1);
    //    fname.setCustomValidity('Enter User Name Here');
       //alert("please enter a valid data");
   }
   else if (isName(lname.value)){
        errorMessage(2);
   }
   else if (isEmail(email.value)){
         errorMessage(3);
    }
   
   else if (checkPassword(password.value, pass1.value)){
         errorMessage(4);
   }
   else if (currentDate.getFullYear()-formDate<18 || dob.value==''){
         console.log("in here");
        errorMessage(5);
   }
   else {
      loginDetails();
   }

   
});//end of function





function loginDetails(){
      //if it is empty 
    if (pr==undefined){
        pr=password.value;
    }
    else{
        pr.push(password.value);
    }
    if (lemail==""){
        lemail=email.value;
    }
    else {
        lemail.push(email.value);
    }
    console.log("stored in local storage ")
    localStorage.setItem("email", lemail);
    localStorage.setItem("password",pr);
    alert("The account has been created Successfully.");
    window.location.reload();

}//end of function

// function printV(){
//     alert(newUser[0][1].key);
   
// }



function isName(content){
    // let val= new String(content);
    console.log(content.length);
    
    let size=content.length;
    console.log(size);
    console.log(content);
    if (size<=1){
        return true;
    }
    for (var i=0; i<size;i++){
        if(!(content[i]>='a' && content[i]<='z' || content[i]==' '))  // no need of brackets as the && has higher priority
            if (!(content[i]>='A' && content[i]<='Z'|| content[i]==' ')){
                console.log("in error");
                return true;
            }
    
    }


    
}//end of function


function isEmail(content){
    let size=content.length;
    var emailTest= /\S+@\S+\.\S+/; // to check if the email is the right format
    return !(emailTest.test(content));
    
}//end of function




function errorMessage(id){
   
    switch (id){

        case 1:fname.setCustomValidity('Enter valid data');
                break;
        case 2: lname.setCustomValidity('Enter valid data');
                break;
        case 3: email.setCustomValidity('Enter a valid email address');
                break;
        case 4: pass1.setCustomValidity('The two passwords are diffrent');
                break;
        case 5: dob.setCustomValidity('Invalid date provided! You must be 18 or over to register.');
                break;
        
    }
}//end of function

function checkPassword(p1, p2){
    console.log(p1, p2);
    if (p2=='')
       return true;
    if (p1!=p2)
       return true;

}
