import * as THREE from 'three';


function starSubjects(scene) {


    var starsGeometry = new THREE.Geometry();

    for (var i = 0; i < 10000; i++) {

        var star = new THREE.Vector3();
        star.x = THREE.Math.randFloatSpread(2000);
        star.y = THREE.Math.randFloatSpread(2000);
        star.z = THREE.Math.randFloatSpread(2000);

        starsGeometry.vertices.push(star);

    }

    var starsMaterial = new THREE.PointsMaterial({ color: 0x888888 });

    var starField = new THREE.Points(starsGeometry, starsMaterial);
    starField.name = "stars";
    scene.add(starField);
    
    this.update = function (time) {

    //     starGeo.vertices.forEach(p => {
    //     p.velocity += p.acceleration
    //     p.y -= p.velocity;

    //     if (p.y < -200) {
    //         p.y = 200;
    //         p.velocity = 0;
    //     }
    // });
    // starGeo.verticesNeedUpdate = true; 
        // starField.rotation.y += 0.002;
        // const scale = Math.sin(time) + 2;

        // mesh.scale.set(scale, scale, scale);
    }
}
export default starSubjects;