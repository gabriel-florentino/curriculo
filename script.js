setInterval(() => {
    const now = new Date();
    document.getElementById("clock").innerText = now.toLocaleTimeString();
  }, 1000);

function Menssage(what) {
    alert(`Você será redirecionado para o  ${what}`)
}

let clicked = true;
function SeeMore() {
    if (clicked) {
        document.querySelector('#bio').style.display = 'inline';
        document.querySelector('#more').innerHTML = 'Esconder';
    }else{
        document.querySelector('#bio').style.display = 'none';
        document.querySelector('#more').innerHTML = 'Ver mais...';
    }
    clicked = !clicked;
}