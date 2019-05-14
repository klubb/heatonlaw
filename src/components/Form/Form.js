import React, {Component} from 'react';
import '../Main/main.css'
import axios from 'axios';



 export default class Form extends Component {
     constructor(props) {
         super(props) 
         this.state = {
            name: '',
            message: '',
            email: '',
            number: '',
            sent: false
         }




     }

     handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        
     }

     handleSubmit = () => {
        axios({method:'post',url:'http://localhost:4444/send',data:{name:this.state.name}})
      .then(console.log(this.state.name)).catch((err) => {console.log(err)});
     }

     resetForm = () => {
        this.setState({
            name: '',
            message: '',
            email: '',
            number: '',
            
        })
    }

     

     
    render () {
        // console.log(this.state.name)
        // console.log(this.state.message)
        // console.log(this.state.email)
        return (
            <div className='main-form'>
            <div class="form-container">
             <div className="form-text">
             <h1 className='form-header'>Get in touch today.</h1>
             <h1 className='form-subheader'>Have our trusted and highly regarded global law firm help you today.</h1>
             </div>

             
           </div>
                 <div className="form-info-container">
                 
                 <div className="form-info">

                 <p className='form-p'>If you’d like to get in touch to enlist our services, or have a question about how we can help you, please fill in the form below with your details. We endeavour to respond to all enquiries within twenty-four hours.</p>

                     <div className="testing">
                     
                     
                   <div className='input-container'>
                   
                     <form className='input-form' action="https://formspree.io/kalebamanley@gmail.com" method="POST"  >
                     <input type="hidden" name="_subject" value="New submission!" />
                 <input  onChange={this.handleChange} name='name' value={this.state.name} className='form-input' placeholder='Full Name'type="text" required/>
                 <input onChange={this.handleChange} name='email' value={this.state.email}className='form-input' placeholder='Email'type="text" required/>
                 <input onChange={this.handleChange} name = 'number' value={this.state.number} className='form-input' placeholder='Contact Number'type="text" required/>
                 <select name="Case Category">
                 <option value="">-- Case Category --</option>
                 <option value="Criminal Law">Criminal Law</option>
                 <option value="Litigation">Litigation</option>
                 <option value="Auto Accident">Auto Accident</option>
                 <option value="Personal Injury">Personal Injury</option>
                 <option value="Not Sure">Not Sure</option>
                  </select>
                 <textarea onChange={this.handleChange} name = 'message' value={this.state.message} className='form-textarea' placeholder='How Can We Help?' type="text" required/>
                     
                 <button type='submit' className='submitbtn'>Submit</button>
                     </form>
                 
                   
                   </div>
                    <div className="form-location">
                    <h1 className='location'>Our Main Office</h1>
                    <h1 className='form-p'>132 S. 1200 E. Provo, Utah</h1>
                    <h1 className='form-p'>Give us a call at (801)-709-4117</h1>
                    </div>
                     </div>
                     
                     
                     

                 </div>
                 
                 
                 </div>
           
        </div>
        )
    }
}