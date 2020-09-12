// import GMaps from './gmaps';
const init = () => {
    
const copySvg = document.querySelector('.copySvg')
copySvg.addEventListener('click', ()=>{
    const ipIU = document.querySelector('.ip')
    ipIU.select();
    ipIU.setSelectionRange(0, 99999);
    
    try {
        document.execCommand("copy") ?
        alert('Ip is now on clipBoard for your convinience.') : 
        alert('Something went Wrong... Try again') 
    } catch (error) {
        console.error('Unable to copy', error);
    }

}, false)
const newMap = (lat, lng ) => new GMaps({
    div: '#map',
    lat,
    lng
});

const query = fetch('https://ipinfo.io/json').then(response => response.json())
.then(
    data => 
    {let {ip, org, city, region, country, loc, postal} = data
    newMap(loc.substring(0,8), loc.substring(9,loc.length) )
    const ipUI = document.querySelector('.ip')
    ipUI.value = ip
    const locationUI = document.querySelector('.location')
    locationUI.innerHTML = `${city}, ${region}, ${country}`

})
.catch(err => console.error(err));
 


}

init() 
// window.onload = ()=>{   
//     init()
//     console.log('init just ran')
// }

