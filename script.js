const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const circle1 = document.querySelector(".circle-1");
const circle2 = document.querySelector(".circle-2");
const circle3 = document.querySelector(".circle-3");
const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");
const inputsCon = document.querySelector(".inputs-con");
const con1Inputs = document.querySelectorAll(".con1-inputs");
const con2Inputs = document.querySelectorAll(".con2-inputs");
const con3Inputs = document.querySelector(".con3-inputs");
const backBtn = document.querySelector(".back");
const finishBtn = document.querySelector(".finish");
const spanLine1 = document.querySelector(".spanLine1");
const spanLine2 = document.querySelector(".spanLine2");

let maxIndex = 3;
let currentIndex = 1;

const iDanger = `<i class="fa-solid fa-exclamation"></i>`;
const iChecked = `<i class="fa-solid fa-check"></i>`;

finishBtn.disabled = true;
finishBtn.classList.add("btn-disabled");

prevBtn.addEventListener("click", prevAndBack);
backBtn.addEventListener("click", prevAndBack);

function prevAndBack() {
    if (currentIndex === 3) {
        inputsCon.style.left = "-580px";
        circle3.style.transitionDelay = "0s";
        circle3.style.background = "transparent";
        spanLine2.style.animation = "spanLine2Back 0.3s ease forwards";
    } else if (currentIndex === 2) {
        inputsCon.style.left = "0";
        circle2.style.transitionDelay = "0s";
        circle2.style.background = "transparent";
        spanLine1.style.animation = "spanLine1Back 0.3s ease forwards";
    }
    currentIndex -= 1;
    disabledPrev();
    disabledNext();
}

nextBtn.addEventListener("click", () => {
    if (currentIndex === 1) {
        inputsCon.style.left = "-580px";
        spanLine1.style.animation = "spanLine1 0.3s ease forwards";
        circle2.style.transitionDelay = "0.15s";
        circle2.style.background = "#f8b500";
    } else if (currentIndex === 2) {
        inputsCon.style.left = "-1160px";
        spanLine2.style.animation = "spanLine2 0.3s ease forwards";
        circle3.style.transitionDelay = "0.15s";
        circle3.style.background = "#f8b500";
    }
    currentIndex += 1;
    disabledPrev();
    disabledNext();
});

function disabledPrev() {
    if (1 < currentIndex) {
        prevBtn.disabled = false;
        prevBtn.classList.remove("btn-disabled");
        backBtn.classList.remove("btn-hidden");
    } else {
        prevBtn.disabled = true;
        prevBtn.classList.add("btn-disabled");
        backBtn.classList.add("btn-hidden");
    }
}

function disabledNext() {
    if (currentIndex === maxIndex) {
        nextBtn.disabled = true;
        nextBtn.classList.add("btn-disabled");
        finishBtn.classList.remove("btn-hidden");
    } else {
        nextBtn.disabled = false;
        nextBtn.classList.remove("btn-disabled");
        finishBtn.classList.add("btn-hidden");
    }
}

function updateContainerStatus(container, inputElements) {

    let allNotEmpty = true;

    inputElements.forEach(function(input) {
        if (input.value === "") {
            allNotEmpty = false;
        }
    });

    if (!allNotEmpty) {
        if (container.innerHTML = iChecked) {
            container.innerHTML = iChecked;
        }
        if (!(container.innerHTML = iDanger)) {
            container.innerHTML = iDanger;
        }
    } else {
        if (container.innerHTML = iDanger) {
            container.innerHTML = iDanger;
        }
        if (!(container.innerHTML = iChecked)) {
            container.innerHTML = iChecked;
        }
    }
}

con1Inputs.forEach(input => input.addEventListener("input", () => {
    updateContainerStatus(circle1, con1Inputs);
    finishStepper();
}));

con2Inputs.forEach(input => input.addEventListener("input", () => {
    updateContainerStatus(circle2, con2Inputs);
    finishStepper();
}));

con3Inputs.addEventListener("input", () => {
    updateContainerStatus(circle3, [con3Inputs]);
    finishStepper();
});

function finishStepper() {
    if (((circle1.innerHTML === iChecked) && (circle2.innerHTML === iChecked) && (circle3.innerHTML === iChecked))) {
        finishBtn.disabled = false;
        finishBtn.classList.remove("btn-disabled");
    } else {
        finishBtn.disabled = true;
        finishBtn.classList.add("btn-disabled");
    }
}