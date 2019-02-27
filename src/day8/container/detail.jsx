import React, { Component } from 'react';

class Detail extends Component {
    render() {
        const { children } = this.props
        return (
            <div>
                {
                    // children(35)
                }
                {
                    React.Children.map(children, (obj) => {
                        console.log(obj)
                        return obj
                    })
                }
            </div>
        );
    }
}

export default Detail;