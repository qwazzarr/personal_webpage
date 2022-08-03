import logo from './logo.svg';
import './App.css';
import ProjectsList from './components/projectsLists';
import FirstPar from './components/firstPar';
import Description from './components/description';
import DrawingPage from './components/drawingPage';
import MovingGallery from './components/movingGallery';
import Gallery from './components/gallery';
import "./css/global.css";
function App() {
  return (
    <>
    <FirstPar/>
    <Description/>
    <ProjectsList/>
    <DrawingPage/>
    <Gallery/>
    </>
  );
}

export default App;
