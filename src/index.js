import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Proptypes from 'prop-types';
import Header from './Header';
import Content from './Content';


class Index extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Content/>
            </div>
        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
)

serviceWorker.unregister();
