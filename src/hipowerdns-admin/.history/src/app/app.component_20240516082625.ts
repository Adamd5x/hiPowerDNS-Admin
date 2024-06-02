import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InitConfigService } from './initializer/init-config.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PowerDNS - hiPower Administrator';

  constructor(private http: HttpClient, private config: InitConfigService){

  }

  ngOnInit(): void {    
    this.config
        .api$
        .subscribe({
          next: (resp => {
            console.log(resp);
          })
        });

        this.config
        .checkLicense$
        .subscribe({
          next: (resp => {
            console.log(resp);
          })
        });

        this.config
        .logging$
        .subscribe({
          next: (resp => {
            console.log(resp);
          })
        });
  }
}
