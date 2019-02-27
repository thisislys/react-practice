import React, { Component } from 'react';
import Choose from './choose';
import City from './city';
import axios from 'axios';
import '../common/style.css';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: {},
            chooseData: ["北京"]
        }
    }

    render() {
        const { city, chooseData } = this.state;
        return (
            <div>
                <Choose chooseData={chooseData} />
                <City city={city} handleClick={this.handleClick} />
            </div>
        );
    }
    componentDidMount() {
        axios('./mock/city.json').then(res => {
            this.setState({
                city: res.data
            })
        })
    }
    handleClick = (data) => {
        this.setState({
            chooseData: Array.from(new Set([...this.state.chooseData, data]))
        }, () => {
            console.log(this.state.chooseData)
        })
    }
}

export default Index;