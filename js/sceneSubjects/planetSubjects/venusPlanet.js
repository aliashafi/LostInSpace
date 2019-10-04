import * as THREE from 'three';
import { TweenMax, Power2, TimelineLite, TimelineMax, Expo } from "gsap/TweenMax";



function VenusPlanet(scene) {


    var geometry = new THREE.SphereGeometry(3, 16, 16);
    var material = new THREE.MeshPhongMaterial({});
    material.map = THREE.ImageUtils.loadTexture('images/venusmapthumb.jpg');
    material.bumpMap = THREE.ImageUtils.loadTexture('images/venusbumpthumb.jpg')
    material.bumpScale = 0.05

    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(4, 0, 0);


    var geometry1 = new THREE.SphereGeometry(2, 32, 32)
    var material1 = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        opacity: 0.8,
        transparent: true,
        depthWrite: false,
    })
    // var cloudMesh = new THREE.Mesh(geometry1, material1)


    var r = 45;
    var theta = 0;
    var dTheta = 2 * Math.PI / 1000;

    scene.add(mesh);
    this.update = function (time) {
        mesh.rotateY(.004)
        theta += dTheta;
        mesh.position.x = r * Math.cos(theta);
        mesh.position.z = r * Math.sin(theta);
    }
}
export default VenusPlanet;


