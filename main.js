import SceneManager from './js/sceneManager';
import { OrbitControls } from 'Three/examples/jsm/controls/OrbitControls.js';


const canvas = document.getElementById("canvas");
const sceneManager = new SceneManager(canvas);



document.body.appendChild(sceneManager.renderer.domElement);
const controls = new OrbitControls(sceneManager.camera, sceneManager.renderer.domElement);
controls.addEventListener('change', () => sceneManager.renderer.render(sceneManager.scene, sceneManager.camera));
let keycode = 9;
document.addEventListener('keydown', (e) => keycode = e.keyCode);
// sceneManager.moveRocket(e.keyCode)
// sceneManager.moveRocket()
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

function render() {
    
    requestAnimationFrame(render);
    if (keycode) sceneManager.moveRocket(keycode);
    sceneManager.update();
}


