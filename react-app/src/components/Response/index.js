import React from 'react';
import "./Response.css";

function Response({responses}) {
  return (
    <div>
        <h1 className="res_h1">Responses</h1>
      {responses && responses.map(r => 
        
          <div className="response_container" key={r.id}>
              <div className="user_id_res_highlight">GURU Class User: {r.username}<br/>RESPONDED</div>
              {r.response}  
              <div className="separator_container">
              <hr className="rounded"></hr>
              <div className="rounded"></div>
              <hr className="rounded"></hr>
            </div>
          </div>
          
        )}
        
    </div>
  )
}

export default Response;