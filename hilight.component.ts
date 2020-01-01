import { Component, Input } from '@angular/core';

@Component({
  selector: 'hilight-component',
  template: `<span [innerHtml]="displayText">!</span>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HilightComponent implements OnChange  {
  @Input() inputText: string;
  @Input() resultText: string;
  public displayText: string;
  constructor() {
  }

  ngOnChanges() {
    var regEx = new RegExp(this.inputText, "ig");
    let matchList = this.resultText.match(regEx);
    this.displayText = this.resultText;
    if(matchList){
      for(let i=0;i<matchList.length;i++){
            let replaceHtml = "<strong>"+matchList[i]+"</strong>";
            this.displayText = this.displayText.replace(matchList[i], replaceHtml);
          }
    }
  }
}
