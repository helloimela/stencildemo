import {Component, Prop, Method, Event, EventEmitter, State} from '@stencil/core';

@Component({
  tag: 'cui-input-file',
  styleUrl:'cui-input-file.less'
})
export class CuiInputFile{

  @Prop() allows:string='';
  @Prop() name:string='inputFile';
  @Prop() maxFileSize:number=10;
  @Prop() multiple:boolean=false;
  @Prop() required:boolean=false;
  @State() filename:string;

  @Method()
  getLabel(){
    //var input = document.querySelector('input[name="'+this.name+'"]').nextElementSibling;
    //var input = document.getElementById(this.name);
    // let label = input.nextElementSibling,
    // labelVal = label.innerHTML;
    console.log('change');
  }

  @Event() inputChange: EventEmitter;
  handleChange(e){
    this.filename = e.srcElement.files[0].name;
  }

  render(){
    return(
      <div class="upload-btn-wrapper">
          <button class="btn">Upload a file</button>
          <input id={this.name} type="file" name={this.name} accept={this.allows} multiple={this.multiple} onChange={ (e)=>this.handleChange(e)}/>
          <span>{this.filename}</span>
      </div>

    );
  }
}
