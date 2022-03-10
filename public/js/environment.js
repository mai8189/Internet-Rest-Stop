let floorMesh;
let wallMesh;

function createEnvironment(scene) {
  console.log("Adding environment");

  // let texture = new THREE.TextureLoader().load("../assets/texture.png");
  // let myGeometry = new THREE.SphereGeometry(3, 12, 12);
  // let myMaterial = new THREE.MeshBasicMaterial({ map: texture });
  // myMesh = new THREE.Mesh(myGeometry, myMaterial);
  // myMesh.position.set(5, 2, 5);
  // scene.add(myMesh);

//making the floor of the location
//source of texture is from https://opengameart.org/content/handpainted-stone-floor-texture. art credit to PamNawi
let texture = new THREE.TextureLoader().load("../assets/StoneFloorTexture.png");
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(20, 20);
let radiusTop = 15;
let radiusBottom = 15;
let height = 8;
let radialSegments = 12;
let floorGeometry = new THREE.CylinderBufferGeometry(radiusTop, radiusBottom, height, radialSegments);
let floorMaterial = new THREE.MeshBasicMaterial({ map: texture });
floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
floorMesh.position.set(0, -4, 0);
scene.add(floorMesh);

//create the walls of the location
// var extrudeSettings = {
//   amount : 2,
//   steps : 1,
//   bevelEnabled: false,
//   curveSegments: 8
// };

// var arcShape = new THREE.Shape();
// arcShape.absarc(0, 0, 1, 0, Math.PI * 2, 0, false);

// var holePath = new THREE.Path();
// holePath.absarc(0, 0, 0.8, 0, Math.PI * 2, true);
// arcShape.holes.push(holePath);

// var wallGeometry = new THREE.ExtrudeGeometry(arcShape, extrudeSettings);
// wallMesh = new THREE.Mesh(wallGeometry, floorMaterial);
// scene.add(wallMesh);

const radius = 20;  // ui: radius
const tubeRadius = 5;  // ui: tubeRadius
const wallRadialSegments = 8;  // ui: radialSegments
const tubularSegments = 24;  // ui: tubularSegments
const WallGeometry = new THREE.TorusGeometry(
    radius, tubeRadius,
    wallRadialSegments, tubularSegments);
wallMesh = new THREE.Mesh(WallGeometry, floorMaterial);

wallMesh.rotateX(30);
// object.rotateY(angle);
// object.rotateZ(angle);

scene.add(wallMesh);
}




function updateEnvironment(scene) {
  //myMesh.position.x += 0.01;
}