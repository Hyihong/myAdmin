import React from 'react'
import {Layout,Button,Row,Col,Card} from 'antd';
const { Content } = Layout ;

class AnimationBase extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
       //console.log('组件挂载成功')
    }

    render(){
        return (
                <div>
                    <h1>基础动画</h1>
                </div>
        )
    }
}

export default AnimationBase ;

