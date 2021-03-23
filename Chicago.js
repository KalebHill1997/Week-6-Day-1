import React, { Suspense } from "react"
import Daily from "./Daily"
import Weekly from "./Weekly"
import cloudy from './WeatherPhotos/cloudy.png'
import fahrenheit from './WeatherPhotos/fahrenheit.png'
import sun from './WeatherPhotos/sun.png'
import rain from './WeatherPhotos/rain.png'
import thunderstorm from './WeatherPhotos/thunderstorm.png'

class Chicago extends React.Component {
    constructor() {
        super()
        this.state = {
            dailyTemp: 45,
            dailyDate: "3/22/2021",
            dailyForecast: "Thunderstorming",
            dailyCityName: "Chicago",
            dailyPic: thunderstorm,
            weeklyTemp1: "63/48",
            weeklyTemp2: "58/51",
            weeklyTemp3: "57/42",
            weeklyTemp4: "46/36",
            weeklyTemp5: "47/37",
            weeklyTemp6: "50/40",
            weeklyTemp7: "50/36",
            weeklyPic1: thunderstorm,
            weeklyPic2: thunderstorm,
            weeklyPic3: cloudy,
            weeklyPic4: rain,
            weeklyPic5: sun,
            weeklyPic6: cloudy,
            weeklyPic7: thunderstorm,
        }
    }

    render(){
        return (
            <div>
                <Daily 
                    city={this.state.dailyCityName}
                    date={this.state.dailyDate}
                    forecast={this.state.dailyForecast}
                    temp={this.state.dailyTemp}
                    pic={this.state.dailyPic}
                />
                <Weekly 
                    temp1={this.state.weeklyTemp1}
                    temp2={this.state.weeklyTemp2}
                    temp3={this.state.weeklyTemp3}
                    temp4={this.state.weeklyTemp4}
                    temp5={this.state.weeklyTemp5}
                    temp6={this.state.weeklyTemp6}
                    temp7={this.state.weeklyTemp7}
                    pic1={this.state.weeklyPic1}
                    pic2={this.state.weeklyPic2}
                    pic3={this.state.weeklyPic3}
                    pic4={this.state.weeklyPic4}
                    pic5={this.state.weeklyPic5}
                    pic6={this.state.weeklyPic6}
                    pic7={this.state.weeklyPic7}
                />
            </div>
        )
    }
}

export default Chicago