import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  @HostBinding('style.backgroundColor') corDeFundo: string;

  @HostListener('focus') aoGanharFoco(){
    this.corDeFundo = 'green';
  }

  @HostListener('blur') aoPerderFoco(){
    this.corDeFundo = 'transparent';
  }




  // constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  //   // console.log(this.elementRef.nativeElement);
  // }
  //
  // @HostListener('focus') aoGanharFoco(){
  //   this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  // }
  //
  // @HostListener('blur') aoPerderFoco(){
  //   this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  // }
}
