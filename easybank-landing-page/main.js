let menuBtn = document.querySelector('#menu-btn');
let mobileNav = document.querySelector('#mobile-nav');

menuBtn.addEventListener('click',()=>{
    if(menuBtn.innerHTML != '✕'){

        mobileNav.style.display = 'flex';
        menuBtn.innerHTML = "✕"
    }else {
        mobileNav.style.display = 'none'
        menuBtn.innerHTML = "|||"
    }

})
