import * as THREE from 'three';

function LightShader(oclscene) {

    let vlight = new THREE.Mesh(
        new THREE.IcosahedronGeometry(50, 3),
        new THREE.MeshBasicMaterial({
            color: 0xffffff
        })
    );
    vlight.position.y = 0;
    oclscene.add(vlight);

    

}

export default LightShader;