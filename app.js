var select = document.querySelectorAll("select")
var input = document.querySelectorAll("input")
var url = "http://api.exchangeratesapi.io/v1/latest?access_key="
var key = "75dbdd8869c0d0bc7f7ce69e2c3a0822"
var html = ""



async function currency(){
  // fetching data from API
  var res = await fetch(url + key)
  
  // convert to data that we can use
  var data = await res.json()
  
  // to access the object keys
  var arrays = Object.keys(data.rates)
  var rates = data.rates
  
  arrays.map(item => {
    html += '<option value='  +item +'>' +item+ '</option>'
    return html
  })
  
  for(var i=0; i<select.length; i++){
    select[i].innerHTML = html
  }
  
  function converter(i,j){
     input[1].value = input[0].value * rates[select[1].value] / rates[select[0].value]
  }
  // console.log(rates[select[1].value]) //rates
   input[0].addEventListener("keyup", ()=> converter(1,0))
   
    input[1].addEventListener("keyup", ()=> converter(0,1))
    
     select[0].addEventListener("change", ()=> converter(1,0))
   
   
    select[1].addEventListener("change", ()=> converter(0,1))
  
}

currency()