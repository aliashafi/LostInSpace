import * as THREE from 'three';
import { TweenMax, Power2, TimelineLite, TimelineMax, Expo } from "gsap/TweenMax";



function NeptunePlanet(scene) {


    var geometry = new THREE.SphereGeometry(2, 16, 16);
    var material = new THREE.MeshPhongMaterial({});
    material.map = THREE.ImageUtils.loadTexture('images/neptunemapthumb.jpg');    
    material.specular = new THREE.Color('grey')

    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(5, 0, 0);


    var geometry1 = new THREE.SphereGeometry(0.51, 32, 32)
    var material1 = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        opacity: 0.8,
        transparent: true,
        depthWrite: false,
    })
    var cloudMesh = new THREE.Mesh(geometry1, material1)


    var r = 320;
    var theta = 0;
    var dTheta = .3 * Math.PI / 1000;

    scene.add(mesh);
    this.update = function (time) {
        mesh.rotateY(.004)
        theta += dTheta;
        mesh.position.x = r * Math.cos(theta);
        mesh.position.z = r * Math.sin(theta);
    }
}
export default NeptunePlanet;


