import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Birla House",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 2,
      "Name": "The Mehtas",
      "Type": "Villa",
      "Price": 25000
    },
    {
      "Id": 3,
      "Name": "Ahujas Mansion",
      "Type": "Mansion",
      "Price": 23000
    },
    {
      "Id": 4,
      "Name": "Shree Niwas",
      "Type": "House",
      "Price": 10000
    },
    {
      "Id": 5,
      "Name": "BK Apartments",
      "Type": "Apartment",
      "Price": 7000
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
