(function() {
    
    document.addEventListener('click', burgerMenu)

    function burgerMenu(m) {
        
        const burgerIcon = m.target.closest('.burger-icon')
        const burgerNavLink = m.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

})();
(function() {
    
    document.addEventListener('click', modalW)

    function modalW(w) {
        
        const giftButton = w.target.closest('.button-gift')
        const closeModal = w.target.closest('.modal__cancel')
        const modalButton = w.target.closest('.modal__button')
        const modal = w.target.closest('.modal')
        const modalWindow = w.target.closest('.modal__window')
        
        if (giftButton) {
            document.body.classList.add('body--modal-opened')
            return
        }
        
        
        if (closeModal || modalButton) {
            document.body.classList.remove('body--modal-opened')
            return
        }
        
        
        if (modal && !modalWindow) {
            document.body.classList.remove('body--modal-opened')
        }
    }

})()