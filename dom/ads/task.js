// let advertisementsBlocks = document.querySelectorAll('.card');
// let advertisementsBlocskArray = Array.from(advertisementsBlocks);

// let rotator = function(collection) {
//     let ArrayRotation = Array.from(collection);
//     let currentElement = ArrayRotation.findIndex((index) => index.classList.contains('rotator__case_active'));
//     collection[currentElement].classList.remove('rotator__case_active');
//     if (currentElement >= ArrayRotation.length - 1) {
//     collection[0].classList.add('rotator__case_active');
//     } else {
//     collection[currentElement + 1].classList.add('rotator__case_active');    
//     }
// }

// for (let i = 0; i < advertisementsBlocskArray.length; i++){
//     setInterval(() => {
//         let advertisements = advertisementsBlocks[i].querySelectorAll('.rotator__case');
//         rotator(advertisements)
//     }, 1000);
// }

let advertisementsBlocks = document.querySelectorAll('.card');
let advertisementsBlocskArray = Array.from(advertisementsBlocks);


let rotator = function(collection, timerId) {
        let ArrayRotation = Array.from(collection);
        let currentElement = ArrayRotation.findIndex((index) => index.classList.contains('rotator__case_active'));
        collection[currentElement].classList.remove('rotator__case_active');
        if (currentElement >= ArrayRotation.length - 1) {
        collection[0].classList.add('rotator__case_active');
        collection[0].style.color = collection[0].getAttribute(`data-color`);
        clearInterval(timerId);
        let timerForCircle = setTimeout(()=> {
            rotator(collection, timerForCircle);
        }, +collection[0].getAttribute(`data-speed`))
        } else {
        collection[currentElement + 1].classList.add('rotator__case_active'); 
        collection[currentElement + 1].style.color = collection[currentElement + 1].getAttribute(`data-color`); 
        clearInterval(timerId);
        let timerForCircle = setTimeout(()=> {
            rotator(collection, timerForCircle);
        }, +collection[currentElement + 1].getAttribute(`data-speed`))
        }
    }

for (let i = 0; i < advertisementsBlocskArray.length; i++){
    let advertisements = advertisementsBlocks[i].querySelectorAll('.rotator__case');
    let advertisementsArray = Array.from(advertisements);
    let startElement = advertisementsArray.findIndex((index) => index.classList.contains('rotator__case_active'));
    let startTime = advertisements[startElement].getAttribute('data-speed');
    let startColor = advertisements[startElement].getAttribute('data-color');
    advertisements[startElement].style.color = startColor;
    advertisementsBlocskArray[i].timer = setTimeout(() => {
            let advertisements = advertisementsBlocks[i].querySelectorAll('.rotator__case');
            rotator(advertisements, advertisementsBlocskArray[i].timer);
        }, startTime);
}
