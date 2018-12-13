import { Component, Prop } from '@stencil/core';

@Component({
  tag:'cui-header',
  styleUrl:'cui-header.less'
})
export class CuiHeader{

  @Prop() siteName:string;
  @Prop() siteUrl: string;
  @Prop() shortName: string;

  render(){
    return(
      <nav class="navbar navbar-default">
        <div class="navbar-header" short-name={this.shortName}>
          <a href={this.siteUrl} class="navbar-brand"></a>
          {this.siteName}
          <a href={this.siteUrl} class="navbar-symbol"></a>
          <nav class="nav navbar-nav navbar-right">
          </nav>
        </div>
      </nav>
    );
  }
}
