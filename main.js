import SceneManager from './js/sceneManager';
// import * as THREE from 'three';
// import OrbitControls from 'three-orbitcontrols';
import { OrbitControls } from 'Three/examples/jsm/controls/OrbitControls.js';


const canvas = document.getElementById("canvas");
const sceneManager = new SceneManager(canvas);

bindEventListeners();
render();

document.body.appendChild(sceneManager.renderer.domElement);
const controls = new OrbitControls(sceneManager.camera, sceneManager.renderer.domElement);
controls.addEventListener('change', () => sceneManager.renderer.render(sceneManager.scene, sceneManager.camera));



function bindEventListeners() {
    window.onresize = resizeCanvas;
    resizeCanvas();
}

function resizeCanvas() {
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.backgroundColor = "#000"
    canvas.style.margin = "0px"

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    sceneManager.onWindowResize();
}

function render() {
    requestAnimationFrame(render);
    sceneManager.update();
}


