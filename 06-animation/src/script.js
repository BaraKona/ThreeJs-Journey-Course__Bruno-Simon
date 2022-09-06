import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

//Time
// let time = Date.now()

//gsap
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2})

// Clock (another way to make the speed consistent)
const clock = new THREE.Clock()

// Animations
const tick = () => {

    //clock
    const elapsedTime = clock.getElapsedTime()

    // get time
    // Using this method it means regardless of your frame rate, the cube will rotate at the same speed
    // const currentTime = Date.now()
    // const deltaTime = currentTime - time
    // time = currentTime
    // console.log(deltaTime)

    // Update objects
    // mesh.rotation.x += 0.001 * deltaTime
    // mesh.rotation.x = elapsedTime
    // mesh.position.x = Math.cos(elapsedTime)
    // mesh.position.y = Math.sin(elapsedTime)
    //Render
    renderer.render(scene, camera)

    // A function that runs after the next tick So this will loop because after
    // every frame it runs the tick again
    window.requestAnimationFrame(tick)
}
tick()