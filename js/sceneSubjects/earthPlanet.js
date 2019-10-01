import * as THREE from 'three';
import { TweenMax, Power2, TimelineLite, TimelineMax, Expo } from "gsap/TweenMax";



function EarthSubject(scene) {

    var light = new THREE.PointLight(0xffffff, 1);
    // const mesh = new THREE.Mesh(new THREE.IcosahedronBufferGeometry(radius, 2), new THREE.MeshStandardMaterial({ flatShading: true }));
    let geometry = new THREE.SphereGeometry(1, 16, 16);
    // let material = new THREE.MeshPhongMaterial({ color: "0xffffff" });
    let material = new THREE.MeshBasicMaterial({ color: 0xffffff, blending: THREE.AdditiveBlending, transparent: false });

    
    let mesh = new THREE.Mesh(geometry, material);
    
    
    material.map = THREE.ImageUtils.loadTexture('images/sunmap.jpg')
    //glow mesh
    
    
    light.add(mesh);
    scene.add(light)
    mesh.position.set(2, 0, 0);
    scene.add(mesh);

    this.update = function (time) {
      
        // mesh.scale.set(scale, scale, scale);
    }
}
export default EarthSubject;