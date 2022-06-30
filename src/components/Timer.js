import React, { useEffect } from 'react';

const Timer = () => {
    //Mount할 때 호출 componentDidMount
    //UnMount할 때 호출 componentWillUnMount
    //Update할 때 호출 componentDidUpdate
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log('타이머 돌아가는중....');
        },1000)
        return ()=>{
            clearInterval(timer);
        }
    },[])
    return (
        <div>
            타이머를 실행합니다.
        </div>
    );
};

export default Timer;