import React,{ Component } from 'react';
import Root from './root';
class Home extends Component{
    constructor(props){
        super(props);
    };
    render(){
        const styles = {
            width:'100%',
            height:'100%',
            backgroundColor:'#fff'
        }
        return (
            <div style={styles}>
                <Root />
            </div>
        )
    }
}
export default Home;

// import React,{ Component } from 'react';
// import Root from './root';
// class Home extends Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         const styles = {
//           width:'100%',
//           height:'100%'
//         };
//         return (
//             <div style={styles}>
//                 <Root />
//             </div>
//         )
//     }
// }

// export default Home;