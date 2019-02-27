import React, { Component } from 'react';

class Choose extends Component {
    render() {
        let { chooseData } = this.props;
        console.log(chooseData)
        return (
            <div className="data">
                <p>
                    {chooseData && chooseData.length ? chooseData.map((v, i) => (
                        <span className="citys" key={i}>{v}</span>
                    )) : ''}
                </p>
            </div>
        );
    }
}

export default Choose;