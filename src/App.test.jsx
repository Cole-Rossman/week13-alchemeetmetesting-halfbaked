import { screen, render } from '@testing-library/react';
import App from './App';

test('Should render the header', async () => {
    render(<App />)

    const profileName = await screen.findByText(/vonta/i);
    const headerImage = screen.getByAltText(/alchemy/i);
   
    expect(profileName).toBeInTheDocument();
    expect(headerImage).toBeInTheDocument();
})
