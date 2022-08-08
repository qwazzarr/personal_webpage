import Gallery from "./gallery"

import "../css/projects.css";
const GalleryPage = () => {


    return(<div className="galleryPage">
        <Gallery/>
        <div className="links">
            <ul className="linksList">
                <li>Github : <a className="nodeco" href= "https://github.com/qwazzarr">https://github.com/qwazzarr</a></li>
                <li>Email: khmaraarsenii@gmail.com</li>
                <li> <a className ="nodeco" href="https://www.linkedin.com/in/arsenii-khmara-685aa11b9/">LinkedIn</a></li>
            </ul>
            <div className="linkArt">contact me</div>
        </div>
        <footer className="footer"></footer>
        </div>)
        
}

export default GalleryPage;