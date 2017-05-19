import React from 'react'
import reactDOM from 'react-dom'

class App extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
        const o = {a:1};
        console.log('测试ES7语法：成功则输出')
        console.log({...o})
    }
    render(){
        return (<div>该条数据来自客户端渲染</div>)
    }
}

reactDOM.render(<App/>,document.getElementById('app'));