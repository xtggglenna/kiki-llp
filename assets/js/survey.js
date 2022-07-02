questions = ""

contractqn = {"Did the other contracting party abscond before performing its obligations under the contract?": "Fraud",
"Did an unfortunate event occur before all obligations under the contract were performed?" : "Frustration",
"Did you receive any monetary gains in exchange for other contracting party's service/product or vice versa?" : "Formation (consideration)",
"Did any party suggest/ made a statement that turned out to be different from the outcome of the contract/ how you thought the contract will be carried out?": "Misrepresentation",
"Was any party labouring under a mistake as to how the term was interpreted / how the contract would be carried out  / the identity of the other contracting party": "Mistake (Term/Identity)"}

criminalqn = {
"Were there two or more assailants involved in the plan?" : "Conspiracy/Abetment",
"Was there death involved?" : "Murder",
"Did you cause the victim's injury (but no death was involved)?": "Attempted Murder/Voluntarily Causing Hurt/Grievous hurt",
"Were there any forms of indecency? (eg. touching of others without permission, stalking, harassment, etc.)" : "Battery/Assault/Harassment",
"Was there misuse of company funds or forging of documents involved?" : "Cheating"
}
section = sessionStorage.getItem('category')
categories = []
surveyhtml = document.getElementById('surveyqns')
console.log(surveyhtml)
if(section == "Contract"){
    for (qn in contractqn){
      surveyhtml.innerHTML += `<div class="carousel-item ">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${qn}</h5>
        <div class="form-check justify-content-center">
  <input class="form-check-input" type="radio" name="${contractqn[qn]}" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">YES</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="${contractqn[qn]}" id="flexRadioDefault2">
  <label class="form-check-label" for="flexRadioDefault2">NO</label>
</div>
      </div>
  </div>`
    }
  surveyhtml.innerHTML += `</form>`

    surveyhtml.innerHTML += `<div class="carousel-item ">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title pb-0">Submit to find out the category of your legal issue</h5>
      <br>
        <input type="button" id="formsub" class="btn btn-primary" value="Submit">
      </div>
  </div>`
  $('#formsub').click(function() {
    customersurvey = {}
    console.log('hi')
    $(this).closest('form').serializeArray().map(function(field, i) {
            radios = document.getElementsByName(field.name)
            for(i=0; i<2; i++){
                if(radios[i].checked == true){
                    customersurvey[field.name] = radios[i].nextElementSibling.innerText
                }
            }
    })
        console.log(customersurvey) 
      })
    for(term in customersurvey){
      if(customersurvey[term] == 'YES'){
        categories.push(term)
      }
    }
}


else if(section == "Criminal"){
  for (qn in criminalqn){
    surveyhtml.innerHTML += `<div class="carousel-item ">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">${qn}</h5>
      <div class="form-check justify-content-center">
<input class="form-check-input" type="radio" name="${criminalqn[qn]}" id="flexRadioDefault1">
<label class="form-check-label" for="flexRadioDefault1">YES</label>
</div>
<div class="form-check">
<input class="form-check-input" type="radio" name="${criminalqn[qn]}" id="flexRadioDefault2">
<label class="form-check-label" for="flexRadioDefault2">NO</label>
</div>
    </div>
</div>`
  }
surveyhtml.innerHTML += `</form>`

  surveyhtml.innerHTML += `<div class="carousel-item ">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title pb-0">Submit to find out the category of your legal issue</h5>
    <br>
      <input type="button" id="formsub" class="btn btn-primary" value="Submit">
    </div>
</div>`
$('#formsub').click(function() {
  customersurvey = {}
  console.log('hi')
  $(this).closest('form').serializeArray().map(function(field, i) {
          radios = document.getElementsByName(field.name)
          for(i=0; i<2; i++){
              if(radios[i].checked == true){
                  customersurvey[field.name] = radios[i].nextElementSibling.innerText
              }
          }
  })
      console.log(customersurvey) 
    
  for(term in customersurvey){
    if(customersurvey[term] == 'YES'){
      newcat = term.split('/')
      
      for (e of newcat){
        categories.push(e)
      }
      // categories.push(term)
      
    }
    console.log(categories)
  }
})
}
else{
    surveyhtml.innerHTML += `<div class="carousel-item ">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Description of your case</h5>
        <textarea name="description" class="card-text" rows="4" cols="50"></textarea>
        <br>
        <button type="button" id="formsub" href="#" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>`
  surveyhtml += `</form>`
  $('#formsub').click(function() {
    customersurvey = {}
    console.log('hi')
    $(this).closest('form').serializeArray().map(function(field, i) {
      customersurvey[field.name] = field.value
    })
        // console.log(customersurvey) 
        text = customersurvey['description'].split(' ')
        const desctext = text.map(element => {
          return element.toLowerCase();
        });
        // console.log(desctext)
        for(termsection in termstranslate){
          if(termstranslate[termsection].some(r=> desctext.includes(r))){
            categories = termsection.split('/')
          }
        }
        // console.log(categories)
      })
}



termstranslate = {'Robbery/Assault/Murder' : ['theft', 'stolen', 'threatened', 'slashed', 'pushed', 'restrained', 'cut', 'bruises'], 
'Missrepresentation/Mistake' : ['lies', 'claim', 'suggest', 'mistaken', 'cheated', 'imposter', 'fake', 'forged', 'assumed', 'false']
}

var today = new Date(); 
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

username = sessionStorage.getItem("username")
// username = sessionStorage.setItem("categories")

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