import React from 'react'
import reactDOM from 'react-dom'

import {
       BrowserRouter as Router,
       Route,
       Link
      }from 'react-router-dom'
import {Layout,Button,Row,Col,Card} from 'antd';
const { Content } = Layout ;


import '../../style/cover.less'
import BaseFrame from '../../components/shared/BaseFrame.jsx'
import AnimationBase from './AnimationBase.jsx'
import AnimationCase from './AnimationCase.jsx'


class App extends React.Component{
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
                        <Router>
                            <div>
                                <ul>
                                    <li><Link to="/animationBase">动画基础</Link></li>
                                    <li><Link to="/animationCase">动画案例</Link></li>
                                </ul>
                                <Route exact path="/animationBase" component={AnimationBase}/>
                                <Route path="/animationCase" component={AnimationCase}/>  
                            </div>
                        </Router> 
                    </Content>
                </BaseFrame>
        )
    }
}

reactDOM.render( <App/>,document.getElementById('app'));

