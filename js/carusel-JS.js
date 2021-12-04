let prevBtn = document.getElementById('prev-btn');
prevBtn.addEventListener('click', prev);

let nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', next);

let caruselImgs = document.getElementById('carusel-imgs');

let activNum;


function onload() {
    caruselImgs.children[0].classList.remove('slideNoActiv')
    caruselImgs.children[0].classList.add('slideActiv')

}
onload()

function prev() {
    activSlideNum()


    if (0 < activNum && activNum <= caruselImgs.children.length) {

        caruselImgs.children[activNum].classList.remove('slideActiv');
        caruselImgs.children[activNum].classList.add('slideNoActiv');
        caruselImgs.children[activNum - 1].classList.remove('slideNoActiv');
        caruselImgs.children[activNum - 1].classList.add('slideActiv');

    } else {

        caruselImgs.children[0].classList.remove('slideActiv');
        caruselImgs.children[0].classList.add('slideNoActiv');
        caruselImgs.children[caruselImgs.children.length - 1].classList.remove('slideNoActiv');
        caruselImgs.children[caruselImgs.children.length - 1].classList.add('slideActiv');

    }



}

function next() {

    activSlideNum()


    if (activNum < caruselImgs.children.length - 1 && 0 <= activNum) {

        caruselImgs.children[activNum].classList.remove('slideActiv');
        caruselImgs.children[activNum].classList.add('slideNoActiv');

        caruselImgs.children[activNum + 1].classList.remove('slideNoActiv');
        caruselImgs.children[activNum + 1].classList.add('slideActiv');

    } else {

        caruselImgs.children[caruselImgs.children.length - 1].classList.remove('slideActiv');
        caruselImgs.children[caruselImgs.children.length - 1].classList.add('slideNoActiv');
        caruselImgs.children[0].classList.remove('slideNoActiv');
        caruselImgs.children[0].classList.add('slideActiv');

    }


}

function activSlideNum() {

    for (i = 0; i < caruselImgs.children.length; i++) {

        if (caruselImgs.children[i].classList == "slideActiv") {
            activNum = i;
            break;
        }
    }


}


function submenuHover() {
    let hoverUl = document.getElementById('front-catalog');
    console.log(hoverUl.children[0]);
}
submenuHover()