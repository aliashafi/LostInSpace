import SceneManager from './js/sceneManager';
import { OrbitControls } from 'Three/examples/jsm/controls/OrbitControls.js';


const canvas = document.getElementById("canvas");
const sceneManager = new SceneManager(canvas);



let introMessage1 = "...Huston, do you read?";
let introMessage2 = "There is a lost star in space, will you help us find it?";
let introMessage3 = "To move around use your keyboard, see the guide in the corners of your screen... warning, space can be a bit disorienting!"
let dots = "..."

let i = 0;
let j = 0;
let k= 0;
let l = 0;
function typeMessage() {
    if (i < introMessage1.length){
        document.getElementById("message1").innerHTML += introMessage1.charAt(i);
        i ++;
        setTimeout(typeMessage, 50);
    }
}

function typeMessage2() {
    if (j < introMessage2.length) {
        
        document.getElementById("message2").innerHTML += introMessage2.charAt(j);
        j++;
        setTimeout(typeMessage2, 50);
    }
}

function typeMessage3() {
    if (l < introMessage3.length) {

        document.getElementById("message3").innerHTML += introMessage3.charAt(l);
        l++;
        setTimeout(typeMessage3, 50);
    }
}

function typeDots(){
    if (k < dots.length) {
        document.getElementById("message2").innerHTML += dots.charAt(k);
        k++;
        setTimeout(typeDots, 400);
    }
}

//type message///
typeMessage();
const dotTime = setInterval(() => {
    k = 0;
    document.getElementById("message2").innerHTML = "";
    typeDots()}, 1000)
setTimeout(() => clearInterval(dotTime), 4000)
setTimeout(typeMessage2, 5000)
setTimeout( () => {
    document.getElementById("btn-yes").style.visibility = "visible";
    document.getElementById("btn-no").style.visibility = "visible";
}, 6000)

////click yes or no
document.getElementById("btn-yes").addEventListener("click", () => {
    document.getElementById("message1").innerHTML = ""
    document.getElementById("message2").innerHTML = ""
    document.getElementById("btn-yes").style.visibility = "hidden";
    document.getElementById("btn-no").style.visibility = "hidden";
    introMessage1 = "I see you are up for the challenge... let's see how fast you can find the missing star"
    introMessage2 = "Here is a hint: One star is not like the rest -- press 'G' for a clue"
    i = 0;
    j = 0;
    typeMessage();
    setTimeout(typeMessage2, 5000)
    setTimeout(typeMessage3, 9000)

    setTimeout( () => {
        document.getElementById("right-controls").style.visibility = "visible"
        document.getElementById("left-controls").style.visibility = "visible"
        document.getElementById("play").style.visibility = "visible"
    }, 9000)

})

document.getElementById("btn-no").addEventListener("click", () => {
    document.querySelector(".start-modal").style.visibility = "hidden";
    document.querySelector("#btn-no").style.visibility = "hidden";
    document.querySelector("#btn-yes").style.visibility = "hidden";
})


document.getElementById("play").addEventListener("click", () => {
    document.querySelector(".start-modal").style.visibility = "hidden"
    document.getElementById("play").style.visibility = "hidden"
})

document.getElementById("play-again").addEventListener("click", () => {
    document.querySelector(".start-modal").style.visibility = "hidden"
    document.getElementById("play-again").style.visibility = "hidden"
    sceneManager.reset()
})

document.querySelector(".reset-position").addEventListener("click", () => {
    sceneManager.reset()
})

/// Add Event Listeners for keydown to change keyboard colors



/////start scene
document.body.appendChild(sceneManager.renderer.domElement);
const controls = new OrbitControls(sceneManager.camera, sceneManager.renderer.domElement);
controls.addEventListener('change', () => sceneManager.renderer.render(sceneManager.scene, sceneManager.camera));
let keycode = 9;
document.addEventListener('keydown', (e) => keycode = e.keyCode);

///add keycodes for corner controls 
document.addEventListener('keydown', (e) => {
    document.getElementById("Q").style.backgroundColor = "lightgray"    
    document.getElementById("W").style.backgroundColor = "lightgray"    
    document.getElementById("E").style.backgroundColor = "lightgray"    
    document.getElementById("A").style.backgroundColor = "lightgray"    
    document.getElementById("S").style.backgroundColor = "lightgray"    
    document.getElementById("D").style.backgroundColor = "lightgray"    
    document.getElementById("J").style.backgroundColor = "lightgray"    
    document.getElementById("K").style.backgroundColor = "lightgray"    
    document.getElementById("L").style.backgroundColor = "lightgray"    
    document.getElementById("I").style.backgroundColor = "lightgray"    
    if (e.keyCode === 81){
        document.getElementById("Q").style.backgroundColor = "#696b6a"
    } if (e.keyCode === 87) {
        document.getElementById("W").style.backgroundColor = "#696b6a"
    } if (e.keyCode === 69) {
        document.getElementById("E").style.backgroundColor = "#696b6a"
    } if (e.keyCode === 65) {
        document.getElementById("A").style.backgroundColor = "#696b6a"
    } if (e.keyCode === 83) {
        document.getElementById("S").style.backgroundColor = "#696b6a"
    } if (e.keyCode === 68) {
        document.getElementById("D").style.backgroundColor = "#696b6a"
    } if (e.keyCode === 74) {
        document.getElementById("J").style.backgroundColor = "#696b6a"
    } if (e.keyCode === 75) {
        document.getElementById("K").style.backgroundColor = "#696b6a"
    } if (e.keyCode === 76) {
        document.getElementById("L").style.backgroundColor = "#696b6a"
    } if (e.keyCode ===73) {
        document.getElementById("I").style.backgroundColor = "#696b6a"
    }
    if (e.keyCode === 71) patrickLeedal();})


bindEventListeners();
render();

function bindEventListeners() {
    window.onresize = resizeCanvas;
    resizeCanvas();
}

function resizeCanvas() {
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.backgroundColor = "#0d00"
    canvas.style.margin = "0px"

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    sceneManager.onWindowResize();
}

function patrickLeedal() {
    var player = document.getElementById("patrick");
    setTimeout(playSound, 100)
    function playSound() {
        player.play().then(response => {
            console.log("yes")
        }).catch(e => {
            console.log(e);
        })
    }
}





function render() {
    requestAnimationFrame(render);
    if (keycode) sceneManager.moveRocket(keycode);
    sceneManager.update();
}


