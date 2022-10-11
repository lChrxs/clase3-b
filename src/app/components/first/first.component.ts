import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';

enum PAISES{
  'MEXICO',
  'COLOMBIA',
  'ARGENTINA',
  'PUERTO_RICO'
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit, AfterViewInit {

  @ViewChild('titulo', {static: true}) titulo?: ElementRef

  public PAISES = PAISES;

  public bActivo: boolean = true;
  public paises: any[] = [
    {
      id: 10,
      nombre: 'Mexico'
    },
    {
      id: 20,
      nombre: 'Colombia'
    },
    {
      id: 30,
      nombre: 'Argentina'
    },
    {
      id: 40,
      nombre: 'Puerto Rico'
    },
  ]

  public platillos: any[] = [
    {
      platillo: 'Tacos',
      pais: PAISES.MEXICO
    },
    {
      platillo: 'Pambazo',
      pais: PAISES.MEXICO
    },
    {
      platillo: 'Arepa',
      pais: PAISES.COLOMBIA
    },
    {
      platillo: 'Bandeja paisa',
      pais: PAISES.COLOMBIA
    },
    {
      platillo: 'Mate',
      pais: PAISES.ARGENTINA
    },
    {
      platillo: 'Asado',
      pais: PAISES.ARGENTINA
    },
    {
      platillo: 'Mofongo',
      pais: PAISES.PUERTO_RICO
    }
  ];

  constructor(public renderer: Renderer2) { }

  ngOnInit(): void {
    this.toggleView();

    console.log(this.titulo);
    this.renderer.setAttribute(this.titulo?.nativeElement, 'id', 'viewChild-renderer');
    this.renderer.setStyle(this.titulo?.nativeElement, 'font-weight', 'normal');
  }
  
  ngAfterViewInit(): void {
    console.log(this.titulo)
    
  }

  toggleView(){
    let btn = document.getElementById('btn');
    btn?.addEventListener('click', () => {
      this.bActivo = !this.bActivo;
    })
  }

}
