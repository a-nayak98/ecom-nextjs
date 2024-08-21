/* eslint-disable react/react-in-jsx-scope */
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { expect, test, describe } from "@jest/globals"
import Page from "@/app/(pages)/(website)/(home)/page"

describe('testing Home  UI: Unit testing', () => {

    test('testing Home  UI: Unit testing', () => {
        // Arrange
        render(<Page />) // Here Page is a jsx component and we need babel to convert jsx to javascript syntax.

        //Act
        const heading = screen.getByRole("heading", {
            name: "home",
        })
        //Assert
        expect(heading).toBeDefined() 
    })
})