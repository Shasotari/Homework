// ============================= бургер =================================== //
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
// ============================================================================
(function() {
    // модалка =============================================================
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
// табы ===============================================================================================

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.tab-controls__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active')) return


        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--show')

        activeContent.classList.remove('tab-content--show')
        tabContent.classList.add('tab-content--show')
        
        activeControl.classList.remove('tab-controls__link--active')
        tabControl.classList.add('tab-controls__link--active')
    }
//  Аккордеон ===============================================================================
        const accordionLists = document.querySelectorAll('.accordion-list');

        accordionLists.forEach(el => {

            el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

            }); 

        });


})()
