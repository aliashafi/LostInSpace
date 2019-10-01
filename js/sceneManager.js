//pass canvas, and handle the DOM events we care about 
import * as THREE from 'three';
import GeneralLights from './sceneSubjects/generalLights';
import EarthSubject from './sceneSubjects/earthPlanet';
import StarSubjects from './sceneSubjects/starSubjects';
import OrbitingPlanet from './sceneSubjects/planetSubjects/orbitingPlanet'
import SaturnPlanet from './sceneSubjects/planetSubjects/SaturnPlanet'


function SceneManager (canvas){
    const clock = new THREE.Clock();

    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }

    this.scene = buildScene();
    this.renderer = buildRender(screenDimensions);
    this.camera = buildCamera(screenDimensions);
    const sceneSubjects = createSceneSubjects(this.scene);
    

    // let constrols = new THREE.OrbitControls(camera)



    function buildScene() {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color("#000");

        return scene;
    }

    

    function buildRender({ width, height }) {
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
        const DPR = (window.devicePixelRatio) ? window.devicePixelRatio : 1;
        renderer.setPixelRatio(DPR);
        renderer.setSize(width, height);

        renderer.gammaInput = true;
        renderer.gammaOutput = true;


        return renderer;
    }

    function buildCamera({ width, height }) {
        const aspectRatio = width / height;
        const fieldOfView = 50;
        const nearPlane = .1;
        const farPlane = 1000;
        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
        camera.position.z = 20;
        return camera;
    }

    function createSceneSubjects(scene) {
        const sceneSubjects = [
            new GeneralLights(scene),
            new EarthSubject(scene),
            new StarSubjects(scene),
            new OrbitingPlanet(scene),
            new SaturnPlanet(scene),
        ];

        return sceneSubjects;
    }

    this.update = function () {
        const elapsedTime = clock.getElapsedTime();

        for (let i = 0; i < sceneSubjects.length; i++)
            sceneSubjects[i].update(elapsedTime);

        this.renderer.render(this.scene, this.camera);
    }

    this.onWindowResize = function () {
        const { width, height } = canvas;

        screenDimensions.width = width;
        screenDimensions.height = height;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(width, height);
    }

}

export default SceneManager;


