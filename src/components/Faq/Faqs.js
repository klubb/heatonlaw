import React, {Component} from 'react';
import '../../pages/page-styles/faq.css'
import axios from 'axios';



 export default class Faqs extends Component {
     constructor(props) {
         super(props) 
         this.state = {
            
         }




         let acc = document.getElementsByClassName("accordion")
         console.log('clicked')
         for (let i = 0; i < acc.length; i++) {
           acc[i].addEventListener("click", function() {
             this.classList.toggle("isactive")
             var panel = this.nextElementSibling
             if (panel.style.maxHeight) {
               panel.style.maxHeight = null
             } else {
               panel.style.maxHeight = panel.scrollHeight + "px"
             }
           })
         }
     }

        

     
    render () {
        
        return (
            <div>
                <div className="faq-image">
      <h1 className="faq-header">Frequently Asked Questions</h1>
    </div>
    
    

        <div className="accordion-container">
        
      <button  className="accordion">Section 1</button>
      <div className="panel">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <button  className="accordion">Section 2</button>
      <div className="panel">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <button   className="accordion">Section 3</button>
      <div className="panel">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
        </div>
            </div>
        )
    }
}