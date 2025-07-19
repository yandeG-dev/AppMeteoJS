const api="cbef47a566e2a9b5115b8db5dfc9c721"
const input=document.getElementById("ville")
const btn=document.getElementById("btn")
const resultat=document.getElementById("resultat")
btn.addEventListener("click",async function(e){
    e.preventDefault()
    const ville=input.value.trim()
if (ville===""){
resultat.innerHTML="<p>Veuillez saisir une ville.</p>"
return
}
const url=`https://api.openweathermap.org/data/2.5/weather?q=${ville}&units=metric&lang=fr&appid=${api}`
try{
const response=await fetch(url)
const data=await response.json()

const t=data.main.temp
const d=data.weather[0].description
const v=data.name
const s=data.sys.country
resultat.innerHTML = `
      <h2>${v}</h2>
      <p>Température : ${t}°C</p>
      <p> Description : ${d}</p>
      <p>Système : ${s}</p>
    `;
  } catch (error) {
    resultat.innerHTML = "<p>Aucune ville trouvée.</p>";
    console.error(error);
  }

})