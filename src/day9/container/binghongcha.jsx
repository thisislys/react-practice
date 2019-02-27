import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
class Binghongcha extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                冰红茶
            </div>
        );
    }
}

export default withRouter(Binghongcha);