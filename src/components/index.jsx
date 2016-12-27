import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Hoge from 'COMPONENTS/hoge'

export default class Components extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
        <Router history={browserHistory}>
            <Route path='/' component={Hoge} />
        </Router>
        )
    }
}