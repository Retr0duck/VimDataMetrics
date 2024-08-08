import react from 'react';
import AboutPhoto from '../assets/Company-612x612.jpg';

function About(){
    return(
        <section id="About">
        <div className="container my-5">
   <div className="row">
     <div className="col-lg-6 mb-4">
       <img src={AboutPhoto} className="img-fluid rounded" alt="About Us" />
     </div>
     <div className="col-lg-6">
       <h2>About us</h2>
       <p className="lead">
       At DataMetrics Solutions, we are dedicated to revolutionizing the way businesses understand and use their data. Founded in 2010, our mission has been clear from the beginning: to help organizations transform their data into a competitive advantage through innovative analytics and visualization solutions.
       </p>
       <h2>Our Mission</h2>
       <p>
       Our mission is to empower businesses with tools and insights that enable them to make informed decisions, optimize operations, and achieve their strategic goals. We believe in the power of data to drive growth and efficiency, and we work tirelessly to make that vision a reality for our clients.
       </p>
     </div>
   </div>
 </div>

 <div className="Footer bg-secondary">
 <footer className="py-3 my-4">
 <ul className="nav justify-content-center border-bottom pb-3 mb-3">
   <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
   <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
   <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
   <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
   <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
 </ul>
 <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
</footer>
 </div>

        </section>
    )
}
export default About;