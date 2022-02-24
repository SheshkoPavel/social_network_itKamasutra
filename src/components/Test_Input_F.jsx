import React, {useState} from 'react';

const TestInputF = (props) => {

    const [state, setState] = useState('')

    function Update (e) {
        setState((state) => e.target.value)
    }

    return (
        <div>
            <input
                placeholder="Type smth"
                onChange={Update}
            />
            <p>{state}</p>
        </div>
    );
};

export default TestInputF;