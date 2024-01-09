import NavBar from "../component/navBar";
import ProjectBox from "../component/projectBox";
import Footer from "../component/footer";
import HRCreateProject from "./HRCreateProject";
function SignUp() {
    return (
    <div className="Body">
        <NavBar/>
        <ProjectBox/>
        <HRCreateProject />
        <Footer/>
    </div>
    )
}
export default SignUp;