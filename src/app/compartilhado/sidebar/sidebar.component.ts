import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    //@ts-ignore
    if (select('.toggle-sidebar-btn')) {
      //@ts-ignore
      on('click', '.toggle-sidebar-btn', function(e) {
        //@ts-ignore
        select('body').classList.toggle('toggle-sidebar')
      })
    }
  }

}
