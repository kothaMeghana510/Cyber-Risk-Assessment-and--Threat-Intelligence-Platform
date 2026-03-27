import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages 
import Scan from "./pages/scan";
import Dashboard from "./pages/Dashboard";
import ScanHistory from "./pages/scanHistory";
import PageNotFound from "./pages/pageNotFound";

// Context API to pass data easily among different components
import { ScanProvider } from "./contexts/scanContext";

function App() {
  return(
      <ScanProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element= {<Scan />} />
            <Route path ='/dashboard' element = {<Dashboard />} />
            <Route path ='/scanHistory' element = {<ScanHistory/>} />
            <Route path='*' element = {<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </ScanProvider>
  )
}

export default App