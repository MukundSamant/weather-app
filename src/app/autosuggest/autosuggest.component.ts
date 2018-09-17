import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-autosuggest',
  templateUrl: './autosuggest.component.html',
  styleUrls: ['./autosuggest.component.css']
})

export class AutosuggestComponent {
  @Input() autoSuggestions: string[];
  @Input() displayKey: string;
  @Input() placeHolder: string;
  @Input() value: string;
  @Output() change: EventEmitter<string> = new EventEmitter<string>();
  @Output() autoSuggestClick: EventEmitter<any> = new EventEmitter<any>();

  changeValue(textValue: string) {
    this.change.emit(textValue);
  }

  autoSuggestListItemClick(autoSuggestResult: any) {
    this.autoSuggestClick.emit(autoSuggestResult);
  }

}
