import { screen, render } from '@testing-library/react';
import App from './App';

test('Should render the header', async () => {
    render(<App />)

    const profileName = await screen.findByText(/vonta/i);
    const headerImage = screen.getByAltText(/alchemy/i);
    // in arya docs header role = banner
    const backgroundColor = screen.getByRole('banner')
   
    expect(profileName).toBeInTheDocument();
    expect(headerImage).toBeInTheDocument();
    // toHaveStyle checks whether all of the matched elements have expected styles applied
    expect(backgroundColor).toHaveStyle({
        background: 'var(--grey)'
    })
})
