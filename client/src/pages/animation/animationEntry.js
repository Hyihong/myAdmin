import reactDOM from 'react-dom'
import '../../style/cover.less'
import {
       BrowserRouter,
       Route,
       Link
}from 'react-router-dom'

import AnimationEntry from "../../components/animation/AnimationEntry.jsx"



reactDOM.render((
        <BrowserRouter>
            <AnimationEntry></AnimationEntry>
        </BrowserRouter> 
),document.getElementById('app'));
