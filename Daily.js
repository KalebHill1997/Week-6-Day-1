import React, {Component} from "react"
import './Daily.css'

function Daily(props) {
    let d = new Date()

    let month = d.getMonth() + 1
    let day = d.getDate()
    let year = d.getFullYear()
    let thedate = month + "/" + day +  "/" + year;
    //the above calculates the date and puts it into a string
    let hour = d.getHours()
    let minute = d.getMinutes()
    let thetime;
    let amorpm;
    if(hour + 1 > 12) {
            amorpm = "PM"
            hour = hour - 12;
    } else {
            amorpm = "AM"
    }
    thetime = hour + ":" + minute + " " + amorpm
    // the above displays the time and uses an if statement to calculate am or pm

    return(
        <div class="largecontainer">
            <div class="the2elements">
                <div class="picturething"><img src={props.pic} alt="somthing here" width="200px" height="200px"/></div>
                {/* the above picture prop would not resize in css, had to make a quick fix here */}
                <div class="infotext">
                    <div>City: {props.city}</div>
                    <div>Date: {thedate}</div>
                    <div>Time: {thetime}</div>
                    <div>Forecast: {props.forecast}</div>
                    <div>Temp: {props.temp}</div>
                    {/* The above are the props passed down from the cities*/}
                </div>
            </div>
        </div>
    )
}

export default Daily

{/* <Daily 
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
                    temp7={this.state.weeklyTemp7} */}