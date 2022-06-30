import React,{ useEffect, useState } from 'react';

const App2 = () => {
    const [ count, setCount ] = useState(1);
    const [ input, setInput ] = useState("");
    // componentDidMount && componentDidUpdate
    useEffect(()=>{
        console.log('렌더링될 때마다 useEffect호출');
    })
    // useEffect에 두번째 인자로 []을 넘겨주면 마운트될 때만 호출됨
    // componentDidMount
    useEffect(()=>{
        console.log('처음 마운트될 때만 useEffect호출');
    },[])
    useEffect(()=>{
        console.log('배열요소안의 값이 업데이트되면 useEffect호출');
    },[count])
    const handleCount = () => {
        setCount(count+1);
    }
    const onChange = (e) => {
        setInput(e.target.value);
    }
    return (
        <div>
            <button onClick={handleCount}>수정하기</button>
            <span>count: {count}</span>
            <input onChange={onChange} value={input} />
        </div>
    );
};

export default App2;