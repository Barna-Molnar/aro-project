import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";



it('should render a header', () => {

    const mockedOnScrollToBottom=jest.fn();

    render(<Header onScrollToBottom={mockedOnScrollToBottom}/>)

    const buttons= screen.getAllByRole('button')
    expect(buttons.length).toBe(2)

    const phoneNumberBtn = screen.getByText('0177-1832931')
    userEvent.click(phoneNumberBtn)
    expect(mockedOnScrollToBottom).toHaveBeenCalledTimes(0)

    const requestBtn = screen.getByText('Jetzt anfragen')
    userEvent.click(requestBtn)
    expect(mockedOnScrollToBottom).toHaveBeenCalledTimes(1)
})
