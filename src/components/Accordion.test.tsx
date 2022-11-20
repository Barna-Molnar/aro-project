import Accordion from './Accordion';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const testData = {
    title: "Test Title",
    paragraph: "Do we see this content ??"
}

it('should render an accordion properly', async() => {

    render( <Accordion contents={[testData]} />)

    const expandIcon = screen.getByLabelText(/expand icon/i)
    
    screen.getByText('Test Title')
    expect(screen.queryByText('Do we see this content ??')).not.toBeVisible()

    userEvent.click(expandIcon)
    expect(screen.queryByText('Do we see this content ??')).toBeVisible()

    //Close accordion again
    userEvent.click(expandIcon)
    await waitFor(()=>  expect(screen.queryByText('Do we see this content ??')).not.toBeVisible())


})