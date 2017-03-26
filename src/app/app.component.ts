import { Component } from "@angular/core"

@Component({
  selector: 'app-root',
  template: `
    <h1 class="app">{{title}}</h1>
    <div *ngIf="speakers">
      <h2>Speakers</h2>
      <ul>
        <li *ngFor="let speaker of speakers">{{speaker}}</li>
      </ul>
    </div>
  `,
  styles: [
    `
    .app {
      color: #333333;
      font-family: 'Helvetica', sans-serif;
    }
    `
  ]
})

export class AppComponent {
  title: string = "Hello DenverScript!"
  speakers: string[] = ["Emma"]
}
