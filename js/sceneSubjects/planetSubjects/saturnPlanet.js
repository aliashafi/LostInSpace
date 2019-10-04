import * as THREE from 'three';
import { TweenMax, Power2, TimelineLite, TimelineMax, Expo } from "gsap/TweenMax";



function SaturnPlanet(scene) {

    ///surface
    let geometry = new THREE.SphereGeometry(7, 16, 16);
    let material = new THREE.MeshPhongMaterial({});
    material.map = THREE.ImageUtils.loadTexture('images/saturnmap.jpg');

    let mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(20, 0, 0);

    ///Ring
    let geometry2 = new THREE.RingGeometry(8, 15, 40);
    let material2 = new THREE.MeshPhongMaterial({ side: THREE.DoubleSide });
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

    var r = 200;
    var theta = 0;
    var dTheta = 2 * Math.PI / 10000;
    
   
    this.update = function (time) {
        // const scale = Math.sin(time) + 2;
        mesh.rotateY(.004)
        // mesh.translateX(.25);
        theta += dTheta;
        mesh.position.x = r * Math.cos(theta);
        mesh.position.z = r * Math.sin(theta);
        
    }
}
export default SaturnPlanet;