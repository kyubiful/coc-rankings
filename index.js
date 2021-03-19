window.onload = () => {

  var url = 'localhost:3700/equipo/teams';

  var httpGet = () => {
    var req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.onreadystatechange = (aEvt) => {
      if (req.readyState == 4){
        if(req.readyState == 200){
          return req.responseText;
        } else {
          return 'Error';
        }
      }
    };
    req.send(null);
  };

  console.log(httpGet(url));
}