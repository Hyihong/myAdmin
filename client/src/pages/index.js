import React from 'react'
import reactDOM from 'react-dom'
import { Layout } from 'antd';

import '../style/cover.less'
import Header from '../components/shared/Header.jsx'

class App extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
       console.log('组件挂载成功')
    }

    render(){
        return (
           <Layout style={{"height":'500px',"minWidth":"1200px"}}>
                <Header></Header>
            </Layout>
        )
    }
}

reactDOM.render(<App/>,document.getElementById('app'));

