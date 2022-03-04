import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-imagenes",
  templateUrl: "./imagenes.component.html",
  styleUrls: ["./imagenes.component.css"]
})
export class ImagenesComponent implements OnInit {
  size = "";
  cambio = false;
  // cosas: any[] = ["23", "2443", "2345"];

  constructor() { }

  ngOnInit(): void {
    // this.cosas=[];
    let cosas : any[] = [];
    // this.reportWindowSize(cosas);
    window.addEventListener("resize",()=>{
      let width = 0;
      let height = 0;
      width = document.documentElement.scrollWidth;
      height = document.documentElement.scrollHeight;
      // width = screen.width;
      // height = screen.height;
      console.log("Log # ", width, height);
  
      if(width<768){
        console.log('Log # cosas', cosas);
        console.log("Log # xs");
        cosas.push("xs");
        this.cambio = true;
      }
      if(width>=768 && width <992){
        console.log('Log # cosas', cosas);
        console.log("Log # sm");
        cosas.push("sm");
        this.cambio = true;
      }
      if(width>=992 && width <1200){
        console.log('Log # cosas', cosas);
        console.log("Log # md");
        cosas.push("md");
        this.cambio = false;
      }
      if(width>=1200){
        console.log('Log # cosas', cosas);
        console.log("Log # lg");
        cosas.push("lg");
        this.cambio = false;
      }
    });
  }

  reportWindowSize(cosas: any[]) {
    
  }
}
