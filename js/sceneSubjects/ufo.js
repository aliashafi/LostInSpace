import * as THREE from 'three';
import { TweenMax, Power2, TimelineLite, TimelineMax, Expo } from "gsap/TweenMax";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';




function UFO(scene, location, camera) {
    this.rocketShip = new THREE.Group()
    this.fireShip = new THREE.Group()
    const mtlLoader = new MTLLoader();
    var light = new THREE.PointLight(0xffffff, 1);

    mtlLoader.load('../../images/RocketShipMaterial.mtl', materials => {
        materials.preload();
        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load('../../images/RocketShip.obj', obj => {
            // obj.rotateX(-3.5708);
            obj.rotateY(-3.1);
            obj.scale.set(.06,.06,.06);
            obj.position.set(location[0] - 5, location[1] - 3, location[2] - 13);
            this.rocketShip.add(obj)

            
        });
    });

    mtlLoader.load('../../images/rocketFire.mtl', materials => {
        materials.preload();
        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load('../../images/rocketFire.obj', obj => {
            // obj.rotateX(-3.5708);
            // obj.rotateY(3.1);
            obj.scale.set(.06, .06, .06);
            obj.position.set(location[0] - 5, location[1] - 4, location[2] - 13);
            obj.castShadow = true;
            // obj.materials.opacity = .5;
            // obj.materials.transparent = true;
            // light.add(obj)
            this.fireShip.add(obj)
            // light.add(this.fireShip)
            

        });
    });
    
    // var tex = THREE.ImageUtils.loadTexture("./images/Fire.png");
    // var fire = new THREE.Fire(tex);
    
    // fire.position.set(.5,0,0)
    // scene.add(fire);
    
    this.rocketShip.add(camera)
    scene.add(this.rocketShip);
    scene.add(this.fireShip)
    this.updateLocation = function(location){
       this.fireShip.position.set(location[0], location[1], location[2])
       this.rocketShip.position.set(location[0],location[1],location[2])

        
    }

    

    this.updateRotation = function (rotationX, rotationY, rotationZ) {
        this.fireShip.rotateX(rotationX)
        this.fireShip.rotateY(rotationY)
        this.fireShip.rotateZ(rotationZ)
        this.rocketShip.rotateX(rotationX);
        this.rocketShip.rotateY(rotationY);
        this.rocketShip.rotateZ(rotationZ);
    }

    this.update = function (time) {
        if (Math.floor(time) % 2 === 0){
            this.fireShip.visible = true;
        }else{
            this.fireShip.visible = false;
        }
        // this.fireShip.position.z = newPos + .05
        // mesh.scale.set(scale, scale, scale);
    }
}
export default UFO;