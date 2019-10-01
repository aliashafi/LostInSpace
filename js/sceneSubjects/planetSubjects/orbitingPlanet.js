import * as THREE from 'three';
import { TweenMax, Power2, TimelineLite, TimelineMax, Expo } from "gsap/TweenMax";



function OrbitingPlanet(scene) {

    const radius = .5;
    // const mesh = new THREE.Mesh(new THREE.IcosahedronBufferGeometry(radius, 2), new THREE.MeshStandardMaterial({ flatShading: true }));
    var geometry = new THREE.SphereGeometry(1, 10, 10);
    var material = new THREE.MeshPhongMaterial({ color: 0xffff00 });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(2, 0, 5);

    this.t1 = new TweenMax({paused: false})
    
    scene.add(mesh);
    this.update = function (time) {
        const scale = Math.sin(time) + 2;
        mesh.rotateY(.04)
        mesh.translateX(1.5);
        // mesh.scale.set(scale, scale, scale);
    }
}
export default OrbitingPlanet;


