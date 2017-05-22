import React from 'react'
import reactDOM from 'react-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Item, SubMenu ,ItemGroup } = Menu;
const { Header, Content, Sider } = Layout;

class App extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
       console.log('组件挂载成功')
    }

    render(){
        return (
           <Layout>
                <Header className="header">
                    <div className="logo">
                         {/*<img src="/assets/images/t1.jpg" alt=""/>*/}
                    </div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Item key="1"><Icon type="user"/>用户名</Item>
                        <Item key="2">退出</Item>
                        <Item key="3">导航三</Item>
                        <SubMenu title="导航四">
                            <ItemGroup title="分组">
                                <Item key="1-1">导航一</Item>
                                <Item key="1-2">导航一</Item>
                            </ItemGroup>
                        </SubMenu>
                    </Menu>
                </Header>

                <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%' }}
                    >
                    <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                        <Menu.Item key="1">option1</Menu.Item>
                        <Menu.Item key="2">option2</Menu.Item>
                        <Menu.Item key="3">option3</Menu.Item>
                        <Menu.Item key="4">option4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '12px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                    Content
                    </Content>
                </Layout>
                </Layout>
            </Layout>
        )
    }
}

reactDOM.render(<App/>,document.getElementById('app'));