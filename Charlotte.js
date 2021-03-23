import React from "react"
import Daily from "./Daily"
import Weekly from "./Weekly"
import cloudy from './WeatherPhotos/cloudy.png'
import fahrenheit from './WeatherPhotos/fahrenheit.png'
import sun from './WeatherPhotos/sun.png'
import rain from './WeatherPhotos/rain.png'
import thunderstorm from './WeatherPhotos/thunderstorm.png'
//these are the pictures and child components used within this class

class Charlotte extends React.Component {
    constructor() {
        super()
        this.state = {
            dailyTemp: 52,
            dailyDate: "32321",
            dailyForecast: "Sunny",
            dailyCityName: "Charlotte",
            dailyPic: sun,
            //these are the values that will be passed into the <Daily /> child
            weeklyTemp1: "68/50",
            weeklyTemp2: "61/53",
            weeklyTemp3: "73/54",
            weeklyTemp4: "78/65",
            weeklyTemp5: "81/52",
            weeklyTemp6: "77/60",
            weeklyTemp7: "75/49",
            //The temperatures are strings for simplicity and quickness
            //the "weeklyTemp# is passed down into the child class <Weekly/>"
            weeklyPic1: sun,
            weeklyPic2: rain,
            weeklyPic3: sun,
            weeklyPic4: rain,
            weeklyPic5: sun,
            weeklyPic6: cloudy,
            weeklyPic7: cloudy
            // these hold the pictures imported from the weather photos file
            //each photo was manually selected (due to having a static website with
            //no API implementation) and stored in state variables. 
            
            //the weeklyPic# is passed down into the child class <Weekly />
        }
        //These are values are held by this.state for the purpose of easily updating the page if 
        //further functionality were to be added
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
                    // each variable name above is just a reference variable
                    //so the child components can interact with the state variables
                />
            </div>
        )
    }
}

export default Charlotte