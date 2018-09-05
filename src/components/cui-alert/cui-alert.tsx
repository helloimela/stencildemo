import { Component, Prop, Method } from '@stencil/core';

@Component({
  tag:'cui-alert',
  styleUrl:'cui-alert.less'
})
export class CuiAlert{

  @Prop() type:string;
  @Prop() variation: string;

  @Method()
  getClass(variation){
    if(variation=='indicator') return 'indicator';
    else if(variation=='callout') return 'callout callout-'+this.type;
    else return 'alert alert-'+this.type;
  }

  render(){
    return(
      <div class={this.getClass(this.variation)}>
        <span class={this.variation=='indicator'?'alert alert-indicator alert-'+this.type:''}></span>
        <slot/>
      </div>
    );
  }
}
