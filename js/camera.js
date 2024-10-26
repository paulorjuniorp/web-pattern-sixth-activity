const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const tirarFotoBtn = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");
const enviarFotoBtn = document.querySelector("[data-enviar]");

let imagemURL = "";

botaoIniciarCamera.addEventListener('click', async function () {
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false});

    botaoIniciarCamera.style.display = "none";

    campoCamera.style.display = "block";

    video.srcObject = iniciarVideo;
})


tirarFotoBtn.addEventListener('click', function () {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    imagemURL = canvas.toDataURL('imagem/jpeg');
    campoCamera.style.display = "none";

    mensagem.style.display = "block";
});

enviarFotoBtn.addEventListener('click', function () {
    const receberDadosExistentes = localStorage.getItem("cadastro");
    
    const converteRetorno = JSON.parse(receberDadosExistentes);
    console.log(converteRetorno)
    converteRetorno.imagem = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(converteRetorno));
    console.log('Antes do href')
    window.location.href = './abrir-conta-form-3.html'
})
