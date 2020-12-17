Let input = document.querySelector("#usuario");

input.addEventListener("invalid", (evento) => {
    Let input = evento.target;
    Let mensaje = input.elementSibiling;
    mensaje.innerText = input.validationMessage;
})

input.addEventListener("input",(evento) => {
    Let input = evento.target;
    input.classList.remove("is-valid", "is-invalid");
    if(input.checkValidity()){
        input.classList.add("is-valid");
    }else{
        input.classList.add("is-invalid");
    }
})

Let app = new Vue({
    el:"#app",
    data:{
        password: null,
        estado: "",
        invalidos:["admin","123456","contraseña","password"],
        check: false,
    },
    watch:{  //watch sirve para vigilar variables, es un objeto donde vamos a guardar funciones q se van a llamar igual que las variasbles que queremos vigilar y cuando ocurra un cambio tal variable vue va a llamar a la función con 2 argumentos: el anterior y el nuevo
        password(nuevo, viejo){
            if(this.invalidos.indexOf(nuevo) > -1 ){
                this.estado = "Ingrese una contraseña más dificil";
                return false;
            } else if (nuevo.length < 5){
                this.estado = "La contraseña debe tener al menos 5 caracteres"
                return false;
        } else {
            this.estado = "Contraseña válida";
        }
    }
})

 


