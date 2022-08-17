import { useEffect, useState } from "react";
import Card from "./Card";
import "./App.css";

function App() {
    const [items, setItems] = useState([]);
    const [inputList, setInputList] = useState("");
    useEffect(() => {
        getData();
    }, []);

    //getting data from api
    const getData = async () => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts`
        );
        const data = await response.json();
        console.log(data);
        setItems((oldItems) => [...oldItems, ...data]);
        console.log(items);
    };
    const itemEvent = (e) => {
        setInputList(e.target.value);
    };
    const filterItem = async () => {
        if (inputList === "") return;
        // await getData();
        const data = items.filter((val) => {
            if (val.title.includes(inputList)) return val;
        });
        setItems(data);

        //to empty the input field
        setInputList("");
    };
    return (
        <div className="App">
            <div className="container">
                <div className="title">
                    {/* serach box here */}
                    <input
                        type="text"
                        placeholder="Add an Item.."
                        value={inputList}
                        onChange={itemEvent}
                    />
                    <button className="btn" onClick={filterItem}>
                        Search
                    </button>
                </div>
                <div className="main">
                    {items.map((item, index) => {
                        return (
                            <Card
                                item={item}
                                id={item.id}
                                key={index}
                                text={inputList}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
