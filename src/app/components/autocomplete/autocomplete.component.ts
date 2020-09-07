import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent {

  @Input() suggestions: any = []; //List to render for suggestion
  @Input() placeholder: String = ''; //Text field placeholder
  @Output() getTextValue = new EventEmitter(); //Event to send the selected text value


  isShowSuggestion = false; //TO show or close the suggestion
  selectedIndex = -1; //To show hovered element
  textFieldValue: String = ''; //TO hold the selected text field value

  /**
   * Sends the selected value to component and close the suggestion pop-up
   * @param {*} suggestion
   * @memberof AutocompleteComponent
   */
  select(suggestion) {
    this.textFieldValue = suggestion;
    this.getTextValue.emit(suggestion);
    this.isShowSuggestion = false;

  }

  /**
   * Invoked on hover event to get the hovered index value
   * @param {number} index
   * @memberof AutocompleteComponent
   */
  onHover(index: number) { this.selectedIndex = index; }

  //Invoked on focus event to show the suggestion pop-up
  onFocus() {
    this.isShowSuggestion = true;
  }

  //Invoked when user click outside of text field and suggestions
  clickOutSide() {
    this.isShowSuggestion = false;

  }
}
