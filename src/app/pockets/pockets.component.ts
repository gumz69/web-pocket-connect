import { Component, OnInit } from '@angular/core';
import { initFlowbite} from 'flowbite';

@Component({
  selector: 'app-pockets',
  templateUrl: './pockets.component.html',
  styleUrl: './pockets.component.css'
})
export class PocketsComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }

}
