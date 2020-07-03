import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, Form } from '@angular/forms';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  surveyForm: FormGroup;
  no_income: Boolean;
  submitted: Boolean;
  sme: Boolean;
  noSME: Boolean

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.surveyForm = this.formBuilder.group({
      name: ['', Validators.required],
      employees: ['', Validators.required],
      turnover: ['', Validators.required],
      income: ['', Validators.required],
      ltm: [''],
      lty: ['']
    });
  }

  get f(){return this.surveyForm.controls}

  income(value){
    if(value=='No'){
      this.no_income = true
    }else{
      this.no_income = null
    }
    
  }

  onSubmit(){
    this.submitted = true;
    this.sme = null
    this.noSME = null

    if(this.surveyForm.invalid){
      return
    }

    let turnover = this.surveyForm.get('turnover').value
    let employee = this.surveyForm.get('employees').value

    if(turnover <= 200000 && employee < 15){
      this.sme = true
    }else{
      this.noSME = true
    }

  }
}
