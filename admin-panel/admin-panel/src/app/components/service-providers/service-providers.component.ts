import { Component, OnInit } from '@angular/core';
import { ServiceProvider } from '../../models/service-provider'
import { ServiceProviderService } from '../../services/service-provider.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-service-providers',
  templateUrl: './service-providers.component.html',
  styleUrls: ['./service-providers.component.scss']
})
export class ServiceProvidersComponent implements OnInit {

  serviceProviders: any;

  constructor(private serviceProviderService: ServiceProviderService, private http: HttpClient) { }

  ngOnInit() {
    this.serviceProviderService.getServiceProviders().subscribe((response) => {
      this.serviceProviders = response;
    
  });
  }
}
