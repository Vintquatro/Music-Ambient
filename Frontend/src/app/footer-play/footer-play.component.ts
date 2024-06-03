import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-play',
  templateUrl: './footer-play.component.html',
  styleUrls: ['./footer-play.component.css']
})
export class FooterPlayComponent {

  change = true;

  ngOnInit(): void {
    
  }

  changeIcon() {
    this.change = !this.change
  }

}
