import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  public debouncer: Subject<string> = new Subject<string>();

  @Input() placeholder: string = '';

  term: string = '';

  public ngOnInit(): void {
    this.debouncer.pipe(
      debounceTime(300)
    ).subscribe(term => this.onDebounce.emit(term));

  }
  public search(){
    this.onEnter.emit(this.term);
  }

  public onKeyPress() {
    this.debouncer.next(this.term)
  }

}
