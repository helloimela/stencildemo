import {Component, Prop, Method} from '@stencil/core';

@Component({
  tag:'cui-content',
  styleUrl:'cui-content.less'
})

export class CuiContent{
  @Prop() monitoring:string;

  @Method()
  getGoogleAnalytics(){
    let trackID = this.monitoring.split('?')[1];
    trackID = (trackID=='default')?'UA-125640614-1':trackID;
    console.log(trackID);
    ga('create', trackID, 'auto');
    ga('send', 'pageview');
  }

  componentWillLoad(){
    if(this.monitoring){
      let head = document.getElementsByTagName('head')[0];
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://www.google-analytics.com/analytics.js';
      script.async = true;

      let script2 = document.createElement('script');
      script2.type = 'text/javascript';
      script2.innerHTML = "window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;";

      head.appendChild(script);
      head.appendChild(script2);
      console.log('will load header');
      this.getGoogleAnalytics();
    }
  }

  render(){
    return(
      <div class="content">
        <slot/>
      </div>
    );
  }
}
