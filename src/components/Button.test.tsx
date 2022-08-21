import { render, screen } from "@testing-library/react";
import { ReactComponent as Phone } from '../assets/images/phone.svg';
import Button from "./Button";

it('should render a disabled button', ()=> {

    render(
        <Button
        title="Button"
        icon={<Phone/>}
        border
        disabled
        />
    )

    const btn =  screen.getByText('Button')

    expect(btn).toBeVisible()
    expect(btn).toHaveClass('disabledBorderBtn')
});