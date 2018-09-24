import { Component, Prop, Method, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag:'cui-alert',
  styleUrl:'cui-alert.less'
})
export class CuiAlert{

  @Prop() type: string;
  @Prop() variation: string;
  @Prop() content: string;
  @Prop() dismissible: boolean= false;
  @Prop() open: boolean = false;
  @State() _isOpen: boolean = false;
  @Event() onClose: EventEmitter;

  @Method()
  getClass(variation){
    if(variation=='indicator') return 'indicator';
    else if(variation=='callout') return 'callout callout-'+this.type;
    else return 'alert alert-'+this.type;
  }

  @Method()
   close() {
     this._isOpen = false;
     this.onClose.emit();
   }

   @Method()
   show() {
    this._isOpen = true;
   }

    @Method()
    isOpen() {
      return this._isOpen;
    }

  componentWillLoad() {
    this._isOpen = this.open;
  }

  componentDidLoad(){
    if(this.open){
      ga('send', {
        hitType: 'event',
        eventCategory: 'Component', //the object that user interact with on the page
        eventAction: 'loaded', // type of interaction with the object
        eventLabel: 'Alert '+this.type  //categorizing events
      });
    }
  }

  render(){
    return(
      <div hidden={!this._isOpen} class={this.getClass(this.variation)}>
        {
          this.variation=='indicator' &&
          <span class={this.variation=='indicator'?'alert alert-indicator alert-'+this.type:''}></span>
        }
        {this.content}
        {
          this.dismissible &&
          <button class="close" onClick={() => this.close()}>
            &times;
          </button>
        }
      </div>
    );
  }

}
