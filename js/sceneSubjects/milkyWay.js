import * as THREE from 'three';

function MilkyWay(scene) {


    var starsGeometry = new THREE.Geometry();

    var light = new THREE.PointLight(0xffffff, 1);
    
    const geometry = new THREE.Geometry()
    const galaxySize = 600
    var norm = 0;

    let rings = [2,3,5,7,10]
    // Generate particles for spiral galaxy:
    for (let r=0; r < 5; r ++){
        for (let i = 0; i < 10000; i++) {
            norm = i / 10000;
            var thetaVariation = THREE.Math.randFloatSpread(0.5)
            var theta = norm * Math.PI * rings[r] + thetaVariation;
            var phi = THREE.Math.randFloatSpread(0.3)
            const distance = norm * galaxySize;

            // Here I need generate spiral arms instead of sphere.
            geometry.vertices.push(new THREE.Vector3(
                distance * Math.sin(theta) * Math.cos(phi),
                distance * Math.sin(theta) * Math.sin(phi),
                distance * Math.cos(theta)
            ))
            
        }

    }

    

    // light.add(new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0xffffff })))

    const spiralGalaxy = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0xffffff }))
    const spiralGalaxy2 = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0xaeeb34 }))
    const spiralGalaxy3 = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0x9934eb }))
    const spiralGalaxy4 = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0x9934eb }))
    const spiralGalaxy5 = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0xffffff }))
    const spiralGalaxy6 = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0xaeeb34 }))
    const spiralGalaxy7 = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0x9934eb }))
    const spiralGalaxy8 = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0x9934eb }))
    spiralGalaxy.position.set(110,100,520)
    spiralGalaxy2.position.set(120,100,530)
    spiralGalaxy3.position.set(125,100,540)
    spiralGalaxy4.position.set(130,100,550)
    spiralGalaxy5.position.set(110, 100, 520)
    spiralGalaxy6.position.set(120, 100, 530)
    spiralGalaxy7.position.set(125, 100, 540)
    spiralGalaxy8.position.set(130, 100, 550)
    scene.add(spiralGalaxy)
    scene.add(spiralGalaxy2)
    scene.add(spiralGalaxy3)
    scene.add(spiralGalaxy4)
    scene.add(spiralGalaxy5)
    scene.add(spiralGalaxy6)
    scene.add(spiralGalaxy7)
    scene.add(spiralGalaxy8)
    
    this.update = function (time) {
        spiralGalaxy.rotation.y += 0.001;
        spiralGalaxy2.rotation.y += 0.001;
        spiralGalaxy3.rotation.y += 0.001;
        spiralGalaxy4.rotation.y += 0.001;
    }
}
export default MilkyWay;