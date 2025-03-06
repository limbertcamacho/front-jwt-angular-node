import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  toggleSubmenu(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    const target = event.target as HTMLElement;
    const parent = target.parentElement;
    if (parent?.classList.contains('has-submenu')) {
      parent.classList.toggle('open');
    }
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

}




