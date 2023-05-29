import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClienteConsultor } from 'src/app/model/cliente-consultor.model';
import { Consultor } from 'src/app/model/consultor.model';
import { DataGraficaConsultorParcial } from 'src/app/model/data-grafica-consultor.model';
import { DesempenhoService } from 'src/app/service/desempenho.service';

@Component({
  selector: 'app-grafico-bar-dialog',
  templateUrl: './grafico-bar-dialog.component.html',
  styleUrls: ['./grafico-bar-dialog.component.css']
})
export class GraficoBarDialogComponent implements OnInit {


  desempenhoConsultor: DataGraficaConsultorParcial;
  consultores: Consultor[] = [];
  // Crear un nuevo mapa de objetos con valores de tipo string
  clienteConsultor: ClienteConsultor = {
    idCliente: 0,
    idConsultor: '',
    title: ''
  }
  labels: string[];
  values: number[];

  constructor(private desempenoService: DesempenhoService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.desempenoService.getConsultores().subscribe(consultores => {
      this.consultores = consultores;
      console.log("consultores => ", this.consultores);
      this.consultores.forEach(consultor => {
        let ganancia: number
        this.desempenoService
          .getClientesDesempenhoByConsultor(consultor.id).subscribe(desempenhos => {
            desempenhos.forEach(desempenho => {

              ganancia += desempenho.liquido - desempenho.impuesto;
            });
            this.labels.push(consultor.id);
            this.values.push(ganancia);
            ganancia = 0;
          });
      });
    });


    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    /* const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'Data',
          data: this.values,
          backgroundColor: 'rgba(0, 123, 255, 0.5)',
          borderColor: 'rgba(0, 123, 255, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    }); */

  }

}
