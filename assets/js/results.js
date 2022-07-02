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
        window.location.href = "cases.html"

    
var today = new Date(); 
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

// username = sessionStorage.getItem("username")
// description = sessionStorage.getItem('description')
// username = sessionStorage.getItem('username')
// console.log(sessionStorage.getItem('description'))
// category = {'categories':customerresults, 'description': description}
// url = 'client/insertcase.php'
// axios.get(url,
//   {params:{
//       requestor: username,
//       priority: 'high',
//       details: category,
//       assignee: 'jiemin', 
//       updatedby: username,
//       updatedat: dateTime
//   }}).then(response=>{
//       console.log(response.data)
//     // window.location.href = "cases.html"

//   }).catch(error=>{
//       alert(error)
//   })

  })