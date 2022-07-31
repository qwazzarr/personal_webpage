import logo from './logo.svg';
import './App.css';
import ProjectsList from './components/projectsLists';
import FirstPar from './components/firstPar';
import Description from './components/description';
import DrawingPage from './components/drawingPage';

function App() {
  return (
    <>
    <FirstPar/>
    <Description/>
    <ProjectsList/>
    <DrawingPage/>
    </>
  );
}

export default App;
