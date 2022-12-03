import './App.css';
// import ReactDOM from "react-dom/client"
import Hero from './Components/Hero/Hero';
import Join from './Components/Join/Join';
import Plans from './Components/Plans/Plans';
import Programs from './Components/Programs/Programs';
import Reasons from './Components/Reasons/Reasons';
import Testimonials from './Components/Testinomials/Testimonials';
// import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App"> 
        <Hero/> 
         <Programs/>
        <Reasons/>
        <Plans/> 
        <Testimonials/>
        <Join/>

        {/* <Router>
          <Routes>
            <Route path="/" element={<Hero/>}></Route>
            <Route path="/plans" exact element={<Plans/>}>
            </Route>
            </Routes>  
        </Router> */}
         
    </div>
  );
}
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>)

export default App;
