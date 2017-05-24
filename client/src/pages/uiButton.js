import React from 'react'
import reactDOM from 'react-dom'
import { Layout,Card,Button, Row, Col } from 'antd';
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
        return (
            <Layout style={{width:"100%","minWidth":"1200px",height:'100%',position:'absolute'}} >
                <Header></Header>
                <Layout style={{width:"100%","minWidth":"1200px",height:'100%'}} className="ant-layout-has-sider" >
                    <SilderMenu current='button' openKeys={['ui']}></SilderMenu>
                    <Content style={{ margin: '10px 15px', overflow: 'initial' }}>
                           <Row gutter={16}>
                               <Col span={12}>
                                    <Card>
                                        <Button type="primary">Primary</Button>
                                        <Button>Default</Button>
                                        <Button type="dashed">Dashed</Button>
                                        <Button type="danger">Danger</Button>
                                    </Card>
                                </Col>
                                <Col span={12}>
                                    <Card>
                                        <Button type="primary" shape="circle" icon="search" />
                                        <Button type="primary" icon="search">Search</Button>
                                        <Button shape="circle" icon="search" />
                                        <Button icon="search">Search</Button>
                                        <Button shape="circle" icon="search" />
                                        <Button icon="search">Search</Button>
                                        <Button type="dashed" shape="circle" icon="search" />
                                        <Button type="dashed" icon="search">Search</Button>
                                    </Card>
                                </Col>
                           </Row>
                           <Row gutter={16}>
                               <Col span={12} >
                                    <Card>
                                        <Button type="primary" ghost>Primary</Button>
                                        <Button ghost>Default</Button>
                                        <Button type="dashed" ghost>Dashed</Button>
                                        <Button type="danger" ghost>danger</Button>
                                    </Card>
                                </Col>
                                <Col span={12}>
                                    <Card>
                                      
                                    </Card>
                                </Col>
                           </Row>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

reactDOM.render(<App/>,document.getElementById('app'));

