import * as THREE from 'three';
import { TweenMax, Power2, TimelineLite, TimelineMax, Expo } from "gsap/TweenMax";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';


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
            obj.position.set(10,10,10);
            this.PatrickStar.add(obj)

        });
    });
    this.PatrickStar.position.set(-40, -90, 0)

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