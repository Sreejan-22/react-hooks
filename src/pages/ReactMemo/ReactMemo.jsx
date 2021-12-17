import { useState, memo } from "react";

// Read about React.memo() here: https://dmitripavlutin.com/use-react-memo-wisely/
// This example is taken from here: https://www.robinwieruch.de/react-memo/

const ListItem = memo(({ item }) => {
  console.log("Render: ListItem");
  return <li>{item.name}</li>;
});

const List = memo(({ list }) => {
  console.log("Render: List");
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
});

const ReactMemo = () => {
  console.log("Render: App");
  const [users, setUsers] = useState([
    { id: "a", name: "Robin" },
    { id: "b", name: "Dennis" },
  ]);
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleAddUser = () => {
    setUsers(
      users.concat({
        id: String.fromCharCode(users[users.length - 1].id.charCodeAt(0) + 1),
        name: text,
      })
    );
  };

  return (
    <div style={{ textAlign: "initial" }}>
      <input type="text" value={text} onChange={handleText} />
      &nbsp;&nbsp;
      <button type="button" onClick={handleAddUser}>
        Add User
      </button>
      <br />
      <List list={users} />
    </div>
  );
};

export default ReactMemo;
