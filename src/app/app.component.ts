import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { initAccordions, initCarousels, initCollapses, initDials, initDismisses, initDrawers, initDropdowns, initFlowbite, initModals, initPopovers, initTabs, initTooltips } from 'flowbite';
import { LoginService } from './login/login.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterModule, RouterOutlet]
})
export class AppComponent implements OnInit {
  title = 'pocket-connect';
  isLogin: boolean;
  constructor(private service:LoginService){
    this.isLogin = !!this.service.getAuth();
  }
  ngOnInit(): void {
    initFlowbite();
  }
}
