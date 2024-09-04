import React, { useState } from "react";

function List() {
    const [inputVal, setInputVal] = useState("");
    const [addItems, setItems] = useState([]);
    const [isDoneArr, setIsDoneArr] = useState([]);

    const handleItems = () => {
        if(inputVal.trim()){

            setItems(prevItems => [...prevItems, inputVal]);
            setIsDoneArr(prevArr => [...prevArr, false]);
            setInputVal("");
        }
    }

    const handleDelete = (index) => {
        setItems((prevItems) => prevItems.filter((_, i) => i !== index));
        setIsDoneArr(prevArr => prevArr.filter((_, i)=> i!== index));
    }

    const handleDone = (index) => {
        setIsDoneArr(prevArr => prevArr.map((done, i)=>(i===index ? !done : done)));
    }

    const handleChange = (event) => {
        setInputVal(event.target.value);
    }

    const arrayItems = addItems.map((item, index) => (
        <li className="mt-2" key={index}>
            <span className={`flex-1 ${isDoneArr[index] ? 'line-through' : ''}`}>
                {item}
            </span>
            <button className="flex items-center justify-center mx-[63vh] -mt-[3vh] " onClick={() => handleDone(index)}>Done</button>
            <button className="flex items-center justify-center mx-[72vh] -mt-[4vh] " onClick={() => handleDelete(index)}>Delete</button>
        </li>
    ));

    return (
        <>
            <h1 className="flex items-center justify-center mt-[10vh] text-4xl">Todo List</h1>
            <input className="flex items-center justify-center mx-[70vh] mt-4 w-[80vh] h-10 border border-2 border-gray-600 rounded-md" placeholder="Enter the items..." onChange={handleChange} value={inputVal} />
            <button className="flex items-center justify-center mt-[10vh] mx-[140vh] -mt-[6.2vh] h-10 w-16 border border-2 border-gray-600 rounded-md" onClick={handleItems}>Add</button>

            <div>
                <ul className="items-center justify-center mx-[70vh] mt-4">
                    {arrayItems}
                </ul>
            </div>

        </>
    )
}

export default List;