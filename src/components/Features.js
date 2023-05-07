import React, { useState } from 'react';  
  
function Features() {  
  const [showContent, setShowContent] = useState(false);  
  
  const handleClick = () => {  
    setShowContent(!showContent);  
  };  
  
  return (  
    <div>  
      <button onClick={handleClick}>Project Planning and Scheduling</button>  
      {showContent && <p>Project planning and scheduling are essential features in the best project management systems. A PM system lets project managers define objectives and scope, identify goals and milestones, assign tasks, budget resources, and build the schedule. A common tool used for project planning is the Gantt chart, and PM software with an interactive Gantt chart view allows users to visualize every step of the project. They can link tasks, identify dependencies, and track progress towards milestones and deadlines, with an easy way to adjust dates that automatically adjust deadlines.
     


</p>}

      <div>  
      <button onClick={handleClick}>Scrum </button>  
     {showContent && <p>We can complete the project in the given deadline.The functions of these scrum are 1.Sprint Automation 2. Sprint backlog 3.Sprint planning meet 4.Sprint Review meeting 5. Sprint execution , by following them we can complete the project</p>}  
     <button variant = 'text'> Select</button> 
    </div>   
    </div> 
    
    
     
  );  
}
export default Features;