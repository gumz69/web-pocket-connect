import { Component, OnInit } from '@angular/core';
import { initFlowbite} from 'flowbite';

@Component({
  selector: 'app-pockets',
  templateUrl: './pockets.component.html',
})
export class PocketsComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }

}
