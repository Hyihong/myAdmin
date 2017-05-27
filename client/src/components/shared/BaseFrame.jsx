// ***  ***
// ***  file description: 导航栏与侧边栏的集合 ***
// ***  ***
import React from 'react'
import { Layout} from 'antd';
const { Content } = Layout ;

import Header from './Header.jsx'
import SilderMenu from './SilderMenu.jsx'

class BaseFrame extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
       
    }

    render(){
        return (
            <Layout style={{width:"100%","minWidth":"1200px",height:'100%',position:'absolute'}} >
                <Header></Header>
                <Layout style={{width:"100%","minWidth":"1200px",height:'100%'}} className="ant-layout-has-sider">
                    <SilderMenu current= {this.props.current}  openKeys= {this.props.openKeys}></SilderMenu>
                    <Content style={{ padding: '10px 15px' }}>
                          {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default BaseFrame