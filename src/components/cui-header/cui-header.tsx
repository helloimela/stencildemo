import { Component, Prop, Method } from '@stencil/core';

@Component({
  tag:'cui-header',
  styleUrl:'cui-header.less'
})
export class CuiHeader{

  @Prop() titleHeader:string;
  @Prop() siteUrl: string;
  @Prop() monitoring:string;

  @Method()
  getGoogleAnalytics(){

  }

  componentDidLoad(){
    if(this.monitoring){
      this.getGoogleAnalytics();
    }
  }

  render(){
    return(
      <header class="col-sm-12">
        <h1><a href={this.siteUrl}>{this.titleHeader}</a></h1>
      </header>
    );
  }
}
