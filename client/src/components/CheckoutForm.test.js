import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
    const { getByLabelText, getByText, findAllByText, getByRole } = render(<CheckoutForm />);
    const firstNameInput = getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last name/i);
    const addressInput = getByLabelText(/address/i);
    const cityInput = getByLabelText(/city/i);
    const stateInput = getByLabelText(/state/i);
    const zipInput = getByLabelText(/zip/i);
    const checkoutButton = getByRole("button");

    fireEvent.change(firstNameInput, {
        target: {
            name: "firstName",
            value: "Simon",
        }
    })
    fireEvent.change(lastNameInput, {
        target: {
            name: "lastName",
            value: "Huang",
        }
    })
    fireEvent.change(addressInput, {
        target: {
            name: "address",
            value: "123 Real St",
        }
    })
    fireEvent.change(cityInput, {
        target: {
            name: "city",
            value: "Brooklyn",
        }
    })
    fireEvent.change(stateInput, {
        target: {
            name: "state",
            value: "New York",
        }
    })
    fireEvent.change(zipInput, {
        target: {
            name: "zip",
            value: "12345",
        }
    })
    
    fireEvent.click(checkoutButton);
    const successName = getByText(/simon huang/i)
    expect(successName).toBeInTheDocument();
});
