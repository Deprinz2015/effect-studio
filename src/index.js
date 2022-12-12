import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class LEDSimulator extends React.Component {
    render() {
        return (
            <div>LED Simulator</div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("led-root"));
root.render(<LEDSimulator/>);