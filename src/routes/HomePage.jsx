import NavBar from "../component/navBar";
import ProjectBox from "../component/projectBox";
import Footer from "../component/Footer";
function HomePage() {
    return (
    <div className="Body">
        <NavBar/>
        <ProjectBox/>
        <Footer/>
    </div>
    )
}
export default HomePage;