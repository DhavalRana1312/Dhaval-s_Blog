import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router  } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
constructor(private router:Router){}

ngOnInit(): void {

}
onSubmit(){
  this.router.navigate(['https://web3forms.com/#submit']);
}
onBack(){
  this.router.navigate(['/']);
}
}
