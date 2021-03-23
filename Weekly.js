import React, {Component} from "react"
import './Weekly.css'



function Weekly(props) {
    
    return (
        <div>
            <div class="weekly">
                <div id="sunday">
                    <p>{props.temp1}</p>
                    {/* this p element displays the temperature passed down from the city selected in the navbar */}
                    <h5>Sunday</h5>
                    {/* this h5 element displays the day of the week inside the weekly elements on the bottom of the webpage*/}
                    <img src={props.pic1} alt="supposed to be prop pic1" width="70px" height="70px"/>
                    {/* could not resize these pictures in css for some reason, had to do it in the html */}
                </div>
                <div id="monday">
                    <p>{props.temp2}</p>
                    <h5>Monday</h5>
                    <img src={props.pic2} alt="supposed to be prop pic 2" width="70px" height="70px"/>
                </div>
                <div id="tuesday">
                    <p>{props.temp3}</p>
                    <h5>Tuesday</h5>
                    <img src={props.pic3} alt="supposed to be prop pic 3" width="70px" height="70px"/>
                </div>
                <div id="wednesday">
                    <p>{props.temp4}</p>
                    <h5>Wednesday</h5>
                    <img src={props.pic4} alt="supposed to be prop pic 4" width="70px" height="70px"/>
                </div>
                <div id="thursday">
                    <p>{props.temp5}</p>
                    <h5>Thursday</h5>
                    <img src={props.pic5} alt="supposed to be prop pic 5" width="70px" height="70px"/>
                </div>
                <div id="friday">
                    <p>{props.temp6}</p>
                    <h5>Friday</h5>
                    <img src={props.pic6} alt="supposed to be prop pic 6" width="70px" height="70px"/>
                </div>
                <div id="saturday">
                    <p>{props.temp7}</p>
                    <h5>Saturday</h5>
                    <img src={props.pic7} alt="supposed to be prop pic 7" width="70px" height="70px"/>
                </div>
            </div>
        </div>
    )
}

export default Weekly