function delay(ms) {
    return new Promise(res => setTimeout(res, ms))
}

async function toggleTree(vertEl, subjEl, horizEl, className) {
    if (vertEl.value.classList.contains(`${className}-tree-vert-show`)) {
        subjEl.value.forEach((el) => {
            el.classList.remove(`${className}-tree-subject-show`)
            el.classList.add(`${className}-tree-subject-hidden`)
        })
        await delay(1000)
        horizEl.value.forEach((el) => {
            el.classList.remove(`${className}-tree-horiz-show`)
            el.classList.add(`${className}-tree-horiz-hidden`)
        })
        await delay(1000)
        vertEl.value.classList.remove(`${className}-tree-vert-show`)
        vertEl.value.classList.add(`${className}-tree-vert-hidden`)
    }
    else {
        vertEl.value.classList.remove(`${className}-tree-vert-hidden`)
        vertEl.value.classList.add(`${className}-tree-vert-show`)
        await delay(1200)
        horizEl.value.forEach((el) => {
            el.classList.add(`${className}-tree-horiz-show`)
            el.classList.remove(`${className}-tree-horiz-hidden`)
        })
        await delay(1000)
        subjEl.value.forEach((el) => {
            el.classList.remove(`${className}-tree-subject-hidden`)
            el.classList.add(`${className}-tree-subject-show`)
        })
    }
}

export { delay, toggleTree }
