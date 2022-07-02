results = sessionStorage.getItem("results")
displayresults = document.getElementById('displayresults')
console.log(results)
categoryresults = results.split(',')

for(res of categoryresults){
    displayresults.innerHTML += `<div class="form-check">
    <input class="form-check-input" type="checkbox" value="${res}" id="flexCheckDefault" name="${res}">
    <label class="form-check-label" for="flexCheckDefault">
      ${res}
    </label>
  </div>`
}
displayresults.innerHTML += `
<br><button type="button" id="formsub" href="#" class="btn btn-primary" >Submit</button>
`
$('#formsub').click(function() {
    customerresults = []
    console.log('hi')
    $(this).closest('form').serializeArray().map(function(field, i) {
        customerresults.push(field.value)
    })
        console.log(customerresults) 

    
var today = new Date(); 
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

// username = sessionStorage.getItem("username")

// console.log(sessionStorage.getItem('results'))

// url = 
// axios.get(url,
//   {params:{
//       username: username,
//       // priority: ,
//       category: customersurvey,
//       // assignee: , 
//       updatedby: username,
//       updatedat: dateTime
//   }}).then(response=>{
//       console.log(response.data)
//       window.location.href = "results.html";

//   }).catch(error=>{
//       alert(error)
//   })

        //   window.location.href = "cases.html"\



  })