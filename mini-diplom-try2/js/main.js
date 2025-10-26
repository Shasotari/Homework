(function() {
    
    document.addEventListener('click', burgerMenu)

    function burgerMenu(m) {
        
        const burgerIcon = m.target.closest('.burger-icon')
        if (burgerIcon) {
            console.log('WWWWWWWWW');
        }
        const burgerNavLink = m.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

})()