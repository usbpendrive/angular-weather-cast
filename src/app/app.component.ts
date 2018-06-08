import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <div class="content-margin">
      <mat-toolbar color="primary">
        <span>Angular LocalCast Weather</span>
      </mat-toolbar>
      <div fxLayoutAlign="center">
        <div class="mat-caption vertical-margin">Your city forecast right now!</div>
      </div>
      <div fxLayout="row">
        <div fxFlex></div>
        <mat-card fxFlex="350px">
          <mat-card-header>
            <mat-card-title>
              <div class="mat-headline">Current Weather</div>
            </mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <app-current-weather></app-current-weather>
          </mat-card-content>
        </mat-card>
        <div fxFlex></div>
      </div>
    </div>
  `,
})
export class AppComponent {
  title = 'app'
}
