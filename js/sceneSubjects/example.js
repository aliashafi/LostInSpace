import * as THREE from 'three';
import { planet } from '../../components/planets/planets'

let scene, camera, renderer, starGeo, stars, pointLight;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;
    camera.rotation.x = Math.PI / 2;
    renderer = new THREE.WebGLRenderer()
    renderer.shadowMapEnabled = true;

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);



    starGeo = new THREE.Geometry();
    for (let i = 0; i < 6000; i++) {
        let star = new THREE.Vector3(
            Math.random() * 600 - 300,
            Math.random() * 600 - 300,
            Math.random() * 600 - 300
        );
        star.velocity = 0;
        star.acceleration = 0.02;
        starGeo.vertices.push(star);
    }
    let sprite = new THREE.TextureLoader().load('star.png');
    let starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaaa,
        size: 1.5,
        map: sprite
    })
    stars = new THREE.Points(starGeo, starMaterial);
    scene.add(stars);

    ///LIGHTS

    ///////SPHERE

    var geometry = new THREE.SphereGeometry(6, 10, 10);
    var material = new THREE.MeshPhongMaterial({ color: 0x0011ff });
    var sphere = new THREE.Mesh(geometry, wireframe);
    var wireframe = new THREE.WireframeGeometry(geometry);
    var line = new THREE.LineSegments(wireframe);
    line.material.depthTest = false;
    line.material.opacity = 0.25;
    line.material.transparent = false;

    sphere.position.set(0, 50, 0)
    scene.add(sphere);

    // sphere.castShadow = true;
    // sphere.receiveShadow = false;


    animate()
}


function animate() {
    // starGeo.vertices.forEach(p => {
    //     p.velocity += p.acceleration
    //     p.y -= p.velocity;

    //     if (p.y < -200) {
    //         p.y = 200;
    //         p.velocity = 0;
    //     }
    // });
    // starGeo.verticesNeedUpdate = true; 
    stars.rotation.y += 0.002;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}



init();




// var renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);



// camera.position.z = 35;
// //camera.position.x= 10;

// function render() {
//     requestAnimationFrame(render);

//     line.rotation.x += 0.01;
//     line.rotation.y -= 0.01;
//     //line.rotation.z -= 0.01;
//     sphere.rotation.x += 0.02;
//     sphere.rotation.y += 0.02;
//     renderer.render(scene, camera);
// }
// render();