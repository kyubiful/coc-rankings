window.onload = () => {

  const button = document.getElementById('btn-generate');
  const delButton = document.getElementById('btn-reset');
  const entradas = document.getElementById('entradas');
  const formContainer = document.getElementById('form-container');
  var sendButton = '';
  var teamsArray = [];
  var teamsToSend = 0;

  generateForms = () => {
    formContainer.innerHTML= '<h2>Equipos</h2>';
    for (var i = 0; i < entradas.value; i++) {
      formContainer.innerHTML += `
      <div class="container mt-1">
        <div class="row">
          <div class="col">
            <input type="text" readonly class="form-control-plaintext" value="${i+1}">
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Equipo" aria-label="Equipo" id="nameTeam${i+1}">
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Puntos" aria-label="Puntos" id="puntos${i+1}">
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Clasificatorio" aria-label="Clasificatorio" id="qualy${i+1}">
          </div>
        </div>
      </div>
      `;
      teamsToSend = i+1;
    }
    formContainer.innerHTML+= `
      <div class="container mt-1">
        <button type="button" class="btn btn-primary w-100 mt-2 m" id="btn-send">Enviar</button>
      </div>
    `;
    sendButton = document.getElementById('btn-send');
    sendButton.addEventListener('click', sendTeams);
  }

  resetForms = () => {
    formContainer.innerHTML = '';
    entradas.value = '';
  }

  test = () => {
    console.log('test');
  }

  sendTeams = () => {
    console.log(teamsToSend);
    for(var i = 1; i<=teamsToSend; i++){
      var equipo = document.getElementById(`nameTeam${i}`).value;
      var puntos = document.getElementById(`puntos${i}`).value;
      var qualy = document.getElementById(`qualy${i}`).value;

      teamsArray.push({"nombre": equipo, "puntos": puntos, "clasificatorio": qualy});
    }

    sendTeamsBack(teamsArray);
    formContainer.innerHTML = '';
    entradas.value = '';

  }

  var url = 'http://localhost:3700/equipo/saveTeams';

  sendTeamsBack = (json) => {

    const xhttp = new XMLHttpRequest();

    xhttp.open('POST', url, true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify(json));
    console.log(JSON.stringify(json));

    xhttp.onreadystatechange = () => {
      if(xhttp.readyState == 4 && xhttp.status == 200){

        //console.log(xhttp.responseText);
        
      }
    }

    teamsArray = [];

  }

  button.addEventListener('click', generateForms);
  delButton.addEventListener('click', resetForms);

}