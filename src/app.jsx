import React , {Component} from "react";
import Search from "./components/search";
import List from "./components/list";
import axios from "axios";
import Select from "./components/selected";
class App extends Component {
     constructor(props){
         super(props);
         this.state ={
             searchData : "",
             videodata : [],
             selectedvideo : ""
         }

       };

       componentDidMount(){
           this.FetchInputData("nature");
       }
     
    FetchInputData = async (data)=>{
        console.log(data);
        this.setState({searchData:data});
          let response = await axios.get(`https://www.googleapis.com/youtube/v3/search`,{
            params : {
                part : "snippet",
                maxResults : 10,
                q : data,
                key : "***************************"
            }
           
          });
         this.setState({videodata :response.data.items});
         this.setState({selectedvideo : response.data.items[0]});
    };

    selectedVideoListItem = (item)=>{
         console.log(item);
         this.setState({selectedvideo : item});
    }
    
    render() {
        return(
            <div className = "container">
              <div className = "row">
                  <div className = "col-md-8">
                     <Search Idata = {this.FetchInputData} />
                     {/* {this.state.searchData} */}
                  </div>
               </div>
               
               <div className = "row">
                  <div className = "col-md-7">
                     <Select videoplayer = {this.state.selectedvideo} />
                  </div>
                  <div className = "col-md-5">
                     <List video = {this.state.videodata} Vplay = {this.selectedVideoListItem} />
                  </div>
               </div>
            
            </div>
        )
    }
}

export default App;
