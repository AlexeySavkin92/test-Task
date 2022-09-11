const buttonRight = document.getElementById("button_right");
const buttonLeft = document.getElementById("button_left");
const slide = document.getElementById("slider").children;
const slideParent = document.getElementById("slider");
let step = 1;
let offSet = -100;
let currentShift;
let interval;

const createClones = () => {
	let firstSlideClone = slide[0].cloneNode(true);
	let lastSlideClone = slide[slide.length - 1].cloneNode(true);
	slideParent.append(firstSlideClone);
	slideParent.prepend(lastSlideClone);
};
const createDots = () => {
	let newDiv = document.createElement("div");
	newDiv.classList.add("dot");

	slideParent.addC;
};
createClones();

const shift = (procent) => {
	for (let i = 0; i < slide.length; i++) {
		slide[i].style.left = `${procent}%`;
	}
};
const goToFirstSlide = () => {
	return (step = 2), (offSet = -100);
};
const goToLastSlide = () => {
	return (step = slide.length - 3), (offSet = (slide.length - 2) * -100);
};
const onClickRight = () => {
	step++;
	interval = setInterval(() => {
		calcCurrentShiftLeft(), 50;
	});
	if (step >= slide.length) {
		goToFirstSlide();
	}
};
const onClickLeft = () => {
	step--;
	interval = setInterval(() => {
		calcCurrentShiftRight(), 50;
	});
	if (step < 0) {
		goToLastSlide();
	}
	console.log(step, offSet);
};
const calcCurrentShiftLeft = () => {
	if (offSet > step * -100) {
		shift(offSet);
		offSet--;
	} else clearInterval(interval);
};
const calcCurrentShiftRight = () => {
	if (offSet < step * -100) {
		shift(offSet);
		offSet++;
	} else {
		clearInterval(interval);
	}
};
buttonRight.addEventListener("click", () => onClickRight());
buttonLeft.addEventListener("click", () => onClickLeft());
