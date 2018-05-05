import React from 'react'
import { Steps, Button, message, Card } from 'antd';
import ReactCodeInput from 'react-code-input'
import './App.css'
const Step = Steps.Step;



class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 0,
            containerId: props.match.params.containerId || '',
            pin: ''
        }
    }
    next() {
        if ((this.state.containerId.length === 6 && this.state.current === 0) || (this.state.pin.length === 4 && this.state.current === 1)) {
            const current = this.state.current + 1;
            this.setState({ current });
        }
    }
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }
    updateContainerId(containerId) {
        this.setState({ containerId })
        this.next()
    }

    updatePin(pin) {
        this.setState({ pin })
        this.next()
    }

    componentWillUpdate(nextProps, nextState) {
        if ((nextState.containerId.length === 6 && nextState.current === 0) || (nextState.pin.length === 4 && nextState.current === 1)) {
            nextState.current = this.state.current + 1;
        }
    }

    render() {
        const { current } = this.state;
        const steps = [{
            title: 'Container Code',
            content: (<div>
                <ReactCodeInput key='container' value={this.state.containerId} type='text' fields={6} onChange={code => this.updateContainerId(code)} />
                <Button type="primary" onClick={() => this.next()} disabled={this.state.containerId.length < 6} >Next</Button>
            </div>),
        }, {
            title: 'PIN code',
            content: ((<ReactCodeInput key='pin' type='password' value={this.state.pin} fields={4} onChange={pin => this.updatePin(pin)} />)),
        }, {
            title: 'Confirm Pickup',
            content: (<Button type="primary" onClick={() => message.success('Processing complete!')}>Order Pickup</Button>),
        }];
        return (
            <Card title="Container Pickup">
                <Steps current={current}>
                    {steps.map(item => <Step key={item.title} title={item.title} />)}
                </Steps>
                <div className="steps-content">{steps[this.state.current].content}</div>
            </Card>
        );
    }
}

export default App;