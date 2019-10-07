import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'custom-clock'
})
export class CustomClock {
  timer: number;

  @State() time: number = Date.now();

  componentDidLoad() {
    this.timer = window.setInterval(() => {
      this.time = Date.now();
    }, 1000);
  }

  componentDidUnload() {
    window.clearInterval(this.timer);
  }

  render() {
    const time = new Date(this.time).toISOString();
    return (
      <span>{time}</span>
    );
  }

}
