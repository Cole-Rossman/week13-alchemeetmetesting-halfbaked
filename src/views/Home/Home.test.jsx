import { screen, render } from '@testing-library/react';
import Home from './Home';


const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should render the user profile', () => {
  render(<Home user={user} />)

  const { name, motto, likes } = user

  const profileName = screen.getByRole('heading', {name})
  const profileMotto = screen.getByText(motto);
  const interestsHeading = screen.getByRole('heading', { name: /interests/i })
  const profileAvatar = screen.getByAltText(/avatar/i)
  const headerImage = screen.getByAltText(/header/i)
  const profileLikes = screen.getByRole('list')

  expect(profileName).toBeInTheDocument()
  expect(profileMotto).toBeInTheDocument()
  expect(interestsHeading).toBeInTheDocument()
  expect(profileAvatar).toBeInTheDocument()
  expect(headerImage).toBeInTheDocument()
  expect(profileLikes).toBeInTheDocument()
  expect(profileLikes.children.length).toEqual(likes.length)
})

test('Should ensure the user object received as a prop in specified order', () => {
  render(<Home user={user} />)
  
  expect(user).toHaveProperty('id')
  expect(user).toHaveProperty('name')
  expect(user).toHaveProperty('avatar')
  expect(user).toHaveProperty('motto')
  expect(user).toHaveProperty('likes')
  expect(user).toHaveProperty('header')
  expect(user).toHaveProperty('color')
})