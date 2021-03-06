import {Component} from "@angular/core";

// #docregion
@Component({
  selector: 'a11y-error-demo',
  templateUrl: './app/managing-focus/a11y-error-demo.component.html'
})
export class A11yErrorDemoComponent {

  hideErrorConfirmation:boolean = true;

  setFocusOn(element: any) {
    this.hideErrorConfirmation = false;
    setTimeout(() => {
      element.focus();
    }, 200);
  }
}
// #enddocregion
