import React from 'react'
import { Layout,Card,Row, Col,Icon,Table,Spin,Button} from 'antd';
const { Content,Slider } = Layout ;
const { Column, ColumnGroup } = Table;


import BaseFrame from '../../components/shared/BaseFrame.jsx'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading:false,
            selectedRowKeys:['a0','b0']
        };
    }

    componentWillMount(){
       //console.log('组件挂载成功')
       
    }

    handleRefreshTable = () =>{
        this.setState({
                loading: true
            })
        setTimeout( () => {
            this.setState({
                loading: false,
                selectedRowKeys:[]
            })
        },1000)
    }
  
    render(){
        const that = this;
        const  columns = [
             {
                 title:'姓名',
                 key:"name",
                 dataIndex:'name',
                 render: (text, record, index) => <a href="#">{text}</a>,
                 filters: [
                    { text: '陈家', value: 'chen' },
                    { text: '魏家', value: 'wei' },
                ],
                filteredValue:['chen','wei'],
                sorter: (a, b) => a.name.length - b.name.length,
                //onFilter: (value, record) => record.name.includes(value),

             },{
                 title:'学号',
                 key:"number",
                 dataIndex:'number'
             },{
                 title:'出生日期',
                 key:"birthday",
                 dataIndex:'birthday'
             }
        ]

        const dataSource = []
        for(let i =0;i<100;i++){
            dataSource.push({
                key:'a' + i,
                name:"陈艺虹",
                number:'1007010125'+ i,
                birthday:'1991-07-26'
            })
            dataSource.push({
                key:'b' + i,
                name:"魏百超",
                number:'1007010125'+ i,
                birthday:'1991-07-26'
            })
        }

        const { selectedRowKeys }= this.state

        const rowSelection = {
             type:'checkbox',
             onChange:function( selectedRowKeys ){
                  that.setState( { selectedRowKeys });
             },
             onSelect:function(selectedRowKeys){
                 console.log("用户手动选择/取消选择某列的回调")
             },
             getCheckboxProps: record => ({
                disabled: record.name === '某某某',    // Column configuration not to be checked
             }),
             selectedRowKeys,
             selections:[
                 {
                     key:'choose1',
                     text:'不常用的功能',
                     onSelect:function(){
                         console.log("选中了一个不常用的功能")
                     }
                 }
             ]
        }


        return (
           <BaseFrame current='table' openKeys={['ui']}>
              <Spin spinning={this.state.loading}>
                <Button onClick = {this.handleRefreshTable} >刷新列表</Button>
                <Table columns={columns}
                        dataSource = {dataSource}
                        rowSelection = { rowSelection }
                />   
              </Spin>
          </BaseFrame>
        )
    }
}

export default App;

