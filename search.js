let query = document.querySelector('.searchbar');
let btn = document.querySelector('.search');
let full = document.querySelector('.expand');
let bod = document.getElementsByClassName('allas');



btn.addEventListener("click" , ()=>{
    let url =  "https://www.google.com/search?q=" + query.value;
    window.open(url)
});

full.addEventListener("click" , ()=>{
    document.body.requestFullscreen();
});






// https://www.google.com/search?q=