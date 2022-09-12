const buttonRight = document.getElementById("button_right");
const buttonLeft = document.getElementById("button_left");
const slide = document.getElementById("slider").children;
const slideParent = document.getElementById("slider");
let eventPermission = true;
let step = 1;
let offSet = -100;
let interval;
let currentSlideNum;

const createClones = () => {
	let firstSlideClone = slide[0].cloneNode(true);
	let lastSlideClone = slide[slide.length - 1].cloneNode(true);
	slideParent.append(firstSlideClone);
	slideParent.prepend(lastSlideClone);
};

const createDots = () => {
	let wraperDots = document.createElement("div");
	wraperDots.classList.add("dots");
	slideParent.parentNode.append(wraperDots);

	for (let i = 0; i < slide.length; i++) {
		const dotItem = document.createElement("li");
		dotItem.id = `${i}`;
		wraperDots.appendChild(dotItem);
		dotItem.addEventListener("click", goToRequiredSlide);
	}
};

const slideDotCurrent = () => {
	if (step < 1) {
		currentSlideNum = slide.length - 2;
	} else if (step > slide.length - 2) {
		currentSlideNum = 1;
	} else {
		currentSlideNum = step;
	}

	for (let i = 0; i < slide.length; i++) {
		if (currentSlideNum == i + 1) {
			document.getElementById(`${i}`).classList.add("_active");
		} else {
			document.getElementById(`${i}`)?.classList.remove("_active");
		}
	}
};

const goToRequiredSlide = (e) => {
	console.log(eventPermission);
	if (eventPermission) {
		eventPermission = false;
		let numRequiredSlide = +e.target.id + 1;

		if (step < numRequiredSlide) {
			step = numRequiredSlide;
			interval = setInterval(calcCurrentShiftLeft, 1);
		} else if (step > numRequiredSlide) {
			step = numRequiredSlide;
			interval = setInterval(calcCurrentShiftRight, 1);
		} else {
			eventPermission = true;
		}
	}
	slideDotCurrent();
};

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
	if (eventPermission) {
		step++;
		interval = setInterval(calcCurrentShiftLeft, 1);

		if (step >= slide.length) {
			goToFirstSlide();
		}
	}
	removeListeners();
	slideDotCurrent();
};
const onClickLeft = () => {
	if (eventPermission) {
		step--;
		interval = setInterval(calcCurrentShiftRight, 1);

		if (step < 0) {
			goToLastSlide();
		}
	}
	removeListeners();
	slideDotCurrent();
};
const calcCurrentShiftLeft = () => {
	if (offSet >= step * -100) {
		shift(offSet);
		offSet--;
	} else {
		clearInterval(interval);
		addListeners();
		eventPermission = true;
	}
};
const calcCurrentShiftRight = () => {
	if (offSet <= step * -100) {
		shift(offSet);
		offSet++;
	} else {
		clearInterval(interval);
		addListeners();
		eventPermission = true;
	}
};

const addListeners = () => {
	buttonRight.addEventListener("click", onClickRight);
	buttonLeft.addEventListener("click", onClickLeft);
};

const removeListeners = () => {
	buttonRight.removeEventListener("click", onClickRight);
	buttonLeft.removeEventListener("click", onClickLeft);
};
createDots();
createClones();
slideDotCurrent();
addListeners();
