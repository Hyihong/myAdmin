

import React from 'react'
import reactDOM from 'react-dom'
import { Layout,TimePicker,Button } from 'antd';
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
        //遍历antd所提供的icon名称
       
        return (
            <BaseFrame current='timepicker' openKeys={['ui']}>
                <TimePicker></TimePicker >
                <Button>timepicker</Button>
            </BaseFrame>
        )
    }
}

reactDOM.render(<App/>,document.getElementById('app'));