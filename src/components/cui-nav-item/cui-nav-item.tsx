import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'cui-nav-item',
  styleUrl: 'cui-nav-item.less'
})
export class CuiNavItem{
  @Prop() location:string;

  render(){
    return(
      <a href={this.location}><slot/></a>
    );
  }
}
