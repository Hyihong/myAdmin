import React from 'react'
import { Layout} from 'antd';
const { Content } = Layout ;

import BaseFrame from '../components/shared/BaseFrame.jsx'

class App extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
       console.log('history测试')
       this.state = {
           locationHref : window.location.href
       }
    }

    componentDidMount(){
           window.addEventListener("popstate", function(){
               alert("触发了popstate事件")
           })
    }

    handleClick = (e) =>{
        let id = e.target.id;
        if (id == "news") {
            history.pushState("首页", "", this.state.locationHref + "#news");
        } else if (id == "music") {
            history.pushState("音乐", "", this.state.locationHref + "#music");
        }
       // console.log( popstate )
       
    }

    render(){
        return (
            <BaseFrame current='home' openKeys={[]} >
                   <span id="news" onClick={this.handleClick}>新闻</span><br/>
                   <span id="music" onClick={this.handleClick} >音乐</span>
                   <style>{`
                        #news {
                            color:red;
                            cursor:pointer
                        }
                        #music {
                            color:green;
                            cursor:pointer
                        }
                  `}</style>
            </BaseFrame>   
            
        )
    }
}

export default App;
