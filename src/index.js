// import GMaps from './gmaps';
const init = () => {
  const copySvg = document.querySelector(".copySvg");
  const mapDiv = document.querySelector("#map");
  let location =  { lat: 0,lng: 0}
  copySvg.addEventListener(
    "click",
    () => {
      const ipIU = document.querySelector(".ip");
      ipIU.select();
      ipIU.setSelectionRange(0, 99999);

      try {
        document.execCommand("copy")
          ? alert("Ip is now on clipBoard for your convinience.")
          : alert("Something went Wrong... Try again");
      } catch (error) {
        console.error("Unable to copy", error);
      }
    },
    false
  );


  fetch("https://ipinfo.io/json")
    .then((response) => response.json())
    .then((data) => {
      let { ip, org, city, region, country, loc, postal } = data;
      const lat = parseFloat(loc.substring(0, 6))
      const lng = parseFloat(loc.substring(8, loc.length))
      location = { lat, lng}
      localStorage.setItem('location', JSON.stringify(location))
      const ipUI = document.querySelector(".ip");
      ipUI.value = ip;
      const locationUI = document.querySelector(".location");
      locationUI.innerHTML = `${city}, ${region}, ${country}`;
    })
    .catch((err) => console.error(err));


};

init();

