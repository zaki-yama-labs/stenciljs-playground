import { Component, Host, h, Prop } from '@stencil/core';

/**
 * https://stenciljs.com/docs/properties
 * reflect: trueのときどうなるかの検証
 */
@Component({
  tag: 'prop-reflect',
  shadow: true
})
export class PropReflect {

  @Prop({ reflect: true }) message = 'Hello';

  render() {
    return (
      <Host>
        <slot>{ this.message }</slot>
      </Host>
    );
  }

}
