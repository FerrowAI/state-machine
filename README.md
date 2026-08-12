# State Machine

Define complex workflows declaratively.

```javascript
const machine = new StateMachine({
  initial: 'idle',
  states: {
    idle: { on: { START: 'running' } },
    running: { on: { PAUSE: 'paused', STOP: 'idle' } },
    paused: { on: { RESUME: 'running' } }
  }
});
```

Solves: Complex workflow logic, state management, error handling.
License: MIT

Sponsored by [Ferrow](https://ferrow.ai)
