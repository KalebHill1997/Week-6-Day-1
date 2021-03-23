import React from "react"
import Daily from "./Daily"
import Weekly from "./Weekly"
import cloudy from './WeatherPhotos/cloudy.png'
import fahrenheit from './WeatherPhotos/fahrenheit.png'
import sun from './WeatherPhotos/sun.png'
import rain from './WeatherPhotos/rain.png'
import thunderstorm from './WeatherPhotos/thunderstorm.png'

class Cary extends React.Component {
    constructor() {
        super()
        this.state = {
            dailyTemp: 58,
            dailyDate: "3/22/2021",
            dailyForecast: "Raining",
            dailyCityName: "Cary",
            dailyPic: rain,
            weeklyTemp1: "65/50",
            weeklyTemp2: "60/52",
            weeklyTemp3: "71/52",
            weeklyTemp4: "78/64",
            weeklyTemp5: "82/54",
            weeklyTemp6: "78/59",
            weeklyTemp7: "76/48",
            weeklyPic1: sun,
            weeklyPic2: cloudy,
            weeklyPic3: thunderstorm,
            weeklyPic4: rain,
            weeklyPic5: rain,
            weeklyPic6: sun,
            weeklyPic7: sun,
        }
    }
    render() {
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

export default Cary