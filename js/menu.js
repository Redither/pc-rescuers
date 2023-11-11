document.querySelector('#menu_btn').onclick = function() {
    this.classList.toggle('close');
    document.querySelector('#nav_menu').classList.toggle("_hide-menu");
}

document.querySelector('.nav_links').querySelectorAll('a').forEach((link) => {
    link.onclick = function() {
        document.querySelector('#menu_btn').classList.toggle('close');
        document.querySelector('#nav_menu').classList.toggle("_hide-menu");
    }
})

