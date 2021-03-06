import { Directive, ElementRef, HostListener, Renderer, Input } from '../../../../../node_modules/@angular/core';

@Directive({
    selector: '[apDarkenOnHover]'
})

export class DarkOnHoverDirective{
    
    @Input() brightness = '70%';

    constructor(private el: ElementRef, private render: Renderer){}

    @HostListener('mouseover')
    darkenOn(){
        this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
    }

    @HostListener('mouseleave')
    darkenOf(){
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }
}