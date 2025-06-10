import Contact from "../Contact"
const { render, screen } = require("@testing-library/react")
import "@testing-library/jest-dom"

describe("Should load contact us component", () => {
    test("Should load contact component", () => {
        render(<Contact />)
        const heading = screen.getByRole("heading")
        expect(heading).toBeInTheDocument()
    })

    test("Should load button in contact component", () => {
        render(<Contact />)
        // const button = screen.getByRole("button")
        const button = screen.getByText("Submit")
        expect(button).toBeInTheDocument()
    })

    // can write it instead of test.
    it("Should load 2 input boxes", () => {
        render(<Contact />)

        const inputBoxes = screen.getAllByRole("textbox")

        // assertion
        expect(inputBoxes.length).toBe(2)

    })
})

