import react from 'react';

function Faqs(){
    return(
        <section id="Faqs">
        <div className="container my-5">
   <h2 className="mb-4">Frequently asked question</h2>
   <div className="accordion" id="faqAccordion">
     <div className="accordion-item">
       <h2 className="accordion-header" id="headingOne">
         <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         ¿What type of companies can benefit from your services?
         </button>
       </h2>
       <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
         <div className="accordion-body">
         We work with companies of all sizes and sectors, from small startups to large corporations.
         </div>
       </div>
     </div>
     <div className="accordion-item">
       <h2 className="accordion-header" id="headingTwo">
         <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
           ¿How do you protect data privacy?
         </button>
       </h2>
       <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
         <div className="accordion-body">
         We implement strict security measures and comply with all data privacy regulations to ensure that your information is protected.
         </div>
       </div>
     </div>
     <div className="accordion-item">
       <h2 className="accordion-header" id="headingThree">
         <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
           ¿How long does it take to see results?
         </button>
       </h2>
       <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
         <div className="accordion-body">
         Depending on the project, our clients typically see results in just a few months after implementation.
         </div>
       </div>
     </div>
   </div>
 </div>
        </section>
    )
}
export default Faqs;