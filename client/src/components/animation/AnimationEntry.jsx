import React from 'react'
import reactDOM from 'react-dom'
import {
       Route,
       Link
}from 'react-router-dom'

import BaseFrame from '../shared/BaseFrame.jsx'
import {Layout,Button,Row,Col,Card} from 'antd';
const { Content } = Layout ;
 import AnimationBase from './AnimationBase.jsx'
 import AnimationCase from './AnimationCase.jsx'
 import AAA from './AAA.jsx'

class AnimationEntry extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
       //console.log('组件挂载成功')
    }

    render(){
        return (
            <BaseFrame current='animation' openKeys={['spa']} >
            <Content style={{ padding: '10px 15px' }}>
                <div>
                    <ul>
                        <li><Link to="/spa/animationEntry/animationBase">动画基础</Link></li>
                        <li><Link to="/spa/animationEntry/animationCase">动画案例</Link></li>
                        <li><Link to="/spa/animationEntry/AAA">AAA</Link></li>
                    </ul>
                    <Route path="/spa/animationEntry/animationBase" component={AnimationBase}/>
                    <Route path="/spa/animationEntry/animationCase" component={AnimationCase}/>  
                    <Route path='/spa/animationEntry/AAA' component={AAA}  /> 
                </div>
            </Content>
            </BaseFrame>
                
        )
    }
}

export default AnimationEntry;

