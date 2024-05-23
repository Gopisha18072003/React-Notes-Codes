import { Component } from 'react';
import classes from './Counter.module.css';
import {useSelector, useDispatch, connect}  from 'react-redux';
import { counterActions } from '../store/counter-slice';

// FUNCTIONAL COMPONENT

// const Counter = () => {
//   const dispatch = useDispatch();
//   // whren using useSelector react-redux automatically creates a subscription of this component 
//   // function to the store
//   const counter = useSelector(state => state.counter);
//   const toggleCounterHandler = () => {
//      dispatch({type: 'toogleCounter'})
//  };

//   const incrementHandler = () => {
//     dispatch({type: 'increment'});
//   }

//   const decrementHandler = () => {
//     dispatch({type: 'decrement'})
//   }

// const increaseHandler = () => {
//   dispatch({type: 'increase', amount: 5})
// }

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       <div>
//         <button onClick={incrementHandler}>Increment</button>
//         <button onClick={increaseHandler}>Increase by 5</button>
//         <button onClick={decrementHandler}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// CLASS COMPONENT

class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }  
  
  increaseHandler() {
    this.props.increase();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {
    this.props.toggleCounter();
  }

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {
          this.props.showCounter && <div className={classes.value}>{this.props.counter}</div>
        }
        
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.increaseHandler.bind(this)}>Increase by 5</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
          
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter.counter,
    showCounter: state.counter.showCounter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(counterActions.increment()),
    decrement: () => dispatch(counterActions.decrement()),
    increase: () => dispatch(counterActions.increase(5)), // ----- any kind of value can be passed 
    toggleCounter: () => dispatch(counterActions.toogleCounter())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
