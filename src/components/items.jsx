import React  from "react";

const Item = ({d, key, v})=>  {
    
    
        return(
            <div
                  key = {key}
                  className = "row" style = {{margin : "5px"}} onClick = {()=> v(d)} >
                 <div className = "col-md-12">
                   <div className="card text-left">
                     <img className="card-img-top" src={d.snippet.thumbnails.medium.url} alt=""
                     style = {{height : "200px"}}
                      />
                       <div className="card-body">
                          <h4 className="card-title">{d.snippet.title}</h4>
                          <p className="card-text">{d.snippet.description}</p>
                        </div>
                   </div>
                </div>
            </div>
        )
    
}

export default Item;