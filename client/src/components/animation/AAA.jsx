import React from 'react'
import { Layout,Button,Row,Col,Card,Tag} from 'antd';
const { Content } = Layout ;
import {
       Route,
       Link
      }from 'react-router-dom'

import Branch1 from "./Branch1.jsx"
import Branch2 from "./Branch2.jsx"

class AAA extends React.Component{
    constructor(){
        super()
    }

    componentWillMount(){
       //console.log('组件挂载成功')
    }

    render(){
        let match = this.props.match;
        //console.log(match.url)
        return (
                <div>
                    <ul>
                        <li><Link to={ `${match.url}/a` } ><Tag color="pink">a</Tag></Link></li>
                        <li><Link to={ `${match.url}/b` } ><Tag color="green" >b</Tag></Link></li>
                        <li><Link to={ `${match.url}/c` } ><Tag color="blue" >c</Tag></Link></li>
                    </ul>
                     <Route path={ `${match.url}/:aaaId` } component={Branch1}/>
                     <Route path={ `${match.url}/:aaaId` } component={Branch2}/>
                </div>
        )
    }
}

export default AAA ;

