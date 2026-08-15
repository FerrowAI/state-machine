# State Machine

```sh
npm install @ferrow/state-machine
```
![CI](https://github.com/FerrowAI/state-machine/actions/workflows/ci.yml/badge.svg)

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

---
Part of the [ferrow-toolkit](https://github.com/FerrowAI/ferrow-toolkit) collection · Sponsored by [Ferrow](https://ferrow.ai)
