const time = document.querySelector('#time')
const today = document.querySelector('#date')
const usTime = document.querySelector('#usTime')

setInterval(function(){
  const date = new Date();
  today.innerHTML = date.toLocaleDateString('en-GB')
  time.innerHTML = date.toLocaleTimeString();
  usTime.innerHTML = date.toLocaleTimeString('en-US', {
  timeZone: 'America/New_York'
});

},1000)
