let abs = document.querySelectorAll(`.abs`)
let click = document.querySelectorAll(`.click`)
let arrow = document.querySelectorAll(`.arrow`)
let back = document.querySelector(`.back`)


click.forEach((el, i) => {
    el.addEventListener("click", () => {
        abs.forEach((ele) => {
            // ele.style.opacity = ``
        })

        if (window.innerWidth > 1120) {
            if (abs[i].style.opacity == ``) {
                abs[i].style.zIndex = `3`
                abs[i].style.opacity = `1`
                arrow[i].src = `./images/icon-arrow-up.svg`
            } else {
                abs[i].style.opacity = ``
                arrow[i].src = `./images/icon-arrow-down.svg`
            }
        } else {
            if (abs[i].style.opacity == ``) {
                abs[i].style.height = `110px`
                abs[i].style.opacity = `1`
                arrow[i].src = `./images/icon-arrow-up.svg`
            } else {
                abs[i].style.height = `0`
                abs[i].style.opacity = ``
                arrow[i].src = `./images/icon-arrow-down.svg`
            }
        }
    })
})

let menu = document.querySelector(`.menu`)
let partOne = document.querySelector(`.partOne`)
menu.addEventListener(`click`, () => {
    if (menu.src == 'http://127.0.0.1:5500/images/icon-menu.svg') {
        partOne.style.zIndex = `3`
        back.style.display = `flex`
        partOne.style.transform = `translateX(0)`
        menu.src = `./images/icon-close-menu.svg`
    } else {
        back.style.display = `none`
        partOne.style.zIndex = ``
        partOne.style.transform = ``
        menu.src = `http://127.0.0.1:5500/images/icon-menu.svg`
    }

})