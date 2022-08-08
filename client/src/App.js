import logo from './logo.svg';
import './App.css';

import ProjectsList from './components/projectsLists';
import FirstPar from './components/firstPar';
import Description from './components/description';
import DrawingPage from './components/drawingPage';
import MovingGallery from './components/movingGallery';
import Gallery from './components/gallery';
import "./css/global.css";
import GalleryPage from './components/galleryPage';
function App() {

  return (
    <>
    <FirstPar/>
    <Description/>
    <ProjectsList/>
    <DrawingPage/>
    <GalleryPage/>
    </>
  )
}

export default App;
