import Form from './Form';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import emailjs from '@emailjs/browser';

jest.mock('@emailjs/browser')

const mockEmailJs = (emailjs.send as jest.Mock)



it('should render a form properly, and sumbit the correct data', () => {

    mockEmailJs.mockResolvedValue(true)

    const userName = 'Amadeus Mozart';
    const userEmail = 'amadeus@mozart.com';
    const userTel = '0151-111-333-444';
    const userMessage = 'Test message';
    const today = new Date().getDate();
    const tomorrow = new Date().getDate() + 1;
    const tomorrowDateString = new Date();
    tomorrowDateString.setDate(tomorrow)

    render(
        <Form />
    )

    const nameInput = screen.getByLabelText('Name*');
    const emailInput = screen.getByLabelText('E-Mail-Adresse*');
    const telNumberInput = screen.getByLabelText('Telefonnummer*');
    const messageInput = screen.getByLabelText('Ihre Nachricht*');
    const wantedServiveSelector = screen.getByLabelText('Gewünschter Service');
    const wantedCarSelector = screen.getByLabelText('Mit dem folgenden PKW');

    // no prefilled fields
    expect(nameInput).toHaveValue('')
    expect(emailInput).toHaveValue('')
    expect(telNumberInput).toHaveValue('')
    expect(messageInput).toHaveValue('')
    expect(wantedServiveSelector).toHaveValue('')
    expect(wantedCarSelector).toHaveValue('')


    userEvent.type(nameInput, userName)
    userEvent.type(emailInput, userEmail)
    userEvent.type(telNumberInput, userTel)
    userEvent.type(messageInput, userMessage)

    userEvent.selectOptions(wantedServiveSelector, 'Kurier')
    userEvent.selectOptions(wantedCarSelector, 'Audi Q7')

    expect(nameInput).toHaveValue(userName)
    expect(emailInput).toHaveValue(userEmail)
    expect(telNumberInput).toHaveValue(userTel)
    expect(messageInput).toHaveValue(userMessage)
    expect(wantedServiveSelector).toHaveValue('Kurier')
    expect(wantedCarSelector).toHaveValue('Audi Q7')

    const todayDateBtn = screen.getByRole('button', { name: `${today}` })
    const tomorrowDateBtn = screen.getByRole('button', { name: `${tomorrow}` })
    const submitBtn = screen.getByLabelText('submit button')

    expect(submitBtn).toHaveClass('disabledBorderBtn')

    userEvent.click(todayDateBtn)
    userEvent.click(tomorrowDateBtn)

    expect(submitBtn).not.toHaveClass('disabledBorderBtn')

    userEvent.click(submitBtn)

    expect(mockEmailJs).toHaveBeenCalledTimes(1)
    expect(mockEmailJs.mock.calls[0][2]).toEqual(
        expect.objectContaining({
            "choosed_car": "Audi Q7",
            "choosed_service": "Kurier",
            "email": userEmail,
            "endDate": tomorrowDateString.toDateString(), 
            "message": userMessage,
            "name": userName,
            "phone": userTel,
            "startDate": new Date().toDateString()
        })
    );
})

