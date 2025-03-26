import { useEffect, useRef, useState } from "react"

export const Chrono = () => {
  const [time, setTime] = useState(0)
  const intervalRef = useRef()
  const canvasRef = useRef()

  const startTimer = () => {
    clearInterval(intervalRef.current)

    const tempStart = new Date().getTime()
    const intervalId = setInterval(() => {
      setTime(new Date().getTime() - tempStart)
    }, 50)
    intervalRef.current = intervalId
  }

  const stopInterval = () => {
    clearInterval(intervalRef.current)
  }
  useEffect(() => {
    // startTimer()

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])
  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d')
    ctx.moveTo(0, 0)
    ctx.lineTo(200, 100)
    ctx.stroke()
  }, [])
  
  return <div>
    Time: {time}
    <div>
      <button onClick={startTimer}>restart</button>
      <button title="qweqweqw" onClick={stopInterval}>stop</button>
      <canvas 
        ref={canvasRef}
        style={{width: 100, height: 100, background: 'teal' }}
      ></canvas>
    </div>
  </div>
}
