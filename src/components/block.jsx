import React, { useState } from 'react';

function Item(props){
    const [_value, setValue] = useState(props.value);
    const [_preH, setpreH] = useState(props.preHash);
    const [_lastH, setlastH] = useState(props.lastHash);
    const [_times, settime] = useState(props.times);
    return (
      <>
      <div className="block-top"></div>
      <div className="id_block"><div className="text">#{props.id}</div></div> 
    <div className="Block">
    <div className="line">
      <div className="tieude">Pre:</div>
      <div className="noidung"><input type={"text"} value={_preH} readOnly={true}/></div>
    </div>
    <div className="line">
      <div className="tieude">Value:</div>
      <div className="noidung"><input type={"text"} value={_value}  onChange={(e) => { setValue(e.target.value ); }}/></div> 
    </div>
    <div className="line">
      <div className="tieude">Times:</div>
      <div className="noidung"><input type={"text"} value={_times}  readOnly={true} /></div>
    </div>
    <div className="line">
      <div className="tieude">Last:</div>
      <div className="noidung"><input type={"text"} value={_lastH}  readOnly={true} /></div>
    </div>
    </div>
    <div className="block-bottom"></div>
    </>)
  }

  export default Item;