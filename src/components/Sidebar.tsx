import styled from "styled-components"
import { Link } from "react-router"
import { Button } from "@mui/material"

import { sidebarWidth } from "../constants/style"
import { useDisconnect } from "../hooks/disconnect"

export const Sidebar = () => {
  const disconnect = useDisconnect()
  
  return (
    <Wrapper>
      <nav>
        <SidebarLink to="/home"><Button>Home</Button></SidebarLink>
        <SidebarLink to="/actors"><Button>Actors</Button></SidebarLink>
        <SidebarLink to="/chrono"><Button>Chrono</Button></SidebarLink>
        <SidebarLink to="/actor-chart"><Button>Chart</Button></SidebarLink>
      </nav>
      <button onClick={disconnect}>Se déconnecter</button>
    </Wrapper>
  )
}

const SidebarLink = styled(Link)`
  display: flex;
  padding: 5px;
  &>*{
    flex: 1;
  }
`

const Wrapper = styled.div`
  background: #abc;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: ${sidebarWidth}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`