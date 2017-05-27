import React from 'react'
import reactDOM from 'react-dom'
import { Layout} from 'antd';
const { Content } = Layout ;

import '../style/cover.less'
import BaseFrame from '../components/shared/BaseFrame.jsx'

class App extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
       //console.log('组件挂载成功')
    }

    render(){
        return (
            <BaseFrame current='home' openKeys={[]} >
                   主页
            </BaseFrame>   
        )
    }
}

reactDOM.render(<App/>,document.getElementById('app'));

