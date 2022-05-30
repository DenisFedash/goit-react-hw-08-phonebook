import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <p>Welcome to Phonebook</p>
      <p>Please, Enter or Log In</p>
      <button type="button" onClick={() => navigate('login')}>
        Enter
      </button>
      <button type="button" onClick={() => navigate('register')}>
        Log In
      </button>
    </div>
  );
}
