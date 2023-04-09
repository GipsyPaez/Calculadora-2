const Boton1= document.getElementById("suma");
Boton1.addEventListener(
    'click',
    async (event)=>{
        event.preventDefault();        
        const numero_1= parseFloat(document.getElementById("numero1").value);
        const numero_2= parseFloat(document.getElementById("numero2").value);
        
        const respuesta= await fetch('http://localhost:3000/api/sumar',{
                "method":"POST",
                "headers":{
                    "Content-Type":"application/json"
                },
                "body": JSON.stringify({numero_1, numero_2})
            }
        );
        const dato= await respuesta.json();
        const div_resultado=document.getElementById("resultado");
        div_resultado.innerHTML=dato;
    }
);

const Boton2 = document.getElementById("resta");
Boton2.addEventListener("click", async (event) => {
    event.preventDefault(); 
    const numero_1 = parseFloat(document.getElementById("numero1").value);
    const numero_2 = parseFloat(document.getElementById("numero2").value);
    const respuesta = await fetch("http://localhost:3000/api/restar", {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json",
    },
    "body": JSON.stringify({ numero_1, numero_2 }),
    });

    const dato = await respuesta.json();
    const div_resultado = document.getElementById("resultado");
    div_resultado.innerHTML = dato;
});

const Boton3 = document.getElementById("multi");
Boton3.addEventListener("click", async (event) => {
    event.preventDefault();
    const numero_1 = parseFloat(document.getElementById("numero1").value);
    const numero_2 = parseFloat(document.getElementById("numero2").value);
    const respuesta = await fetch("http://localhost:3000/api/multiplicar", {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json",
    },
    "body": JSON.stringify({ numero_1, numero_2 }), 
    });

    const dato = await respuesta.json();
    const div_resultado = document.getElementById("resultado");
    div_resultado.innerHTML = dato;
});

const Boton4 = document.getElementById("divi");
Boton4.addEventListener("click", async (event) => {
    event.preventDefault();
    const numero_1 = parseFloat(document.getElementById("numero1").value);
    const numero_2 = parseFloat(document.getElementById("numero2").value);
    const respuesta = await fetch("http://localhost:3000/api/dividir", {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json",
    },
    "body": JSON.stringify({ numero_1, numero_2 }), 
    });

    const dato = await respuesta.json();
    const div_resultado = document.getElementById("resultado");
    div_resultado.innerHTML = dato;
});