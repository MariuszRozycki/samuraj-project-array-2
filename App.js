const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: 'Arek',
      sex: 'male'
    },
    {
      id: 2,
      age: 39,
      name: 'Pawel',
      sex: 'male'
    },
    {
      id: 3,
      age: 49,
      name: 'Mariusz',
      sex: 'male'
    },
    {
      id: 4,
      age: 36,
      name: 'Stasia',
      sex: 'female'
    },
    {
      id: 5,
      age: 27,
      name: 'Ola',
      sex: 'female'
    },
    {
      id: 6,
      age: 47,
      name: 'Alena',
      sex: 'female'
    }
  ]
}

const Item = ({ user }) => (
  <div>
    <h1>{`User: ${user.name}`}</h1>
    <p>{`Age of ${user.name} is ${user.age}`}</p>
    <p>{`${user.name} sex: ${user.sex}`}</p>
  </div>
)


class ListItems extends React.Component {

  render() {
    let users = this.props.data.users;
    users = users.filter((user) => user.sex === 'female' ? true : null);
    const Items = users.map(user => <Item key={user.id} user={user} />)

    return (
      <React.Fragment>

        {Items}

      </React.Fragment>
    )
  }
}
ReactDOM.render(<ListItems data={data} />, document.getElementById('root'));