import React,{ Component } from 'react';
import 'whatwg-fetch';
class FetchApi extends Component{
    constructor(props){
        super(props);
        // getInitialState:function(){
        //     return {
                    
        //     }
        // }//此方法是设置默认的参数，字段，数组，对象之类的。
        //reducer中的initialState代替了它
        this.state = {
            zimogod:[]
        };

    }
    componentDidMount(){
        this.fetchClick();
    }
    componentWillUnmount(){
        this.fetchClick();
    }
    fetchClick(){
        fetch('./data.json').then((response)=> {
            return response.json();
        }).then((data) => {
            this.setState({
                zimogod:data.zimo
            });
            console.log(data.zimo);
        }).catch((error) => {
            console.log(error);
        });
    }
    render(){
        const zimogod = this.state.zimogod;
        console.log(zimogod);
        const styles = {
          width:300,
          height:'200px',
          backgroundColor:'yellow',
            div:{
              width:'100%',
              backgroundColor:'green'
            }
        };
        return (
            <div style={styles}>
                {
                    zimogod.map((item,index)=>{
                            return (
                                <div key={index}>
                                    { item.header }
                                </div>
                            )
                        }
                    )
                }
            </div>
        )
    }
}
export default FetchApi;