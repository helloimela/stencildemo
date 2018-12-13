import {Component, Prop, Method} from '@stencil/core';

@Component({
  tag: 'cui-footer',
  styleUrl: 'cui-footer.less',
  shadow: true
})
export class CuiFooter{

  @Prop() sticky:boolean=false;

  @Method()
  getStickyClass(sticky){
    if(sticky) {
      document.body.classList.add('sticky');
      return 'stick';
    }
  }

  render(){
    return(
      <footer class={this.getStickyClass(this.sticky)}>
        <p>Copyright &copy;2018 scania.com</p>
        <slot/>
      </footer>
    );
  }
}
