import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { HostListener } from "@angular/core";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  scrHeight: any;
  scrWidth: any;

  @HostListener('window:resize', ['$event'])

  getScreenSize(event?) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    console.log(this.scrHeight, this.scrWidth);
  }

  constructor() {
    this.getScreenSize();
  }

  ngOnInit(): void {
  }

  public getIsMaxDesktopResolution(): boolean {
    return this.scrWidth >= 1440;
  }


  public getIsDesktopResolution(): boolean {
    return this.scrWidth >= 1024 && this.scrWidth < 1440;
  }


  public getIsMobileResolution(): boolean {
    return this.scrWidth < 1024;
  }
}
