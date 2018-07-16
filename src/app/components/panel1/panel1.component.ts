import { Component, OnInit } from '@angular/core';
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

  constructor(private list: ListService) { }

  ngOnInit() {
    this.getList();
  }

  getList(): void {
    this.list.getData().subscribe(data => { this.items = data; });
  }

}
