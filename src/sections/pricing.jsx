import react from "react";
import { Link } from "react-router-dom";

function Pricing(){
    return(
        <section id="Pricing">
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
   <h1 className="display-4 fw-normal text-body-emphasis">Pricing</h1>
   <p className="fs-5 text-body-secondary">At DataMetrics Solutions, we offer a variety of plans and pricing options to fit your business needs, whether you are a small business or a large corporation. All of our packages are designed to provide maximum value, with flexibility to scale as your needs change.</p>
 </div>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
   <div className="col">
     <div className="card mb-4 rounded-3 shadow-sm">
       <div className="card-header py-3">
         <h4 className="my-0 fw-normal">Basic</h4>
       </div>
       <div className="card-body">
         <h1 className="card-title pricing-card-title">$99<small class="text-body-secondary fw-light">/mo</small></h1>
         <ul className="list-unstyled mt-3 mb-4">
           <li>Basic Descriptive Analysis</li>
           <li>Basic Interactive Dashboards</li>
           <li>Monthly Reports</li>
           <li>Business Hours Technical Support</li>
           <br />
           <br />
           <br />
         </ul>
         <Link to="/register">
          <button type="button" className="w-100 btn btn-lg btn-outline-primary">Get started</button>
         </Link>
       </div>
     </div>
   </div>
   <div className="col">
     <div className="card mb-4 rounded-3 shadow-sm">
       <div className="card-header py-3">
         <h4 className="my-0 fw-normal">Pro</h4>
       </div>
       <div className="card-body">
         <h1 className="card-title pricing-card-title">$299<small class="text-body-secondary fw-light">/mo</small></h1>
         <ul className="list-unstyled mt-3 mb-4">
           <li>Predictive Analytics</li>
           <li>Advanced Interactive Dashboards</li>
           <li>Weekly Reports</li>
           <li>Basic Data Integration</li>
           <li>24/7 Technical Support</li>
           <li>Basic Training</li>
           <br />
         </ul>
         <Link to="/register">
          <button type="button" className="w-100 btn btn-lg btn-outline-primary">Get started</button>
         </Link>
       </div>
     </div>
   </div>
   <div className="col">
     <div className="card mb-4 rounded-3 shadow-sm border-primary">
       <div className="card-header py-3 text-bg-primary border-primary">
         <h4 className="my-0 fw-normal">Enterprise</h4>
       </div>
       <div className="card-body">
         <h1 className="card-title pricing-card-title">$799<small class="text-body-secondary fw-light">/mo</small></h1>
         <ul className="list-unstyled mt-3 mb-4">
           <li>Predictive Analysis and Advanced Diagnostics</li>
           <li>Custom Interactive Dashboards</li>
           <li>Daily Reports</li>
           <li>Real-Time Data Integration</li>
           <li>Business Intelligence Consulting</li>
           <li>Advanced Training</li>
           <li>Priority Technical Support</li>
         </ul>
         <Link to="/register">
          <button type="button" className="w-100 btn btn-lg btn-outline-primary">Get started</button>
         </Link>
       </div>
     </div>
   </div>
 </div>

        </section>
    )
}
export default Pricing;