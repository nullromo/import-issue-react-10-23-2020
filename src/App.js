import React from 'react';
import { sketchyExport } from './common/sketchyExport.js';
import { okayExport } from './common/okayExport.js';

class App extends React.Component {
    render = () => {
        return (
            <>
                <p>{okayExport}</p>
                <p>{sketchyExport}</p>
            </>
        );
    };
}

export default App;
