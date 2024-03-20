import * as Three from 'three'
import './canvas.css'
import { useEffect, useRef } from 'react'

const Canva3d = () => {

    const mountRef = useRef(null)

    useEffect(() => {

        const currentRef = mountRef.current
        const { clientWidth: width, clientHeight: height } = currentRef

        const scene = new Three.Scene()
        const camera = new Three.PerspectiveCamera(
            75,
            width / height,
            0.01,
            1000
        )

        scene.add(camera)
        camera.position.z = 12
        camera.position.x = 4
        camera.position.y = 3

        const renderer = new Three.WebGLRenderer()
        renderer.setSize(width, height)
        currentRef.appendChild(renderer.domElement)


        const geometry = new Three.BoxGeometry(5,5,5);
        const material = new Three.MeshBasicMaterial({ color: 0xffff00 });
        const square = new Three.Mesh(geometry, material);
        scene.add(square);
        camera.lookAt(square.position)

        renderer.render(scene, camera)

        return () => {
            currentRef.removeChild(renderer.domElement)
        }

    }, [])


    return <div className='canvas' ref={mountRef}></div>

}


export default Canva3d