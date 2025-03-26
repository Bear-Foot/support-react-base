import { useEffect, useState } from "react"
import styled from "styled-components"

export const EventReceiver = ({ emitter }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const log = () => {
      console.log('qwewq')
      setOpen(true)
      setTimeout(() => setOpen(false), 5000)
    }
    emitter.on('networkError', log)

    return () => {
      emitter.off('networkError', log)
    }
  }, [])
  
  return open && <Message>Hey error !</Message>
}

const Message = styled.div`
  height: 50px;
  width: 200px;
  background: red;
  display: fixed;
  bottom: 20px;
  right: 0;
`