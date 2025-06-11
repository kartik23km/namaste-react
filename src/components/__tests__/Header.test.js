import { Provider } from "react-redux"
import Header from "../Header"
import store from "../utils/store"
import { BrowserRouter } from "react-router"

import { render, screen } from "@testing-library/react"

test("should render header component with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
})