import * as THREE from 'three';

function GeneralLights(scene) {

    // const light = new THREE.PointLight("0xff0000", 1);
    // const light2 = new THREE.PointLight("0xff0000", 1);
    // const light3 = new THREE.PointLight("0xff0000", 1);
    // const light4 = new THREE.PointLight("0xff0000", 1);
    // var light = new THREE.PointLight(0xffffff, 1);
    // light2.position.set(-100, 200, 100);
    // light3.position.set(100, 200, 100);
    // light4.position.set(100, -200, 100);
    // light.position.set(0, 0, 0);

    // scene.add(light);
    // scene.add(light2);
    // scene.add(light3);
    // scene.add(light4);

    ///
    THREE.ImageUtils.crossOrigin = '';
    var textureFlare0 = THREE.ImageUtils.loadTexture("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/lensflare/lensflare0.png");
    var flareColor = new THREE.Color(0xffffff);
    flareColor.setHSL(0.55, 0.9, 0.5 + 0.5);
    var lensFlare = new THREE.LensFlare(0,0, flareColor);
    scene.add(lensFlare);
    //

    

    //adding ambient light
    let ambientLight = new THREE.AmbientLight(0x2c3e50);
    scene.add(ambientLight);


    //adding point light
    let pointLight = new THREE.PointLight(0xffffff, 1);
    // scene.add(pointLight);
    this.update = function (time) {

    }
}

export default GeneralLights;