import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: "UseMemo"
}


const User = (props: { users: string[] }) => {
    console.log("Users");
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const UserMemo = React.memo(User);

export const Examples = () => {
    console.log("React memo")
    const [count, setCounter] = useState(0);
    const [user, setUser] = useState(["den", "Mike", "john"]);
    const newArray = useMemo(() => user.filter(u => u.toLowerCase().indexOf("n") > -1), [user]);

    return <>
        <button onClick={() => setCounter(count + 1)}>+</button>
        <button onClick={()=> setUser([...user, `nike ${new Date().getTime()}`])}>add user</button>
        {count}
        <UserMemo users={newArray}/>
    </>
}

export const ExamplesBook = () => {
    console.log("ExamplesBook")
    const [count, setCounter] = useState(0);
    const [book, setBook] = useState(["React", "CSS", "HTML"]);
    const newArray = useMemo(() => book.filter(b => b.toLowerCase().indexOf("c") > -1), [book]);

    const addBook = useCallback(() =>setBook([...book, `JSc`]),[book])


    return <>
        <button onClick={() => setCounter(count + 1)}>+</button>
        {count}
        <Book books={newArray} addBook={addBook}/>
    </>
}


const BooksSecret = (props: { books: string[], addBook: () => void }) => {
    console.log("BooksSecret");
    return<>
        <button onClick={props.addBook}>add book</button>
        <div>{props.books.map((b, i) => <div key={i}>{b}</div>)}</div>
    </>

}

const Book = React.memo(BooksSecret);