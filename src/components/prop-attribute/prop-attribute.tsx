import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'prop-attribute',
  shadow: true
})
export class PropAttribute {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
