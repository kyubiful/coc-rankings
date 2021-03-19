window.onload = () => {

  var url = 'http://localhost:3700/equipo/sumTeams';

  getTeams = () => {

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', url, true);
    xhttp.send();

    xhttp.onreadystatechange = () => {
      if(xhttp.readyState == 4 && xhttp.status == 200){
        var response = JSON.parse(xhttp.responseText);
        var teams = response.equipos;
        
        var table = document.getElementById('res-final');

        for(team of teams){
          table.innerHTML+=`
              <tr>
                <td>${team._id}</td>
                <td>${team.puntos}</td>
              </tr>
            `;
        }
      }
    }

  }

  getTeams();

}