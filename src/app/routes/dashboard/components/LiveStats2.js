import React from 'react'


import SparklineContainer from  '../../../components/graphs/inline/SparklineContainer'
import EasyPieChartContainer from  '../../../components/graphs/inline/EasyPieChartContainer'
import FlotChart from '../../../components/graphs/flot/FlotChart'
import Stats from '../../../components/common/Stats'

import Revenue from './Revenue'



export default class LiveStats extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            liveSwitch: false,
            liveStats: [FakeDataSource.getRandomData()]
        }
    }
    _updateStats = ()=>{
        this.setState({

            liveStats: [FakeDataSource.getRandomData()]
        })
    }
    _toggleSwitch = ()=>{
        this.state.liveSwitch = !this.state.liveSwitch
        if(this.state.liveSwitch){
            this.interval = setInterval(this._updateStats, 1000)
        } else {
            clearInterval(this.interval);

        }
    }
    componentWillUnmount = ()=> {
        clearInterval(this.interval);
    }
    render () {
        return (
            <div className={this.props.className} id={this.props.id}>
                <div className="row no-space">
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                    <span className="demo-liveupdate-1"> <span
                        className="onoffswitch-title">Live switch</span> <span
                        className="onoffswitch">
                            <input type="checkbox" name="start_interval" onClick={this._toggleSwitch}
                                   className="onoffswitch-checkbox"
                                   id="start_interval"/>
                                <label className="onoffswitch-label"
                                       htmlFor="start_interval">
                                <span className="onoffswitch-inner"
                                      data-swchon-text="ON"
                                      data-swchoff-text="OFF"/>
                                    <span className="onoffswitch-switch"/>
                                </label> </span> </span>

                        <FlotChart className="chart-large txt-color-blue"  data={this.state.liveStats}
                                   options={liveStatsChartOptions} />

                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 show-stats">

                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-12 col-lg-12"><span
                                className="text"> Delivery Order to Delivery Instruction <span
                                className="pull-right">65%</span> </span>

                                <div className="progress">
                                    <div className="progress-bar bg-color-blueDark"
                                         style={{width: '65%'}}></div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-12 col-lg-12"><span
                                className="text"> Delivery Instruction to Delivery Receipt <span
                                className="pull-right">34%</span> </span>

                                <div className="progress">
                                    <div className="progress-bar bg-color-blue"
                                         style={{width: '34%' }}></div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-12 col-lg-12"><span
                                className="text"> Perfect DO Rate<span
                                className="pull-right">77%</span> </span>

                                <div className="progress">
                                    <div className="progress-bar bg-color-blue"
                                         style={{width: '77%'}}></div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-12 col-lg-12"><span
                                className="text"> Perfect Delivery Rate <span
                                className="pull-right">99%</span> </span>

                                <div className="progress">
                                    <div className="progress-bar bg-color-greenLight"
                                         style={{width: '99%'}}></div>
                                </div>
                            </div>

                           

                        </div>

                    </div>
                </div>

                <Stats/>

            </div>
        )
    }
}

const FakeDataSource = {
    data: [],
    total: 200,
    getRandomData(){
        if (this.data.length > 0)
            this.data = this.data.slice(1);

        // do a random walk
        while (this.data.length < this.total) {
            var prev = this.data.length > 0 ? this.data[this.data.length - 1] : 50;
            var y = prev + Math.random() * 10 - 5;
            if (y < 0)
                y = 0;
            if (y > 100)
                y = 100;
            this.data.push(y);
        }

        // zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < this.data.length; ++i)
            res.push([i, this.data[i]])
        return res;
    }
};



const liveStatsChartOptions = {
    yaxis: {
        min: 0,
        max: 100
    },
    xaxis: {
        min: 0,
        max: 100
    },
    colors: ['rgb(87, 136, 156)'],
    grid: {
        show: true,
        hoverable: true,
        clickable: true,
        borderWidth: 0,
    },
    series: {
        lines: {
            lineWidth: 1,
            fill: true,
            fillColor: {
                colors: [
                    {
                        opacity: 0.4
                    },
                    {
                        opacity: 0
                    }
                ]
            },
            steps: false

        }
    }
}
