let submit = document.querySelector(".btn"),
name = document.querySelector(".full-name"),
email = document.querySelector(".email"),
mobile = document.querySelector(".mobile"),
branch = document.querySelector(".branch"),
domain = document.querySelector(".domain"),
dob = document.querySelector(".dob"),
git = document.querySelector(".git"),
linkedin = document.querySelector(".linkedin"),
facebook = document.querySelector(".facebook"),
insta = document.querySelector(".instagram"),
form = document.getElementById("form"),
success = document.querySelector("#success-btn"),
refresh = document.querySelector(".refresh"),
button = document.getElementById("button")

console.log(success.classList)
var x=localStorage.getItem("Submit");

const  validate = ()=>{
    if(name.value=='' || email.value=='' || mobile.value=='' || branch.value=='' || domain.value=='' || dob.value=='' || git.value=='' || linkedin.value=='' || facebook.value=='' || insta.value==''){
        alert("All The Field Should be Filled.");
        return false;
    }else if(mobile.value.length!=10){
        alert("Mobile Number Should be 10 digits.");
        return false;
    }
    return true;
}

if (x==0){
    name.value = localStorage.getItem("FullName");    
    email.value = localStorage.getItem("Email"); 
    mobile.value = localStorage.getItem("Phone");
    branch.value = localStorage.getItem("Branch");
    domain.value = localStorage.getItem("Domain");
    dob.value = localStorage.getItem("DOB");
    git.value = localStorage.getItem("Git");
    linkedin.value =localStorage.getItem("Linkedin");
    facebook.value = localStorage.getItem("Facebook");
    insta.value = localStorage.getItem("Instagram");
}
 
document.addEventListener('change',(e)=>{
    localStorage.setItem("FullName",name.value);
    localStorage.setItem("Email",email.value);
    localStorage.setItem("Phone",mobile.value);
    localStorage.setItem("Branch",branch.value);
    localStorage.setItem("Domain",domain.value);
    localStorage.setItem("DOB",dob.value);
    localStorage.setItem("Git",git.value);
    localStorage.setItem("Linkedin",linkedin.value);
    localStorage.setItem("Facebook",facebook.value);
    localStorage.setItem("Instagram",insta.value);
    localStorage.setItem("Submit",0);
}) 

submit.addEventListener('click',()=>{
    if(validate()){
        localStorage.setItem("Submit",1);
        form.style.display="none";
        button.style.display="none";
        success.style.display="block";        
    }
    
}); 

refresh.addEventListener('click',()=>{     
    window.location.reload();
})

