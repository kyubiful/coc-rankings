window.onload = () => {

  var url = 'http://localhost:3700/equipo/teams';

  getTeams = () => {

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', url, true);
    xhttp.send();

    xhttp.onreadystatechange = () => {
      if(xhttp.readyState == 4 && xhttp.status == 200){
        var response = JSON.parse(xhttp.responseText);
        var teams = response.equipos;
        
        var table = document.getElementById('res');

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


  getTeams();

  
}