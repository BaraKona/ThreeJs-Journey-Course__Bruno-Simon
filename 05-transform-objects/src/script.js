import './style.css'
import * as THREE from 'three'

// PI used for rotation
const PI = Math.PI
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

//group
const group = new THREE.Group()
group.position.y = 1
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xffffff})
)
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xfff213})
)
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x349213})
)
cube2.position.x = -1.5
cube3.position.x = 1.5
group.add(cube1, cube2, cube3)

/*** Objects*/
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Positioning
mesh.position.set(0, -1, 0)

//axes helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

// scale
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 1.1
mesh.scale.set(2, 0.5, 1.1)

// Rotation using PI
mesh.rotation.reorder('XYZ')
mesh.rotation.y = PI

// Sizes
const sizes = {
    width: 800,
    height: 600
}

/*** Camera*/
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

//look at object
// camera.lookAt(mesh.position)


/*** Renderer*/
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)