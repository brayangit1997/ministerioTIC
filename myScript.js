var vectorCandidatos = new Array(4);

vectorCandidatos[0] = 0;
vectorCandidatos[1] = 0;
vectorCandidatos[2] = 0;
vectorCandidatos[3] = 0;


function voto(candidato){
    vectorCandidatos[candidato] = vectorCandidatos[candidato] + 1; 
}

function estadistica(){
    let total = vectorCandidatos[0] + vectorCandidatos[1];
    let porCan0 = (vectorCandidatos[0]/total)*100;
    let porCan1 = (vectorCandidatos[1]/total)*100;
    let porCan2 = (vectorCandidatos[2]/total)*100;
    let porCan3 = (vectorCandidatos[3]/total)*100;


    let nodoParrafo0 = document.createElement('p');
    let nodoParrafo1 = document.createElement('p');
    let nodoParrafo2 = document.createElement('p');
    let nodoParrafo3 = document.createElement('p');

    let texto0 = document.createTextNode("Votos Candidato 1: "+vectorCandidatos[0] + " - Porcentaje: "+porCan0+"%");
    let texto1 = document.createTextNode("Votos Candidato 2: "+vectorCandidatos[1] + " - Porcentaje: "+porCan1+"%");
    let texto2 = document.createTextNode("Votos Candidato 3: "+vectorCandidatos[2] + " - Porcentaje: "+porCan2+"%");
    let texto3 = document.createTextNode("Votos Candidato 4: "+vectorCandidatos[3] + " - Porcentaje: "+porCan3+"%");

    nodoParrafo0.appendChild(texto0);
    nodoParrafo1.appendChild(text12);
    nodoParrafo2.appendChild(texto2);
    nodoParrafo3.appendChild(texto3);


    let elementoDiv = document.getElementById('verEst');
    elementoDiv.appendChild(nodoParrafo0);
    elementoDiv.appendChild(nodoParrafo1);
    elementoDiv.appendChild(nodoParrafo2);
    elementoDiv.appendChild(nodoParrafo3);


    new Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'myfirstchart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [
          { year: '2008', value: 20 },
          { year: '2009', value: 10 },
          { year: '2010', value: 5 },
          { year: '2011', value: 5 },
          { year: '2012', value: 20 }
        ],
        // The name of the data record attribute that contains x-values.
        xkey: 'year',
        // A list of names of data record attributes that contain y-values.
        ykeys: ['value'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Value']
      });

    new Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'myfirstchart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [
          { Candidato1: 'XXXX', value: vectorCandidatos[0] },
          { Candidato2: 'YYYY', value: vectorCandidatos[1] },
          { Candidato2: 'AAAA', value: vectorCandidatos[2] },
          { Candidato2: 'BBBB', value: vectorCandidatos[3] },

        ],
        // The name of the data record attribute that contains x-values.
        xkey: 'Candidato',
        // A list of names of data record attributes that contain y-values.
        ykeys: ['Voto'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Votos']
      });
}