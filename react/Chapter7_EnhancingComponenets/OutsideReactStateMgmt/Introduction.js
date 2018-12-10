// best to keep state in a separate data from UI

// managing state outside of react can be done in many different ways 
// with backbone models, other mvc library that models staet.
// creating your own system for state 

// MANAGING STATE OUTSIDE OF REACT SIMPLY MEANS NOT USING React State or setState


// rendering a clock -- not wokring code just for example

const startTicking = () =>
    setInterval(
        compose(
            clear,                  // each are individual functions to create a clicking lcock
            getCurrentTime,
            abstractClockTime,
            convertToCivilianTime,
            doubleDigits,
            formatCLock("hh:mm:ss tt")
            display(log)
        ),
        oneSecond()
    )

startTicking()

// instead of displaying the lcock in the console... we can display it in the browser
// using a react component to display the clock tim ein a div:

const AlarmClockDisplay = ({ hours, minutes, seconds, ampm }) =>
    <div className="clock">
        <span>{hours}</span>
        <span>:</span>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
        <span>{ampm}</span>
    </div>


// replace the log method with a render method and send our component
// to be used to render the civilian time

const startTicking = () => //manages state outside of react
    setInterval(
        compose(
            getCurrentTime,
            abstractClockTime,
            convertToCivilianTime,
            doubleDigits,
            render(AlarmClockDisplay) // call to react to render the UI 
        ),
        oneSecond()
    )

startTicking()

// render function must be a HOC
const render = Component => civilianTime =>
    ReactDOM.render(
        <Component {...civilianTime} />,
        document.getElementById('react-container')
    )