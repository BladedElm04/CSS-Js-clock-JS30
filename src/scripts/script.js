const Seconds = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const hand = document.querySelector(".seconds-hand");

    if(hand.style.transform == "rotate(444deg)"){
        hand.style.transition = "0s"
    }
    hand.style.transform = `rotate(${((seconds/60) * 360) + 90}deg)`;

}

const Minutes = () => {
    const now = new Date();
    const minutes = now.getMinutes();
    const hand = document.querySelector(".min-hand");
    if(hand.style.transform == "rotate(444deg)"){
        hand.style.transition = "0s"
    }
    hand.style.transform = `rotate(${(minutes/60 * 360) + 90}deg)`
}

const Hours = () => {
    const now = new Date();
    const hour = now.getHours();
    const hand = document.querySelector(".hour-hand");
    if(hand.style.transform == "rotate(444deg)"){
        hand.style.transition = "0s"
    }
    hand.style.transform = `rotate(${(hour/12 * 360) + 90}deg)`
}

setInterval(Seconds, 1000)
setInterval(Minutes, 1000)
setInterval(Hours, 1000)