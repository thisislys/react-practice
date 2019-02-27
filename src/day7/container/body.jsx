import React, { Component } from 'react';
import BodyChild from './bodyChild';
class Body extends Component {
    render() {
        // let { data } = this.props;
        return (
            <div>
                {/* <ul>
                    {
                        data && data.map(v => (
                            <li key={v}>{v}</li>
                        ))
                    }
                </ul> */}
                <BodyChild />
            </div>
        );
    }
}

export default Body;