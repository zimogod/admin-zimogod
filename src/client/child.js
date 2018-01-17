import React,{ Component } from 'react';
import { connect } from 'react-redux';
class Childs extends Component{
    constructor(){
        super()
    }
    render(){
        const {cartData,addCartData} = this.props;
        const styles = {
            width:'100%',
            btn:{
                width:'160px',
                height:'40px',
                display:'block',
                marginLeft:'15%'
            },
            ulList:{
                width:'80%',
                height:'100px',
                li:{
                    marginTop:'20px',
                    border:'1px solid #ccc',
                    width:'120px',
                    height:'49px',
                    lineHeight:'49px',
                    listStyle:'none',
                    float:'left'
                }
            }
        };
        return (
            <div style={styles}>
                <ul style={styles.ulList}>
                    {
                        cartData.map((item, index) => {
                            return (
                                <li style={styles.ulList.li} key={index}>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
                <button style={styles.btn} onClick={() =>addCartData()}>添加字符串</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    //console.log(state.cartReducer);
    return {
        cartData:state.cartReducer.cartData
    };
}
function mapDispatchToProps(dispatch) {
    //console.log(dispatch);
    return {
        addCartData:()=>dispatch({type:'ADD2'}),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Childs);
