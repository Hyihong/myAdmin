import React from 'react'
import { Layout,Menu,Icon} from 'antd';
const { Item, SubMenu ,ItemGroup } = Menu;
const { Header } = Layout  ;

class App extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
       
    }

    render(){
        return (
               <Header style={{height:'56px'}}>
                   <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['menu1']}
                        style={{ lineHeight: '56px',float:'right' }}
                    >
                        <Item key ='menu1'><Icon type="mail" />菜单一</Item>
                        <SubMenu key ='menu2' title= "菜单二XXXXXXXX" >
                             <Item key="sub1">菜单2-1</Item>
                             <Item key="sub2">菜单2-2</Item>
                        </SubMenu>
                        <Item key ='alt'> <Icon type="arrows-alt"/></Item>
                        <Item key ='menu4'><span className="avatar"><img src='/assets/images/t1.jpg' alt="头像" /></span></Item>
                    </Menu>
               </Header>
        )
    }
}

export default App