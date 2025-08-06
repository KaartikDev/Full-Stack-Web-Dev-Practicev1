function List(){

    const fruits = [{id: 1, name:'kiwi', cal:80},
                    {id: 2, name:'grape', cal:8},
                    {id: 3, name:'apple', cal:100},
                    {id: 4, name:'tomato', cal:50}
                ];

    //alpabetical sort with custom sort function
    fruits.sort((a,b) => a.name.localeCompare(b.name))

    //each li needs to have unique key
    const listItems = fruits.map(fruit => <li key={fruit.id} >{fruit.name} has Calories: <b>{fruit.cal}</b></li>)

    const lowCalFruits = fruits.filter(fruit => fruit.cal<60)
    const lowCalListItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id} >{lowCalFruit.name} has Calories: <b>{lowCalFruit.cal}</b></li>)
    return(
    
    <ol>
        {listItems} {/*show all fruits*/}
        {/*{lowCalListItems} {/*show all fruits*/}


    </ol>);
}


export default List