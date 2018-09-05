import {Component} from '@stencil/core';

@Component({
  tag:'cui-content',
  styleUrl:'cui-content.less'
})

export class CuiContent{

  render(){
    return(
      <div class="content">
        <slot/>
      </div>
    );
  }
}
