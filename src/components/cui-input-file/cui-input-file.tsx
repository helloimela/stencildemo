import {Component, Prop} from '@stencil/core';

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

  render(){
    return(
      <div class="upload-btn-wrapper">
          <button class="btn">Upload a file</button>
          <input type="file" name={this.name} accept={this.allows}/>
      </div>

    );
  }
}
