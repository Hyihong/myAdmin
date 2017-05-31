import React from 'react'
import reactDOM from 'react-dom'
import {Layout,Button,Row,Col,Card} from 'antd';
const { Content } = Layout ;

import '../style/cover.less'
import Header from '../components/shared/Header.jsx'
import SilderMenuSpaForAnimation from './SilderMenuSpaForAnimation.jsx'

class App extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
       //console.log('组件挂载成功')
    }

    render(){
        return (
            <Layout style={{width:"100%","minWidth":"1200px",height:'100%',position:'absolute'}} >
                <Header></Header>
                <Layout style={{width:"100%","minWidth":"1200px",height:'100%'}} className="ant-layout-has-sider">
                    <SilderMenuSpaForAnimation current='animation' openKeys={['spa']} ></SilderMenuSpaForAnimation>
                    <Content style={{ padding: '10px 15px' }}>
                          {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

reactDOM.render(<App/>,document.getElementById('app'));

