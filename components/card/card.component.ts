import {Component, Inject, ElementRef} from '@angular/core';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['style.css'],
  moduleId: __moduleName,
})
export class CardComponent {
  constructor(@Inject(ElementRef) elRef: ElementRef){
    this.uuid = elRef.nativeElement.id.substring(12);
    this.element = elRef;
    this.title = drupalSettings.pdb.configuration[this.uuid].title;
    this.sub_title = drupalSettings.pdb.configuration[this.uuid].sub_title;
    this.content = drupalSettings.pdb.configuration[this.uuid].content;
  }
}