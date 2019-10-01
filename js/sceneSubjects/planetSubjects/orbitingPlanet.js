import * as THREE from 'three';
import { TweenMax, Power2, TimelineLite, TimelineMax, Expo } from "gsap/TweenMax";



function OrbitingPlanet(scene) {

    const radius = .5;
    var geometry = new THREE.SphereGeometry(2, 16, 16);
    var material = new THREE.MeshPhongMaterial({ });
    material.map = THREE.ImageUtils.loadTexture('images/earthmap.jpg');
    material.bumpMap = THREE.ImageUtils.loadTexture('images/earthbump.jpg')
    material.bumpScale = 0.05
    material.specularMap = THREE.ImageUtils.loadTexture('images/earthspec.jpg')
    material.specular = new THREE.Color('grey')

    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(2, 0, 10);


    var geometry1 = new THREE.SphereGeometry(0.51, 32, 32)
    var material1 = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        opacity: 0.8,
        transparent: true,
        depthWrite: false,
    })
    var cloudMesh = new THREE.Mesh(geometry1, material1)


    this.t1 = new TweenMax({paused: false})
    
    scene.add(mesh);
    this.update = function (time) {
        // const scale = Math.sin(time) + 2;
        mesh.rotateY(.004)
        mesh.translateX(.15);
        // mesh.scale.set(scale, scale, scale);
    }
}
export default OrbitingPlanet;


