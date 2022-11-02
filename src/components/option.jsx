import React, { useState } from 'react';

function Option(){
    const [_value, setValue] = useState(0);
    return(
    <>
    <form>
    <label>Level: </label>
    <select onChange={e =>{setValue(e.target.value);}}>
        <option value="0">None</option>
        <option value="1">0</option>
        <option value="2">00</option>
        <option value="3">000</option>
        <option value="4">0000</option>
    </select>
    </form>
    </>
    )
}
export default Option;

