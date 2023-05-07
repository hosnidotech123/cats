const contactForm = document.querySelector('.contact-form');
let name = document.getElementById('name');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let tel = document.getElementById('tel');
let Adr = document.getElementById('Adresse');
let message = document.getElementById('message');
contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let formData = {
        name: name.value,
        lname: lname.value,
        email: email.value,
        tel: tel.value,
        Adr: Adr.value,
        message: message.value 
    }
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('email sent');
            name.value ='';
            lname.value ='';
            email.value ='';
            tel.value ='';
            Adr.value ='';
            message.value ='';


        }else{
            alert('email sent');
        }
    }
    xhr.send(JSON.stringify(formData));
})