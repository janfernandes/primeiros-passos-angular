import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {

  @Input() cor: 'grey';

  @HostBinding('style.backgroundColor') corDeFundo: string;

  @HostListener('focus') colorir(){
    this.corDeFundo = this.cor;
  }

  @HostListener('blur') descolorir(){
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
