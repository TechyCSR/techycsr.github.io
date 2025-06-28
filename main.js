// 3D Cube Animation (Three.js)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
const canvasContainer = document.getElementById('cube-canvas');
renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
canvasContainer.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x7fffd4, metalness: 0.7, roughness: 0.2 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(2, 2, 5);
scene.add(light);

camera.position.z = 3;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.013;
  renderer.render(scene, camera);
}
animate();

// GSAP Animations
window.addEventListener('DOMContentLoaded', () => {
  gsap.from('.hero-content', { y: 60, opacity: 0, duration: 1.2, ease: 'power3.out' });
  gsap.from('main section', {
    scrollTrigger: {
      trigger: 'main',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    y: 60,
    opacity: 0,
    duration: 1.1,
    stagger: 0.3,
    ease: 'power2.out',
  });
}); 