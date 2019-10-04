//pass canvas, and handle the DOM events we care about 
import * as THREE from 'three';
import GeneralLights from './sceneSubjects/generalLights';
import EarthSubject from './sceneSubjects/earthPlanet';
import StarSubjects from './sceneSubjects/starSubjects';
import OrbitingPlanet from './sceneSubjects/planetSubjects/orbitingPlanet'
import SaturnPlanet from './sceneSubjects/planetSubjects/SaturnPlanet'
import MercuryPlanet from './sceneSubjects/planetSubjects/mercuryPlanet'
import VenusPlanet from './sceneSubjects/planetSubjects/venusPlanet'
import MarsPlanet from './sceneSubjects/planetSubjects/marsPlanet'
import JupiterPlanet from './sceneSubjects/planetSubjects/jupiterPlanet'
import UranusPlanet from './sceneSubjects/planetSubjects/uranusPlanet'
import NeptunePlanet from './sceneSubjects/planetSubjects/neptunePlanet'
import PlutoPlanet from './sceneSubjects/planetSubjects/plutoPlanet'
import UFO from './sceneSubjects/ufo'
import MilkyWay from './sceneSubjects/milkyWay'
import PatrickStar from './sceneSubjects/patrickStar'

function SceneManager (canvas){
    const clock = new THREE.Clock();

    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }


    this.scene = buildScene();
    this.renderer = buildRender(screenDimensions);
    this.location = [10, 10, 100];
    // this.location =[10,10,0]
    this.camera = buildCamera(screenDimensions, this.location);

    this.rotation = [0,0,0]
    const sceneSubjects = createSceneSubjects(this.scene, this.location);
    const RocketShip = createRocketShip(this.scene, this.location, this.camera)

    // let constrols = new THREE.OrbitControls(camera)

    this.moveRocket = function (keycode) {
        console.log(keycode)
        let newLocation = this.location
        let newRotation = this.rotation
        if (keycode === 87) {
            newLocation[1] = newLocation[1] + 2
        } else if (keycode === 65) {
            newLocation[0] = newLocation[0] - 2
        } else if (keycode === 68) {
            newLocation[0] = newLocation[0] + 2
        } else if (keycode === 83) {
            newLocation[1] = newLocation[1] - 2
        } else if (keycode === 69) {
            newLocation[2] = newLocation[2] + 2
        } else if (keycode === 81) {
            newLocation[2] = newLocation[2] - 2
        } else if (keycode === 74){
            newRotation[1] = newRotation[1] + .2
        }else if (keycode === 76) {
            newRotation[1] = newRotation[1] - .2
        } else if (keycode === 75) {
            newRotation[2] = newRotation[2] + .2
        } else if (keycode === 73) {
            newRotation[2] = newRotation[2] - .2
        }
        this.location = newLocation;
    }

    function buildScene() {
        const scene = new THREE.Scene();
        scene.fog = new THREE.Fog(0x050505, 2000, 3500);
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

    function buildCamera({ width, height }, location) {
        console.log(location)
        const aspectRatio = width / height;
        const fieldOfView = 40;
        const nearPlane = .1;
        const farPlane = 10000;
        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
        camera.position.x = location[0];
        camera.position.y = location[1];
        camera.position.z = location[2];
        // camera.lookAt(location[0], location[1], location[2])
        
        // scene.add(camera);
        // camera.position.set(location[0], location[1], 100);
        return camera;
    }


    function createSceneSubjects(scene) {
        const sceneSubjects = [
            new GeneralLights(scene),
            new EarthSubject(scene),
            new StarSubjects(scene),
            new OrbitingPlanet(scene),
            new SaturnPlanet(scene),
            new MercuryPlanet(scene),
            new VenusPlanet(scene),
            new MarsPlanet(scene),
            new JupiterPlanet(scene),
            new UranusPlanet(scene),
            new NeptunePlanet(scene),
            new PlutoPlanet(scene),
            new MilkyWay(scene),
            new PatrickStar(scene),
        ];

        return sceneSubjects;
    }

    function createRocketShip(scene, location, camera){
        return new UFO(scene, location, camera)
    }
    

    this.update = function () {
        const elapsedTime = clock.getElapsedTime();
        for (let i = 0; i < sceneSubjects.length; i++){
            
            sceneSubjects[i].update(elapsedTime);
        }

        RocketShip.updateLocation(this.location)
        RocketShip.updateRotation(this.rotation[0], this.rotation[1], this.rotation[2])
        RocketShip.update(elapsedTime)
        this.rotation = [0,0,0]
        this.renderer.render(this.scene, this.camera);
        
    }

    this.showFire = function(){
        RocketShip.updateFire(this.location);
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


