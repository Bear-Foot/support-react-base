import styled from "styled-components"

import { sidebarWidth } from "../constants/style"

import { Sidebar } from "./Sidebar"

export const Layout = ({ children }) => (
  <div>
    <Sidebar />
    <Content>
      {children}
    </Content>
  </div>
)

const Content = styled.div`
  padding-left: ${sidebarWidth}px;
`