import * as THREE from 'three';
import { TweenMax, Power2, TimelineLite, TimelineMax, Expo } from "gsap/TweenMax";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


function PatrickStar(scene) {
    this.PatrickStar = new THREE.Group()
    const mtlLoader = new MTLLoader();
    mtlLoader.load('../../images/Patrick.mtl', materials => {
        materials.preload();
        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load('../../images/Patrick.obj', obj => {
            // obj.rotateX(-3.5708);
            obj.rotateY(-3.1);
            // obj.scale.set(.06, .06, .06);
            obj.position.set(getRandomInt(100), getRandomInt(100), getRandomInt(100));
            this.PatrickStar.add(obj)

        });
    });
    this.PatrickStar.name = "patrickStar"
    this.PatrickStar.position.set(getRandomInt(500), getRandomInt(500), getRandomInt(500))

    scene.add(this.PatrickStar)
    // let pos = 
    var r = 100;
    var theta = 0;
    var dTheta = 1 * Math.PI / 1000;

    this.update = function (time) {
        
        this.PatrickStar.rotateY(.004)
        theta += dTheta;
        this.PatrickStar.position.x = r * Math.sin(theta);
        
    }
}
export default PatrickStar;