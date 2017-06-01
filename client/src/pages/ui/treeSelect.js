import React from 'react'
import reactDOM from 'react-dom'
import { Layout,Card,Row, Col,Icon,TreeSelect } from 'antd';
const TreeNode = TreeSelect.TreeNode;

import '../../style/cover.less'
import BaseFrame from '../../components/shared/BaseFrame.jsx'

class App extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
       //console.log('组件挂载成功')
       this.state ={ 
          value: undefined,
       }
    }
    onChange = (value) => {
      console.log(arguments);
      this.setState({ value });
   }

    render(){
        return (
           <BaseFrame current='treeSelect' openKeys={['ui']}>
                <TreeSelect 
                    value = { this.state.value }
                    style={{ width: 300 }}
                    onChange={this.onChange}
                >
                   <TreeNode value="parent 1" title="parent 1" key="0-1">
                        <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                            <TreeNode value="leaf1" title="my leaf" key="random" />
                            <TreeNode value="leaf2" title="your leaf" key="random1" />
                        </TreeNode>
                        <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
                            <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
                        </TreeNode>
                    </TreeNode>
                </TreeSelect>           
          </BaseFrame>
        )
    }
}

reactDOM.render(<App/>,document.getElementById('app'));

