let menu = document.getElementById('menu')
menu.addEventListener('click', function () {
    const navbarLoginRegister = document.getElementById('navbar-login-register')
    navbarLoginRegister.style.right = '0px'
    let close = document.getElementById('close')
    close.addEventListener('click', function () {
        navbarLoginRegister.style.right = '-500px'
    })
})
let features = document.getElementById('features')
    let arrowFeature = document.getElementById('arrow-feature')
    let popupFeatures = document.getElementById('popup-features')
    let heading = document.getElementById('heading')
    let company = document.getElementById('company')
    const mediaQuery = window.matchMedia('(max-width: 499px)')
    features.onmouseenter = function () {
        arrowFeature.src = 'images/icon-arrow-up.svg'
        popupFeatures.style.display = 'initial'
        if (mediaQuery.matches) {
            popupFeatures.style.left = '120px'
            popupFeatures.style.marginLeft   = '20px'
            popupFeatures.style.top = '14%'
            company.style.marginTop = '150px'
            features.onmouseleave = function () {
                arrowFeature.src = 'images/icon-arrow-down.svg'
                popupFeatures.style.display = 'none'
                company.style.marginTop = '0px'
            }
        } else {
            heading.style.marginTop = '70px'
            features.onmouseleave = function () {
                arrowFeature.src = 'images/icon-arrow-down.svg'
                popupFeatures.style.display = 'none'
                heading.style.marginTop = '0px'
            }
        }
    }
    let arrowCompany = document.getElementById('arrow-company')
    let popupCompany = document.getElementById('popup-company')
    let careers = document.getElementById('careers')
    company.onmouseenter = function () {
        arrowCompany.src = 'images/icon-arrow-up.svg'
        popupCompany.style.display = 'flex'
        if (mediaQuery.matches) {
            popupCompany.style.left = '48%'
            popupCompany.style.top = '23%'
            careers.style.marginTop = '100px'
            company.onmouseleave = function () {
                arrowCompany.src = 'images/icon-arrow-down.svg'
                popupCompany.style.display = 'none'
                careers.style.marginTop = '10px'
            }
        } else {
            company.onmouseleave = function () {
                arrowCompany.src = 'images/icon-arrow-down.svg'
                popupCompany.style.display = 'none'
            }
        }
    }