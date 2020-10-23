import React from 'react';
import { sketchyExport } from './common/sketchyExport.js';
import { okayExport } from './common/okayExport.js';

class App extends React.Component {
    render = () => {
        return (
            <>
                <p>{JSON.stringify(okayExport)}</p>
                <p>{JSON.stringify(sketchyExport)}</p>
            </>
        );
    };
}

export default App;
