import React from 'react'
import { Card } from 'antd';
import {
       Route,
       Link
      }from 'react-router-dom'

class Branch1 extends React.Component{
    constructor(){
        super()
    }

    componentWillMount(){
       //console.log('组件挂载成功')
    }

    render(){
        return (
                <div>
                    <Card> 卡片1： {this.props.match.params.aaaId} </Card>
                </div>
        )
    }
}

export default Branch1 ;

