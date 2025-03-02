document.getElementById('theme').addEventListener('click', function () {
    let theme = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;


    document.body.style.backgroundColor = theme;


}
)