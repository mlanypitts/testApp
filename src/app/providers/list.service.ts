import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, skip } from 'rxjs/operators';
import { Item } from '../dto/item/item';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Item[]> {
    return this.http.get('http://www.mocky.io/v2/5b347011320000781bd1e3d1').pipe(
      map((data: any) => {
        const items: Item[] = [];
        data.forEach((item: any) => {
          items.push(new Item(item.id, item.title, item.details));
        });
        return items;
      }));
  }
}
