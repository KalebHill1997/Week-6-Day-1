import React, {Component} from "react"
import './Weekly.css'
import cloudy from './WeatherPhotos/cloudy.png'
import fahrenheit from './WeatherPhotos/fahrenheit.png'
import sun from './WeatherPhotos/sun.png'
import rain from './WeatherPhotos/rain.png'
import thunderstorm from './WeatherPhotos/thunderstorm.png'


function Weekly(props) {
    
    return (
        //when stylistic components are introduced, this is going to be one 
        //large object, not seperate boxes from my understanding
        <div>
            <div class="weekly">
                <div id="sunday">
                    <p>{props.temp1}</p>
                    <h5>Sunday</h5>
                    <img src={props.pic1} alt="supposed to be sun" width="70px" height="70px"/>
                </div>
                <div id="monday">
                    <p>{props.temp2}</p>
                    <h5>Monday</h5>
                    <img src={props.pic2} alt="supposed to be sun" width="70px" height="70px"/>
                </div>
                <div id="tuesday">
                    <p>{props.temp3}</p>
                    <h5>Tuesday</h5>
                    <img src={props.pic3} alt="supposed to be sun" width="70px" height="70px"/>
                </div>
                <div id="wednesday">
                    <p>{props.temp4}</p>
                    <h5>Wednesday</h5>
                    <img src={props.pic4} alt="supposed to be sun" width="70px" height="70px"/>
                </div>
                <div id="thursday">
                    <p>{props.temp5}</p>
                    <h5>Thursday</h5>
                    <img src={props.pic5} alt="supposed to be sun" width="70px" height="70px"/>
                </div>
                <div id="friday">
                    <p>{props.temp6}</p>
                    <h5>Friday</h5>
                    <img src={props.pic6} alt="supposed to be sun" width="70px" height="70px"/>
                </div>
                <div id="saturday">
                    <p>{props.temp7}</p>
                    <h5>Saturday</h5>
                    <img src={props.pic7} alt="supposed to be sun" width="70px" height="70px"/>
                </div>
            </div>
        </div>
    )
}

export default Weekly

{/* <Daily 
                    city={this.state.dailyCityName}
                    date={this.state.dailyDate}
                    forecast={this.state.dailyForecast}
                    temp={this.state.dailyTemp}
                />
                <Weekly 
                    temp1={this.state.weeklyTemp1}
                    temp2={this.state.weeklyTemp2}
                    temp3={this.state.weeklyTemp3}
                    temp4={this.state.weeklyTemp4}
                    temp5={this.state.weeklyTemp5}
                    temp6={this.state.weeklyTemp6}
                    temp7={this.state.weeklyTemp7} */}