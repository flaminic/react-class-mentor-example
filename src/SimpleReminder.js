
import React, { useState } from "react";


function SimpleReminder() {
    const [reminder, setReminder] = useState("");
  
    function handleChange(event) {
        setReminder(event.target.value);
    }
  
    return (
    
      <form>
        <input
          type="text"
          placeholder="Some reminder"
          value={reminder}
          onChange={handleChange}
        />
        
        <p>Today I need to remember to... {reminder}</p>
      </form>
    );
  }


  export default SimpleReminder