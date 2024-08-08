// Suggested code may be subject to a license. Learn more: ~LicenseLog:1652629001.
import react from 'react';
import StartImage from '../assets/StartImage-612x612.jpg';
import { Link } from 'react-router-dom'

function Start(){
    return (
        <section id="Home">
        <div className="container col-xxl-8 px-4 py-5">
 <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
   <div className="col-10 col-sm-8 col-lg-6">
     <img src={StartImage} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
   </div>
   <div className="col-lg-6">
     <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Vim DataMetrics Solutions</h1>
     <p className="lead"> The best side to view your metrics, the most popúlar site in the world of metrics is DataMetrics Solutions, our team can do everthing you need because we are the best</p>
     <div className="d-grid gap-2 d-md-flex justify-content-md-start">
       <Link className="btn btn-primary btn-lg px-4 me-md-2" to="/register">¡Join Now!</Link>
     </div>
   </div>
 </div>
</div>
</section>
    )
}
export default Start;