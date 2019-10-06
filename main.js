import SceneManager from './js/sceneManager';
import { OrbitControls } from 'Three/examples/jsm/controls/OrbitControls.js';


const canvas = document.getElementById("canvas");
const sceneManager = new SceneManager(canvas);



let intoMessage = "...Huston, do you read?  We have lost a star in space, will you help us find it?";
let hint = "One star is not like the rest, press 'G' for clues";
let i = 0;
// window.addEventListener("load", () => {
//     const message = document.getElementById("message");
    
// })

function typeMessage() {
    if (i < intoMessage.length){
        document.getElementById("message").innerHTML += intoMessage.charAt(i);
        i ++;
        setTimeout(typeMessage, 50);
    }
}
typeMessage();

document.body.appendChild(sceneManager.renderer.domElement);
const controls = new OrbitControls(sceneManager.camera, sceneManager.renderer.domElement);
controls.addEventListener('change', () => sceneManager.renderer.render(sceneManager.scene, sceneManager.camera));
let keycode = 9;
document.addEventListener('keydown', (e) => keycode = e.keyCode);
document.addEventListener('keydown', (e) => {
    console.log(e.keyCode)
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


