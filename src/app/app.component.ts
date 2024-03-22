import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { initAccordions, initCarousels, initCollapses, initDials, initDismisses, initDrawers, initDropdowns, initFlowbite, initModals, initPopovers, initTabs, initTooltips } from 'flowbite';
import { LoginService } from './login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterModule, RouterOutlet, HttpClientModule]
})
export class AppComponent implements OnInit {
  title = 'pocket-connect';
  isLogin: boolean;

  constructor(private service:LoginService, private services: AppService){
    this.isLogin = !!this.service.getAuth();
  }

  ngOnInit(): void {
    initFlowbite();
    this.services.getAuth().subscribe({
      next: (data) => {
        console.log("Data:", data); // This is the actual data from the response
      },
      error: (error) => {
        // console.error("Error:", error); // Log the error response
        if (error.status === 401) {
          // Unauthorized error
          console.log("Unauthorized error");
          localStorage.removeItem("token");
        }
      }
    } 
    )
  }
}
