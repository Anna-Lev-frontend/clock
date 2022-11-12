// const clock = setInterval((
// ) => {
//     const date = new Date();
//     const min = date.getMinutes();
//     const sec = date.getSeconds();
//     const hour = date.getHours();
//     console.log(hour, min, sec);
// }, 1000);

const makePointsDeal = () => {
    const points = new Array(12).fill(null);
    const arrayDiv = points.map((value, index) => {
        const div = document.createElement('div');
        const xPosition;
        const yPosition;
        div.style.transform = `translate(${xPosition}px,${yPosition}px)`;

        div.classList.add('point');
        div.innerText = index + 1;
        return div;
    })
    return arrayDiv
}

const makeDial = () => {
    const mainDial = document.createElement('div');
    mainDial.classList.add('main-dial');
    const pointsDeal = makePointsDeal();
    mainDial.append(...pointsDeal)
    return mainDial;
}
document.body.append(makeDial())

// [null,null,null]
// [div,div,div]