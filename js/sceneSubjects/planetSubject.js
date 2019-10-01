import * as THREE from 'three';
import { TweenMax, Power2, TimelineLite, TimelineMax, Expo } from "gsap/TweenMax";



function PlanetSubject(scene) {

    const radius = 2;
    // const mesh = new THREE.Mesh(new THREE.IcosahedronBufferGeometry(radius, 2), new THREE.MeshStandardMaterial({ flatShading: true }));
    var geometry = new THREE.SphereGeometry(6, 10, 10);
    var material = new THREE.MeshPhongMaterial({ color: 0x0011ff });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(2, 0, 0);

    var material2 = new THREE.MeshPhongMaterial({ color: '#8080f0' });
    var geometry2 = new THREE.BoxGeometry(1, 1, 1);
   


    scene.add(mesh);

    this.update = function (time) {
      
        // mesh.scale.set(scale, scale, scale);
    }
}
export default PlanetSubject;