import { Component } from '@angular/core';
import { Item } from './dto/item/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'hello';
  private abc = 'hello';
  public currentItem: Item;

  showItem(item: Item): void {
    console.log(item.id);
  }
}
