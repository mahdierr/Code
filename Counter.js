import React, { Component } from 'react';

// Déclaration des types pour les props et le state
interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {
  // Initialisation de l'état
  state: CounterState = {
    count: 0
  };

  // Méthode pour incrémenter le compteur
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
