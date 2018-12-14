import {Component, Prop, Method} from '@stencil/core';

@Component({
  tag: 'cui-footer',
  styleUrl: 'cui-footer.less',
  shadow: true
})
export class CuiFooter{

  @Prop() sticky:boolean=false;
  @Prop() copyright:string;

  @Method()
  getStickyClass(sticky){
    if(sticky) {
      document.body.classList.add('sticky');
      return 'stick';
    }
  }

  @Method()
  getDate(){
    return new Date().getFullYear();
  }

  render(){
    return(
      <footer class={this.getStickyClass(this.sticky)}>
        <div class="right-container">
          <span class="wordmark"></span>
        </div>
        <p class="footer-copy-text">
          <span>
            &copy; Copyright Scania {this.getDate()} All rights reserved
          </span>
        </p>
      </footer>
    );
  }
}
