import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageboxComponent } from './messagebox/messagebox.component';

const routes: Routes = [
  {path: "main", component:MainpageComponent},
  {path: "messages", component:MessagesComponent},
  {path: "messages/:phone_number", component:MessageboxComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
