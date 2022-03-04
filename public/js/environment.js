let floorMesh;

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
let radiusTop = 15;
let radiusBottom = 15;
let height = 8;
let radialSegments = 12;
let floorGeometry = new THREE.CylinderBufferGeometry(radiusTop, radiusBottom, height, radialSegments);
let floorMaterial = new THREE.MeshBasicMaterial({ map: texture });
floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
floorMesh.position.set(0, -4, 0);
scene.add(floorMesh);
  
}


function updateEnvironment(scene) {
  //myMesh.position.x += 0.01;
}