import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ios-test',
  standalone: true,
  imports: [],
  templateUrl: './ios-test.component.html',
  styleUrl: './ios-test.component.css'
})
export class IosTestComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      window.close();
      self.close();
      top?.close();
    }, 4000);
  }
}
