import * as THREE from 'three';

var geometry = new THREE.SphereGeometry(6, 10, 10);
var material = new THREE.MeshNormalMaterial({ color: 0x0011ff });
export const planet = new THREE.Mesh(geometry, wireframe);
var wireframe = new THREE.WireframeGeometry(geometry);
var line = new THREE.LineSegments(wireframe);
line.material.depthTest = false;
//line.material.opacity = 0.25;
line.material.transparent = false;

line.position.set(0, 50, 0)

