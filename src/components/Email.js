import React, { useState } from "react"; 
import axios from "axios"; 
 
function EmailForm() { 
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    message: "", 
  }); 
 
  const handleInputChange = (event) => { 
    const { name, value } = event.target; 
    setFormData({ ...formData, [name]: value }); 
  }; 
 
  const handleSubmit = (event) => { 
    event.preventDefault(); 
    axios.post("/api/send-email", formData).then((response) => { 
      console.log("Email sent successfully!"); 
    }); 
  }; 
 
  return ( 
    <form onSubmit={handleSubmit}> 
      <label> 
        Name: 
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleInputChange} 
        /> 
      </label> 
      <label> 
        Email: 
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleInputChange} 
        /> 
      </label> 
      <label> 
        Message: 
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleInputChange} 
        /> 
      </label> 
      <button type="submit">Send Email</button> 
    </form> 
  ); 
} 
 
export default EmailForm;