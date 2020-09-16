import React , {Component} from "react";
import Items from "../components/items";

class List extends Component {
    //  constructor(props){
    //     super(props);
    //  }

      RenderListItems = ()=>{
            return this.props.video.map(data => <Items d = {data} key = {data.id.videoId} v = {this.props.Vplay} />)
        }


    render() {

        
        return(
            <div className = "container">
            {this.RenderListItems()}
            </div>
        )
    }
}

export default List;