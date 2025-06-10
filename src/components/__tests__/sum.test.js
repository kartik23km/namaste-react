import { Sum } from "../sum"


test("Sum function should calculate sum of two numbers", () => {
    const result = Sum(3, 4)

    // assertion
    expect(result).toBe(7)
}) 