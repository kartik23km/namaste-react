import React from "react"
import ReactDOM from "react-dom/client"

// const heading = React.createElement("h1", {}, "hello")

const jsxHeading = <h1>Heading</h1>

const Title = () => {
    return <h2>This is title</h2>
}

const HeadingComponent = () => {
    return (

        <div><Title /><h1>Heading from component</h1></div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent />)