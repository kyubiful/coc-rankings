window.onload = () => {

  var url = 'http://localhost:3700/equipo/teamsQualy';

  getTeams = (id, qualy) => {

    const xhttp = new XMLHttpRequest();

    var json = { "clasificatorio": qualy };
    xhttp.open('POST', url, true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify(json));

    xhttp.onreadystatechange = () => {
      if(xhttp.readyState == 4 && xhttp.status == 200){
        var response = JSON.parse(xhttp.responseText);
        var teams = response.equipos;
        
        var table = document.getElementById(id);

        for(team of teams){
          table.innerHTML+=`
              <tr>
                <td>${team.nombre}</td>
                <td>${team.clasificatorio}</td>
                <td>${team.puntos}</td>
              </tr>
            `;
        }
      }
    }

  }


  getTeams('res-q1', 1);
  getTeams('res-q2', 2);
  getTeams('res-q3', 3);
  getTeams('res-q4', 4);


  
}