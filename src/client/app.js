import {Component,Store} from 'reactivate';
import {render} from 'react-dom';

const HelloReactivate = Component({
    store: Store('/profile'),
    getInitialState() {
        return {name: 'Reactivate'};
    },
    onChange(event) {
        this.store.push({
            name: event.target.value
        });
    },
    render() {
        return (
            <div>
                <Greeting store={this.store}/>
                <div>
                    <hr/>
                    <input type="text" onChange={this.onChange} placeholder="Enter Name"/>
                </div>
            </div>
        )
    }
});

const Greeting = Component({
    render() {
        return <span>Hello {this.store.value().name}!</span>
    }
});

render(
    <HelloReactivate></HelloReactivate>,
    document.getElementById('app')
);