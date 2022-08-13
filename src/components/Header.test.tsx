import { render, screen } from "@testing-library/react";
import Header from "./Header";



it('should render a header', () => {

    render(<Header />)

    const buttons= screen.getAllByRole('button')

    expect(buttons.length).toBe(2)
})