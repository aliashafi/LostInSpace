import * as THREE from 'three';
import { TweenMax, Power2, TimelineLite, TimelineMax, Expo } from "gsap/TweenMax";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { CubeCamera, ConeGeometry } from 'three';




function UFO(scene, location, camera) {
    
    this.rocketShip = new THREE.Group()
    this.fireShip = new THREE.Group()
    const mtlLoader = new MTLLoader();

    

    mtlLoader.load('../../images/RocketShipMaterial.mtl', materials => {
        materials.preload();
        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load('../../images/RocketShip.obj', obj => {
            // obj.rotateX(-3.5708);
            obj.rotateY(-3.1);
            obj.scale.set(.06,.06,.06);
            obj.position.set(location[0] - 5, location[1] - 3, location[2] - 13);
           
            // obj["verticies"] = obj.children[0].geometry.attributes.position.array
            
            this.rocketShip.add(obj)
            
        });
        
    });
   

    this.rocketShip.name = "rocketShip"

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
           
            ///ray casting

            
            this.fireShip.add(obj)
            // light.add(this.fireShip)

            

        });
        
    });

    var geometry = new THREE.BoxGeometry(10, 10, 10);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    cube.visible = false;
    cube.name = "cube"
    cube.position.set(location[0] - 4, location[1] -3, location[2] - 14)
    this.rocketShip.add(cube);

    this.rocketShip.add(camera)
    scene.add(this.rocketShip);
    scene.add(this.fireShip)
    this.updateLocation = function(location){
        

        ///collision
        let collidableMeshList = scene.children
        collidableMeshList = collidableMeshList.filter(subj => subj.name !== "stars")
        let rocketShip = scene.getObjectByName('cube');
        let originPoint = new THREE.Vector3([0], location[1], location[2])
        // let originPoint = this.rocketShip.position.clone(); 
        // console.log(originPoint)

        for (var vertexIndex = 0; vertexIndex < rocketShip.geometry.vertices.length; vertexIndex++){
            var localVertex = rocketShip.geometry.vertices[vertexIndex].clone();
            var globalVertex = localVertex.applyMatrix4(rocketShip.matrix);
            // var directionVector = globalVertex.sub(this.rocketShip.position);
            var directionVector = globalVertex.sub(this.rocketShip.position);

            var ray = new THREE.Raycaster(
                originPoint, directionVector.clone().normalize());
           
            var collisionResults =
                ray.intersectObjects(collidableMeshList);

        }
        
        if (collisionResults.length > 0){
            console.log("collision")
            // debugger
            
            // this.rocketShip.position.set(location[0] -5 , location[1] -5, location[2] -5)
            // this.fireShip.position.set(location[0] -5 , location[1] -5, location[2] -5)
        }else{
            this.fireShip.position.set(location[0], location[1], location[2])
            this.rocketShip.position.set(location[0], location[1], location[2])
        }
        

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