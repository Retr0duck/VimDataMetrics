import react from 'react'
import icon1 from '../assets/SvgAnalitics.svg';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Features({ OnScrollToSection }){
    return(
        <section id="Features">
           <div className="container px-4 py-5" id="featured-3">
    <h2 className="pb-2 border-bottom">Features</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
        <i class="bi bi-clipboard2-data-fill"></i>
        </div>
        <h3 className="fs-2 text-body-emphasis">Predictive Analysis</h3>
        <p>Transform your historical data into accurate forecasts, behaviors and outsions.</p>
        <button className="btn btn-primary" onClick={() => OnScrollToSection('Pricing')}>Call to action</button>
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
        <i class="bi bi-speedometer"></i>        
        </div>
        <h3 className="fs-2 text-body-emphasis">Interactive Dashboards</h3>
        <p>Visualize and understand your data at a glance with our interactive dashboards. Designed to be intuitive and customizable, our dashboards allow you to explore your data in depth.</p>
        <button className="btn btn-primary" onClick={() => OnScrollToSection('Pricing')}>Call to action</button>
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
        <i class="bi bi-flag"></i>
        </div>
        <h3 className="fs-2 text-body-emphasis">Detailed Reports</h3>
        <p>Get detailed and understandable reports that help you make informed decisions. Our reports are designed to provide clear and actionable insights into your data.</p>
        <button className="btn btn-primary" onClick={() => OnScrollToSection('Pricing')}>Call to action</button>
      </div>
    </div>
  </div>
  
           </section>
    )
}
export default Features;