export interface StateDef {
  on: Record<string, string>;
  onEnter?: () => void;
  onExit?: () => void;
}

export class StateMachine {
  private state: string;
  private def: Record<string, StateDef>;
  
  constructor(config: { initial: string; states: Record<string, StateDef> }) {
    this.state = config.initial;
    this.def = config.states;
  }
  
  send(event: string): boolean {
    const currentDef = this.def[this.state];
    const transition = currentDef?.on?.[event];
    if (!transition) return false;
    currentDef.onExit?.();
    this.state = transition;
    this.def[this.state].onEnter?.();
    return true;
  }
  
  getState(): string { return this.state; }
}
