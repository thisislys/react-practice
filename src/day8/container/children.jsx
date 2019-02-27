import React, { PureComponent } from 'react';

class Children extends PureComponent {
    render() {
        return (
            <div>
                {this.props.data}
            </div>
        );
    }
}

export default Children;