import { h, Fragment } from "preact";
import "./Store.css";

function outputTime(time) {
    let outputTime = new Date();
    outputTime.setHours(time[0], time[1], time[2]);
    return outputTime.toLocaleTimeString().slice(0, -3);
}

export default function Store({ data }) {
    console.log("hello", data.name);

    return (
        <>
            <div class="store">
                <h2>Hello {data.name}</h2>
                {data.openingTimes.map((d) => (
                    <div>
                        <div>{d.day}</div>
                        <div>Opening Time: {outputTime(d.startTime)}</div>
                        <div>Closing Time: {outputTime(d.endTime)}</div>
                    </div>
                ))}
            </div>
        </>
    );
}
