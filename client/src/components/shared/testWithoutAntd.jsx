// ***  ***
// ***  file description: 不引用antd ***
// ***  ***
import React from 'react'
import { Layout} from 'antd';

class Test extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
       
    }


    render(){
        return (
               <div >
                   <Layout>我有引用Antd</Layout> 
               </div>
        )
    }
}

export default Test