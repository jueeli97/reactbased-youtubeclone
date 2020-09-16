import React  from "react";

const Select = ({videoplayer})=>  {
    if(!videoplayer){return null}
    
        return(
           <div className = "row">
             <div className = "col-md-12">
               <iframe width="560" height="315" src= {`https://www.youtube.com/embed/${videoplayer.id.videoId}`} 
               frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
               allowFullScreen></iframe>
               <h4>{videoplayer.snippet.title}</h4>
              </div>
           
            </div> 
        )
    
}

export default Select;