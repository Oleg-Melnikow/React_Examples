import React, {useState} from 'react';

export default {
    title: "React.memo demo"
}

const Count = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const Users = (props: { users: string[] }) => {
    console.log("Users")
    return <div>{props.users.map((u,i) => <div key={i}>{u}</div>)}</div>
}

const User = React.memo(Users);

export const Example = () => {

    const [count, setCounter] = useState(0)
    const [user, setUser] = useState(["den", "nick", "john"])

    return <>
        <button onClick={()=> setCounter(count + 1)}>+</button>
        <button onClick={()=> setUser([...user, `Mike ${new Date().getTime()}`])}>add user</button>
        <Count count={count}/>
        <User users={user}/>
    </>
}