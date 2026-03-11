import { useState } from "react"
import "../style/body.css"

export default function Body(){
    const[darkMode, SetdarkMode] = useState(false);
    function DarkMode(){
        SetdarkMode(!darkMode);
    }
    return(
        <>
            <div id="container" className={darkMode ? "dark-theme" : ""}>
                <div className="sidebar">
                    <div className="tab-table">
                        <p>Side bar</p>
                        {["Dashboard", "Rooms", "Bookings", "Calendar", "Reports"
                        ].map((tab, index)=>(
                            <div className="tab-box" key={index}>
                                <a className="tab" href={`#${tab}`}>{tab}</a>
                            </div>
                        ))}
                    </div>
                    <div className="buttons">
                        <button onClick={DarkMode}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
                        <div>
                            <p>Settings</p>
                        </div>
                    </div>
                </div>
                <div className="main-body">
                    <div className="body">
                        <div id="Dashboard">
                            <header>Dashboard</header>
                            <p>Available time slots for a rooms will be visible here..</p>
                        </div>
                        <div id="Rooms">
                            <header>Rooms</header>
                            <p>All rooms in card format showing images</p>
                        </div>
                        <div id="Bookings">
                            <header>Bookings</header>
                            <p>Recent bookings will be visible here..</p>
                        </div>
                        <div id="Calendar">
                            <header>Calendar</header>
                            <p>Haven't decided yet..</p>
                        </div>
                        <div id="Reports">
                            <header>Reports</header>
                            <p>Any complaints related to the rooms will be here..</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}