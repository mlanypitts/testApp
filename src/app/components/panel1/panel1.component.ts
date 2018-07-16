import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ListService } from '../../providers/list.service';
import { Item } from '../../dto/item/item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-panel1',
  templateUrl: './panel1.component.html',
  styleUrls: ['./panel1.component.css']
})
export class Panel1Component implements OnInit {

  items: Item[];
  @Output() itemSelect: EventEmitter<Item> = new EventEmitter();

  constructor(private list: ListService) { }

  ngOnInit() {
    this.getList();
  }

  getList(): void {
    this.list.getData().subscribe(data => { this.items = data; });
  }

  onItemSelect(id: number): void {
    console.log(id);
    const itemFilter: Item[] = this.items.filter((item: Item) => {
      return item.id === id;
     });
    this.itemSelect.emit(itemFilter[0]);
  }

}
