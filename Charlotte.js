import React from "react"
import Daily from "./Daily"
import Weekly from "./Weekly"
import cloudy from './WeatherPhotos/cloudy.png'
import fahrenheit from './WeatherPhotos/fahrenheit.png'
import sun from './WeatherPhotos/sun.png'
import rain from './WeatherPhotos/rain.png'
import thunderstorm from './WeatherPhotos/thunderstorm.png'

class Charlotte extends React.Component {
    constructor() {
        super()
        this.state = {
            dailyTemp: 52,
            dailyDate: "32321",
            dailyForecast: "Sunny",
            dailyCityName: "Charlotte",
            dailyPic: sun,
            weeklyTemp1: "68/50",
            weeklyTemp2: "61/53",
            weeklyTemp3: "73/54",
            weeklyTemp4: "78/65",
            weeklyTemp5: "81/52",
            weeklyTemp6: "77/60",
            weeklyTemp7: "75/49",
            weeklyPic1: sun,
            weeklyPic2: rain,
            weeklyPic3: sun,
            weeklyPic4: rain,
            weeklyPic5: sun,
            weeklyPic6: cloudy,
            weeklyPic7: cloudy
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

export default Charlotte