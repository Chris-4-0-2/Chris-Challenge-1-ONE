const inputTexto=document.querySelector(".input-texto");
const mensaje=document.querySelector(".mensaje");
const mensaje_text = document.querySelector(".mensaje-text")
const btnCopy = document.querySelector(".copiar");
btnCopy.style.display = "none";

//encriptar

function btnEncriptar(){

    const textoEncriptado=encriptar(inputTexto.value);
    mensaje_text.style.display="none";
    mensaje.value=textoEncriptado;
    mensaje.style.background="none";
    inputTexto.value="";
    btnCopy.style.display = "block"


}

function encriptar(stringEncriptada){
    
    let matrizCodigo=[["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada=stringEncriptada.toLowerCase();
    
    for(let i=0;i<matrizCodigo.length;i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }

    return stringEncriptada;
}

//desencriptar

function btnDesencriptar(){

    const textoEncriptado=desencriptar(inputTexto.value);
    mensaje_text.style.display="none";
    mensaje.value=textoEncriptado;
    inputTexto.value="";

}

function desencriptar(stringEncriptada){
    
    let matrizCodigo=[["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada=stringEncriptada.toLowerCase();
    
    for(let i=0;i<matrizCodigo.length;i++){
        if(stringEncriptada.includes(matrizCodigo[i][1])){
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }

    return stringEncriptada;
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}