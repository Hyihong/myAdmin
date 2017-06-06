// ***  ***
// ***  file description: 侧边菜单 ***
// ***  ***
import React from 'react'
import { Layout,Menu,Icon,Slider} from 'antd';
const { Item, SubMenu } = Menu;
const { Sider } = Layout

class SilderMenu extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.state = {
            current: this.props.current || "home",
            openKeys: this.props.openKeys || [],
        }
    }

   //只展开当前父级菜单
    onOpenChange =(openKeys)=>{
        //console.log("触发 onOpenChange")
        const state = this.state ;
        const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
        const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));
 
        //console.log(latestOpenKey,latestCloseKey)

        let nextOpenKeys = [];
        if (latestOpenKey) {
        nextOpenKeys = this._getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }
        if (latestCloseKey) {
        nextOpenKeys = this._getAncestorKeys(latestCloseKey);
        }
        this.setState({ openKeys: nextOpenKeys });
    }

    _getAncestorKeys = (key) => {
        const map = {
        sub3: ['sub2'],
        };
        return map[key] || [];
    }

    render(){
        return (
              <div  style={{width:"180px",height:"100%",background:"#404040",flexShrink:'0'}}>
                   <Menu
                        theme="dark"
                        mode="inline"
                        openKeys={this.state.openKeys}
                        defaultSelectedKeys={[ this.state.current ]}
                        style={{}}
                        onOpenChange = { this.onOpenChange }
                    >
                        <Item key="home"><a href="/"><Icon type="home"></Icon>首页</a></Item>
                        <SubMenu key ='ui' title= { <div><Icon type="laptop" /><span>UI</span></div>} >
                             <Item key="button"><a href="/ui/btn">按钮</a></Item>
                             <Item key="icon"><a href="/ui/icon">图标</a></Item>
                             <Item key="timepicker"><a href="/ui/timepicker">时间选择器</a></Item>
                             <Item key="treeSelect"><a href="/ui/treeSelect">树选择</a></Item>
                             <Item key="cascader"><a href="/ui/cascader">联级选择</a></Item>
                             <Item key="table"><a href="/ui/table">表格</a></Item>
                        </SubMenu>
                        <SubMenu key ='spa' title= "路由测试" >
                             <Item key="animation"><a href="/spa/animationEntry">单页面入口</a></Item>
                             <Item key="l2">留空</Item>

                        </SubMenu>
                        <SubMenu key ='m1' title= "留空" >
                             <Item key="l3">留空</Item>
                             <Item key="l4">留空</Item>
                             <Item key="l5">留空</Item>
                             <Item key="l6">留空</Item>
                             <Item key="l7">留空</Item>
                             <Item key="l8">留空</Item>
                        </SubMenu>
                    </Menu>
               </div>
        )
    }
}

export default SilderMenu