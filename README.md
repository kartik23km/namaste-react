Namaste react lecture practice repo.

const heading = React.createElement("h1", {}, "hello")

const jsxHeading = <h1>Heading</h1>

const Title = () => {
return <h2>This is title</h2>
}

const HeadingComponent = () => {
return (

        <div><Title /><h1>Heading from component</h1></div>
     )

}

Redux/RTK

- install @reduxjs/toolkit and react-redux
- build store
- connect our app to store
- slice (cart)
- dispatch (action)
- selector
