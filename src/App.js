import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LandingPage, Derivative, Integral, Determinant, Inverse } from "./pages";
import { Sidebar, Header } from "./components";
import "./App.css"

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true)
  const handleOpenSidebar = () => setIsSidebarOpen(true)
  const handleCloseSidebar = () => setIsSidebarOpen(false)

  const [headerVisible, setHeaderVisible] = React.useState(false)
  const [headerTitle, setHeaderTitle] = React.useState("")
  const handleHeaderTitle = (title) => {    
    title === "" ? setHeaderVisible(false) : setHeaderVisible(true)
    setHeaderTitle(title)
  }
  
  return (
    <BrowserRouter>
      <div id="app">
        { isSidebarOpen ? <Sidebar closeSidebarCallback={handleCloseSidebar}/> : null}
        <div id="content">
          { headerVisible ? <Header isSidebarOpen={isSidebarOpen} openSidebarCallback={handleOpenSidebar} title={headerTitle}/> : null}
          <Routes>
            <Route exact path="/" element={<LandingPage headerTitleCallback={handleHeaderTitle}/>} />
            <Route path="/calculus/derivative" element={<Derivative headerTitleCallback={handleHeaderTitle}/>} />
            <Route path="/calculus/integral" element={<Integral headerTitleCallback={handleHeaderTitle}/>} />
            <Route path="/linalg/determinant" element={<Determinant headerTitleCallback={handleHeaderTitle}/>} />
            <Route path="/linalg/inverse" element={<Inverse headerTitleCallback={handleHeaderTitle}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;