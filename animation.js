/*-----------------------------------------*/
/*             slide show                  */
/*-----------------------------------------*/


let currentImage=document.querySelector(".productCover"); //stores the current image 

/*--gets the label element of the radio buttons ---*/

let firstImage=document.querySelector('#button1 + label'); 
let secondImage=document.querySelector('#button2 + label');
let thirdImage=document.querySelector('#button3 + label');

let pImgArr= ["assets/cameraCover3.jpg","assets/headphonesCover.jpg", "assets/watchesCover15.jpg"];
let click=0;
let indexImg=0; //helps in indexing the image source array
//the description of the products on the slide show 
let cameraDesc=document.getElementById("camera"); 
let audioDesc=document.getElementById("audio");
let watchDesc=document.getElementById("watch");



/*---Click events capture----*/
firstImage.addEventListener('click',()=>{
    indexImg=0;
    currentImage.src=pImgArr[0];
    // click=1;
    clearInterval(start);
    displayDescription();
    
});
secondImage.addEventListener('click',()=>{
    currentImage.src=pImgArr[1];
    // click=1;
    indexImg=1;
    clearInterval(start);
    displayDescription();
});

thirdImage.addEventListener('click',()=>{
    currentImage.src=pImgArr[2];
    // click=1;
    clearInterval(start);
    indexImg=2;
 
    displayDescription();
});


/*---Automated changing ---*/


// adding the description on the images 

function nImage(){
    
    indexImg++;
    if (indexImg==pImgArr.length){
        indexImg=0;
        console.log(indexImg);
        console.log(currentImage);
    }
    currentImage.src=pImgArr[indexImg];
    displayDescription();
   
    
}

//the function to display the description of the right image 
function displayDescription(){
    switch (indexImg){
        case 0:
            cameraDesc.style.visibility="visible";
            audioDesc.style.visibility="hidden";
            watchDesc.style.visibility="hidden";
            break;
        case 1:
            audioDesc.style.visibility="visible";
            watchDesc.style.visibility="hidden";
            cameraDesc.style.visibility="hidden";
            break;
        case 2:
            watchDesc.style.visibility="visible";
            audioDesc.style.visibility="hidden";
            cameraDesc.style.visibility="hidden";
            break;
    }
}

let start= setInterval(nImage,4500);

/*---Capture on click event---*/
console.log(cameraDesc.children[1],watchDesc,audioDesc);
cameraDesc.children[1].addEventListener('click', ()=>{ window.location="cameraPage.html";});
audioDesc.children[1].addEventListener('click', ()=>{ window.location="headpPage.html";});
watchDesc.children[1].addEventListener('click', ()=>{ window.location="watchPage.html";});







































/*preImage.addEventListener('click',nextImage);
let productImgArr= ["cameraCover1.jpg","headphonesCover.jpg", "watchesCover.jpg"];
let indexImg=0;

function nextImage(){
    if (indexImg==productImgArr.size){
        indexImg=0;
        currentImage.src=productImgArr[indexImg];
        consosle.log(currentImage);
    }
    currentImage.src=productImgArr[indexImg];
    indexImgArr++;
}




/*et productImageArr= ["cameraCover1.jpg","headphonesCover.jpg", "watchesCover.jpg"];
//var index= Math.floor(Math.random() * sourceImage.length ); // random number generator
console.log(productImageArr[0]);

let slideImage=document.getElementById("productCover");*/




//click on radio for that image 
//if not that auto changing of the images



// let preImage=document.querySelector('.previous'); //arrow
// console.log(preImage);
// let nextImage=document.querySelector('.next');    //arrow


//event to capture

// preImage.addEventListener('click', priorCover);
// nextImage.addEventListener('click', nImage);


/*
slideImage.addEventListener('onmouseover', (e)=>{
    alert("In here");
    document.getElementById("view").style.visibility="hidden";
    e.preventDefault;
})*/
// function priorCover(){
//     //go back in the array 
//     //alert("in here");
    
//     indexImg--;
//     if (indexImg<0){
//         indexImg=pImgArr.length-1;
//         console.log(indexImg);
//         console.log(currentImage);
//     }
//     currentImage.src=pImgArr[indexImg];
    
// }
