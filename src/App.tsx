import Kambaz from './Kambaz'
import Project from './Project'
//import './App.css'
import Labs from './Labs'
import { HashRouter, Route, Routes, Navigate}
  from "react-router-dom";
import store from "./Kambaz/store";
import { Provider } from "react-redux";



function App() {

  return (
    <HashRouter>
      <Provider store={store}>
      <Routes>
          <Route path="/" element={<Navigate to="/Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kambaz/*" element={<Kambaz/>} />
          <Route path="/Project/*" element={<Project />} />
      </Routes>
      </Provider>
    </HashRouter>
  )
}

export default App
