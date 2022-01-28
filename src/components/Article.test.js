import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';


const fakeData = 
    {
        author: 'James',
        body: 'this is the body',
        headline: 'This is the headline.',
    }


test('renders component without errors', ()=> {
    render(<Article article={fakeData} />);
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={fakeData} />);
    const author = screen.queryByText(/james/i);
    const headline = screen.queryByText(/this is the headline./i);
    expect(author).toBeInTheDocument();
    expect(author).toHaveTextContent(/james/i)
    expect(headline).toBeInTheDocument();
    expect(headline).toHaveTextContent(/this is the headline./i);
});

test('renders "Associated Press" when no author is given', ()=> {
    const noAuth = {
        author: ''
    }
    render(<Article article={noAuth} />);
    const author = screen.queryByText(/associated press/i);
    expect(author).toBeInTheDocument();
    expect(author).toHaveTextContent(/associated press/i);
});

test('executes handleDelete when the delete button is pressed', async ()=> {
    const handleDelete = jest.fn();
    render(<Article article={fakeData} handleDelete={handleDelete} />);
    const delBtn = screen.getByTestId('deleteButton')
    userEvent.click(delBtn);
    expect(handleDelete).toBeCalled();
});

//Task List: 
//1. Complete all above tests. Create test article data when needed.