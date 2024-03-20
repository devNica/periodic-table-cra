import { useCallback, useEffect, useRef } from "react"
import './canvas.css'

function generateRandom(minValue, maxValue){
    let random = Math.random()
    random = random * 70 + 1
    return Math.trunc(random) + maxValue
}

const Canvas = props => {
    const canvasRef = useRef(null)
    const angle = 40
    const particleRadius = 22
    const radio = 3 * particleRadius

    const draw = useCallback((ctx, canvas) => {
        ctx.fillStyle = "#fff"
        ctx.save()
        ctx.beginPath()

        //suponiendo que se tienen 10 elementos
        for (let index = 0; index < 10; index++) {
            //arc position x, position y, radio, start angle, end angle

            const initialX = canvas.width / 2
            const initialY = canvas.height / 2

            const positionX = radio * Math.cos(index * angle * Math.PI / 180) + initialX
            const positionY = radio * Math.sin(index * angle * Math.PI / 180) + initialY

            //const randomX = generateRandom(positionX, initialX)
            //const randomY = generateRandom(positionY, initialY)

            

            if (index < 1) {
                ctx.fillStyle = '#ffc733'
                ctx.arc(initialX, initialY, particleRadius, 0, 2 * Math.PI)
                ctx.lineWidth = 1
                ctx.strokeStyle = '#333'
                ctx.stroke()
            } else if (index > 0) {
                ctx.fillStyle = '#ffc733'
                ctx.arc(positionX, positionY, particleRadius, 0, 2 * Math.PI)
                ctx.lineWidth = 1
                ctx.strokeStyle = '#333'
                ctx.stroke()
                
            }

           ctx.strokeStyle = "#000";
            ctx.fill()
           
            ctx.closePath()
            ctx.restore()
            
        }


    }, [radio])


    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        draw(context, canvas)

    }, [draw])


    return <canvas ref={canvasRef} {...props} className="canvas"/>
}

export default Canvas