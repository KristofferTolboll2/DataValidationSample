
const div = document.getElementById('div')
const validateEmail = () =>{
    console.log('clicked')
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let email =document.getElementById('email').value
    console.log(email)
    if(re.test(email)){
        div.innerHTML = 
        `the email ${email} is okay!`
    }else{
        div.innerHTML = 
        `the email ${email} is NOT okay!`
    }
    }
    

const btn = document.getElementById('btn').addEventListener('click', validateEmail)

