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

    scene.add(this.PatrickStar)
    // let pos = 

    this.update = function (time) {

       
            
        this.PatrickStar.rotateY(.04)
        this.PatrickStar.rotateX(.04)
        // this.PatrickStar.position.y += 1
        
        
        // }else if (Math.floor(time) % 4 === 0){
        //     this.PatrickStar.position.x += 4
        //     this.PatrickStar.position.y -= 4
        // }else{
        //     this.PatrickStar.position.x += 1;
        //     this.PatrickStar.position.y -= 1;
        // }
        // mesh.scale.set(scale, scale, scale);
    }
}
export default PatrickStar;