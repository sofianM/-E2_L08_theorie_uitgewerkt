document.getElementById("knopTheorie").addEventListener("click", toonTekst);

function toonTekst(){
  const titel = document.getElementById("titel").innerHTML;
  const voornaam = document.getElementById("voornaam").value;

  let div = document.getElementById("divContent");

  let eersteAlinea = document.createElement("p");
  eersteAlinea.innerHTML = "De titel van deze webpagina is:";
  div.appendChild(eersteAlinea);

  let tweedeAlinea = document.createElement("p");
  tweedeAlinea.innerHTML = titel;
  div.appendChild(tweedeAlinea);

  let derdeAlinea = document.createElement("p");
  derdeAlinea.innerHTML = "De voornaam die je ingaf is: ";
  div.appendChild(derdeAlinea);

  let laatsteAlinea = document.createElement("p");
  laatsteAlinea.innerHTML = voornaam;
  div.appendChild(laatsteAlinea);
}