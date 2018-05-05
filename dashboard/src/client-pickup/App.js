import React from 'react'
import { Steps, Button, message, Card } from 'antd';
import ReactCodeInput from 'react-code-input'
import './App.css'
const Step = Steps.Step;



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }
    updateContainerId(id) {
        if(id.length === 6){
            console.log(this)
            this.next()
        }
    }

    updatePin(pin){
        if(pin.length === 4){
            this.next()
        }
    }

    render() {
        const { current } = this.state;
        const steps = [{
            title: 'Container Code',
            content: (<ReactCodeInput key='container' type='text' fields={6} onChange={code => this.updateContainerId(code)} />),
        }, {
            title: 'PIN code',
            content: ((<ReactCodeInput key='pin' type='password' fields={4} onChange={pin => this.updatePin(pin)} />)),
        }, {
            title: 'Last',
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