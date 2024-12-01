const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.onclick = () => {
    wrapper.classList.add('active');
};

loginLink.onclick = () => {
    wrapper.classList.remove('active');
};



function loguear() {
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("clave").value;


    if (user == "bianchi" && pass == "2024") {
        window.location = "iniciomansa.html";


    }
    else 
    
    {
        alert("datos incorrectos");
    }



}