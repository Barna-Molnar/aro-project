import { render, screen } from "@testing-library/react";
import DisplayContent from "./DisplayContent";

it('should render content with title + paragraph', () => {

    render(
        <DisplayContent
            content={[
                {
                    title: 'Test Title',
                    paragraph: 'Lorem ipsum dolor sit amet'
                }
            ]}
        />
    )

    const title = screen.getByRole('heading', { name: 'Test Title' })
    const paragraph = screen.getByText('Lorem ipsum dolor sit amet')

    expect(title).toBeVisible();
    expect(paragraph).toBeVisible();
});

it('should render content without title', () => {

    render(
        <DisplayContent
            content={[
                { paragraph: 'Lorem ipsum dolor sit amet' }
            ]}
        />
    )

    const paragraph = screen.getByText('Lorem ipsum dolor sit amet')

    expect(screen.queryByRole('heading', { name: 'Test Title' })).toBeNull();
    expect(paragraph).toBeVisible();
});