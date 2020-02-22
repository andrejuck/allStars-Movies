import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FilmeModel } from 'src/app/shared/model/filme.model';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit, OnChanges {

  @Output()
  public onChecked = new EventEmitter<boolean>();

  @Input()
  checked: boolean = false;

  @Input() filme: FilmeModel;
  @Input() checkedItems: number;

  private isDisabled = false;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.checkedItems >= 8 && !this.checked) {
      this.isDisabled = true;      
    }
    else {
      this.isDisabled = false;
      this.filme.checked = this.checked;
    }
  }

  onClick() {
    this.checked = !this.checked;
  }

  public onCheck() {
    this.onChecked.emit(this.checked)
  }
}
