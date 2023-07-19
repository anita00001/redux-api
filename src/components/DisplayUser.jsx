import { useSelector } from 'react-redux';

const DisplayUser = () => {
  const userList = useSelector((state) => state.users);

  userList.map((person) => (person.isLoading === true) ? <p>Loading...</p> : null);

  userList.map((person) => (person.error === true) ? <p>Error...</p> : null);

  return (
    <div>
      {userList.map((person) => (
        <ul
          key={person.id}
        >
          <li>First Name:{'  '}{person.name.split(' ').slice(0, 1)}</li>
          <li>Last Name:{'  '}{person.name.split(' ').slice(1)}</li>
        </ul>
      ))}
    </div>
  );
};

export default DisplayUser;