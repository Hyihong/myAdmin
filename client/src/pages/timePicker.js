

import React from 'react'
import reactDOM from 'react-dom'
import { Layout,TimePicker,Button } from 'antd';
const { Content } = Layout ;

import '../style/cover.less'
import Header from '../components/shared/Header.jsx'
import SilderMenu from '../components/shared/SilderMenu.jsx'

class App extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
       //console.log('组件挂载成功')
    }

    render(){
        //遍历antd所提供的icon名称
       
        return (
            <Layout style={{width:"100%","minWidth":"1200px",height:'100%',position:'absolute'}} >
                <Header></Header>
                <Layout style={{width:"100%","minWidth":"1200px",height:'100%'}} className="ant-layout-has-sider" >
                    <SilderMenu current='timepicker' openKeys={['ui']}></SilderMenu>
                    <Content style={{ margin: '10px 15px', overflow: 'initial' }}>
                          <TimePicker></TimePicker >
                          <Button>timepicker</Button>
                    </Content>
                    
                </Layout>
            </Layout>
        )
    }
}

reactDOM.render(<App/>,document.getElementById('app'));