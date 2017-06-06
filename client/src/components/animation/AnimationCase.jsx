import React from 'react'
import {Layout,Button,Row,Col,Card} from 'antd';
const { Content } = Layout ;

class AnimationCase extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
       //console.log('组件挂载成功')
    }

    render(){
        return (
                <div>
                    <h1>动画案例</h1>
                </div>
        )
    }
}

export default AnimationCase ;

