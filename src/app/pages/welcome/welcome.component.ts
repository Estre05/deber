import { Component, OnInit } from '@angular/core';
import { Text1Component } from '../../../componets/text1/text1.component';
import { Text2Component } from '../../../componets/text2/text2.component';
import { Text3Component } from '../../../componets/text3/text3.component';
import { Text4Component } from '../../../componets/text4/text4.component';
import { Text5Component } from '../../../componets/text5/text5.component';
import { Text6Component } from '../../../componets/text6/text6.component';
import { Text7Component } from '../../../componets/text7/text7.component';
import { Text8Component } from '../../../componets/text8/text8.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports:[Text1Component, Text2Component, Text3Component, Text4Component, Text5Component, Text6Component, Text7Component, Text8Component]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
