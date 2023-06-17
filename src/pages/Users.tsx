import { useQuery, gql } from '@apollo/client';

const EXAMPLE_QUERY = gql`
  query Query {
    users {
      id
      age
      firstName
      lastName
    }
  }
`;

interface User {
  __typename: string;
  id: string;
  age: number;
  firstName: string;
  lastName: string;
}

function Users() {
  const { loading, error, data } = useQuery(EXAMPLE_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  
  return (
    <div>
      {/* {JSON.stringify(data)} */}
      <h2>List of Users:</h2>
      <ul>
        {data.users.map((user: User) => <li><a href={user.id}>{user.firstName}  {user.lastName}</a></li>)}
      </ul>
    </div>
  )
}

export default Users;
