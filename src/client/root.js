import React,{ Component } from 'react';
class Root extends Component{
    constructor(props){
        super(props);
    };
    render(){
        let myStyle = {
            width:'100%',
            height:500,
            backgroundColor:'green',
            div:{
                width:'100px',
                height:'60px',
                backgroundColor:'yellow'
            }
        }
        return (
            <div style={myStyle}>
                <div style={myStyle.div}>
                    我是紫漠
                </div>
            </div>
        )
    }
}
export default Root;





// import React,{ Component } from 'react';
// import { connect } from 'react-redux';
// import Child from './child';
// import FetchApi from './fetchJson';
// import 'whatwg-fetch';
// // import store from '../store/index';
// class Root extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             datas:[]
//         };
//         this.getDateList = this.getDateList.bind(this);
//     }
//     componentDidMount(){
//         this.getDateList();
//     }
//     getDateList(){
//         fetch('./data.json').then((response)=> {
//             return response.json();
//             console.log(this);
//         }).then((data) => {
//             this.setState({
//                 datas:data.zimo
//             })
//             console.log(data.zimo);
//         }).catch((error) => {
//             console.log(error);
//         });
//     }
//     render(){
//         const { cartData,addCartData } = this.props;
//         const datas = this.state.datas;
//         const myStyle = {
//             width:'100%',
//             textAlign:'center',
//             dataList:{
//                 width:'500px',
//                 height:'200px',
//                 backgroundColor:'#ccc'
//             },
//             btn:{
//                 width:'160px',
//                 height:'40px',
//                 display:'block',
//                 marginLeft:'15%'
//             },
//             ulList:{
//                 width:'80%',
//                 height:'100px',
//                 backgroundColor:'#fff',
//                 li:{
//                     marginTop:'20px',
//                     border:'1px solid #ccc',
//                     width:'120px',
//                     height:'49px',
//                     lineHeight:'49px',
//                     listStyle:'none',
//                     float:'left'
//                 }
//             }
//         };
//         return (
//             <div style={myStyle}>
//                 <ul style={myStyle.ulList}>
//                     {
//                         cartData.map((item, index) => {
//                             return (
//                                 <li style={myStyle.ulList.li} key={index}>
//                                     {item}
//                                 </li>
//                             )
//                         })
//                     }
//                 </ul>
//                 <button style={myStyle.btn} onClick={() =>addCartData()}>添加数字</button>
//                 <Child />
//                 <ul style={myStyle.dataList}>
//                     {
//                         datas.map((item,index)=>{
//                             return (
//                                     <li key={index}> 
//                                         中文名：{ item.header }
//                                         <br/>
//                                         <span>
//                                            英文名：{ item.names }
//                                         </span>
//                                     </li>
//                             )
//                         }
//                       )
//                     }
//                 </ul>
//                 <FetchApi />
//             </div>
//         )
//     }
// }
// function mapStateToProps(state) {
//     //console.log(state.cartReducer.cartData);
//     //console.log(state.cartReducer);
//     return {
//         cartData:state.cartReducer.cartData
//     };
// }
// function mapDispatchToProps(dispatch) {
//     //console.log(dispatch.data);
//     return {
//         addCartData:()=>dispatch({type:'ADD1'})
//     };
// }

// export default connect(//返回当前组件给store,然后是store的数据更新，
// // 再重新调用render，渲染页面，改变页面已有的数据
//     mapStateToProps,
//     mapDispatchToProps
// )(Root);