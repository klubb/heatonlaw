import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./page-styles/faq.css"


const Faq = () => (
  <Layout>
    <SEO title="FAQ" />
    <div className="faq-image">
      <h1 className="faq-header">Frequently Asked Questions</h1>
    </div>
    <div class="row">
  <div class="col">

    <div class="tabs">
      <div class="tab">
        <input type="checkbox" id="chck1"/>
        <label class="tab-label" for="chck1">What types of personal injury cases do you handle?</label>
        <div class="tab-content isactive">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti nam animi ullam nobis quisquam quis tempora voluptatum non asperiores.
        </div>
      </div>
      <div class="tab">
        <input type="checkbox" id="chck2"/>
        <label class="tab-label" for="chck2">What will the legal service cost?</label>
        <div class="tab-content">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam vel praesentium officia, nulla, a accusamus, possimus consequatur voluptas at quod unde doloribus eos laborum. Rem quam expedita blanditiis aliquam.
        </div>
      </div>
      <div class="tab">
        <input type="checkbox" id="chck3"/>
        <label class="tab-label" for="chck3">How will I know which attorney in the group is best for me?</label>
        <div class="tab-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
        </div>
      </div>
      
    </div>
  </div>
</div>
    
    
  </Layout>
)

export default Faq



