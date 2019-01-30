import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.less';
class Welcome extends React.Component {
    render() {
        return (
            <div>
                <div className="header">
                    <h1>Hello World : Yet Another BoilerPlate</h1>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Welcome />, document.getElementById('app'));
