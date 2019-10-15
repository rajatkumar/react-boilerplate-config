import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.less';
class Welcome extends React.Component {
    render() {
        return (
            <div>
                <div className="header">
                    <h1>This is index2!</h1>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Welcome />, document.getElementById('app2'));
