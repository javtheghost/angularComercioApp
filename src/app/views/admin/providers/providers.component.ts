import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { getProvidersI } from 'src/app/models/Provider.interface';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {

  constructor(private api:ApiService, private router:Router) { }

  providers:getProvidersI[ ] = [ ]
  ngOnInit(): void {
    this.api.getProviders().subscribe(data=>{
       this.providers = data
    } )
  }

}
