import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar"

const Navbar = () => {
    return(
        <div className="navbar" style={{position: "absolute", width: "100%"}}>
           <Sidebar/>
            <div className="wrapper" style={{zIndex: 5, position: "relative"}}>
              <p>Aidana|
              <span>Frontend</span></p>
              <div className="social">
                <a href="#"><img src="/github.png" alt="github" /></a> 
                <a href="#"><img src="/linkedin.png" alt="linkedin" /></a>
                {/* <a href="#"><img src="/facebook.png" alt="facebook" /></a>
                <a href="#"><img src="/instagram.png" alt="" /></a> */}
              </div>
            </div>
        </div>
    )
}

export default Navbar