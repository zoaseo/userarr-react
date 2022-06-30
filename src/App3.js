import React, { useState } from 'react';
import Timer from './components/Timer';

const App3 = () => {
    const [ showTimer, setShowTimer ] = useState(false);
    return (
        <div>
            { showTimer && <Timer/> }
            <button onClick={()=>{ setShowTimer(!showTimer) }}>클릭하세요</button>
        </div>
    );
};

export default App3;