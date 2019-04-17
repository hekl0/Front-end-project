var bodyTag,bigdiv,select1,select2,select3,img,pls,email,yourname,submitbtn;

window.onload = function() {
    bodyTag = document.getElementsByTagName("body")[0];
    heading = document.getElementById("profileName");
    console.log(heading);
}

function prepInputTag() {
    email = document.createElement("input");
    yourname = document.createElement("input");
    email.setAttribute("placeholder","Enter your email to order the car");
    yourname.setAttribute("placeholder","Your name");
}
