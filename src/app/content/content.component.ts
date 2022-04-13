import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public covidInfo:any={};
  constructor(private covidSerive:CovidService) { }
  p:number=1;
  ngOnInit(): void {
  

  console.log(this.covidInfo.Country)

  this.covidSerive.getCovidData().subscribe(

    (PosRes)=>{

      console.log(PosRes);

      this.covidInfo=PosRes;

    },

    (errRes)=>{

      console.log(errRes);

    }
  )}

  }