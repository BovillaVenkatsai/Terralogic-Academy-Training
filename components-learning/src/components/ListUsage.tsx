function ItemList(){
    const items=[
        {id:1,name:'Terra'},
        {id:2,name:'logic'},
        {id:3,name:'Academy'},
    ];
    return(
        <ul>
            {items.map(item=>(
                <li key={item.id}>
                    {item.id}
                    {item.name}
                </li>
            ))}
        </ul>
    );
}
export default ItemList