import * as THREE from 'three';
import { TweenMax, Power2, TimelineLite, TimelineMax, Expo } from "gsap/TweenMax";



function SaturnPlanet(scene) {

    ///surface
    let geometry = new THREE.SphereGeometry(2, 16, 16);
    let material = new THREE.MeshPhongMaterial({});
    material.map = THREE.ImageUtils.loadTexture('images/saturnmap.jpg');

    let mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(5, 0, -20);

    ///Ring
    let geometry2 = new THREE.RingGeometry(3, 2, 32);
    let material2 = new THREE.MeshPhongMaterial({ color: 0xffff00, side: THREE.DoubleSide });
    material2.map = THREE.ImageUtils.loadTexture('images/saturnringcolor.jpg');
    let ring = new THREE.Mesh(geometry2, material2);
    ring.position.set(0, 0, 0);

    let geometry1 = new THREE.SphereGeometry(0.2, 32, 32)
    let material1 = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        opacity: 0.8,
        transparent: true,
        depthWrite: false,
    })


    this.t1 = new TweenMax({ paused: false })

    ring.rotateX(2);
    mesh.add(ring)
    scene.add(mesh);
    // scene.add(ring);
    
   
    this.update = function (time) {
        // const scale = Math.sin(time) + 2;
        mesh.rotateY(.004)
        mesh.translateX(.25);
        // ring.translateX(.15) ;
        // ring.rotateY(.004);
        // ring.rotateZ(.004);
        // mesh.scale.set(scale, scale, scale);
    }
}
export default SaturnPlanet;