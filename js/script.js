function nav() {
    const hamburgerBtn = document.querySelector('.hamburger-container');
    let openNav = false;
    hamburgerBtn.addEventListener('click', () => {
        if(!openNav) {
            hamburgerBtn.classList.add('open');
            openNav = true;
            document.querySelector('.index-ul').style.opacity = 1;
        }else {
            hamburgerBtn.classList.remove('open');
            openNav = false;
            document.querySelector('.index-ul').style.opacity = 0;
        }
    })
}
nav();