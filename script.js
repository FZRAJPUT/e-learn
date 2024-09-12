const main = document.getElementById('cont');

const change = (e, prop,dir) => {
    main.style.justifyContent = prop
    main.style.flexDirection = dir
}