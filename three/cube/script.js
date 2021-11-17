import * as THREE from "https://cdn.skypack.dev/pin/three@v0.134.0-dfARp6tVCbGvQehLfkdx/mode=imports,min/optimized/three.js";

const main = () => {
  // Create canvas container
  const canvas = document.querySelector("#root");
  const renderer = new THREE.WebGLRenderer({ canvas });

  // Create camera
  const fieldOfView = 75;
  const aspect = 2;
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fieldOfView, aspect, near, far);
  camera.position.z = 2;

  // Create scene
  const scene = new THREE.Scene();

  // Create geometry
  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  const makeInstance = (geometry, color, x) => {
    const material = new THREE.MeshPhongMaterial({ color });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cube.position.x = x;
    return cube;
  };

  // Create cube from geometry and metarial
  const cubes = [
    makeInstance(geometry, 0x44aa88, 0),
    makeInstance(geometry, 0x8844aa, -2),
    makeInstance(geometry, 0xaa8844, 2),
  ];

  // Create light
  const color = 0xffffff;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);

  scene.add(light);

  const rotate = (time) => {
    time *= 0.001;

    // Infinity rotate cubes
    cubes.forEach((cube, ndx) => {
      const speed = 1 + ndx * 0.1;
      const rot = time * speed;
      cube.rotation.x = rot;
      cube.rotation.y = rot;
    });

    renderer.render(scene, camera);

    requestAnimationFrame(rotate);
  };

  requestAnimationFrame(rotate);
};

main();
