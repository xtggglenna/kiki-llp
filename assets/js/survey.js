questions = ""

contractqn = {"Did the other contracting party abscond before performing its obligations under the contract?": "Fraud",
"Did an unfortunate event occur before all obligations under the contract were performed?" : "Frustration",
"Did you receive any monetary gains in exchange for other contracting party's service/product or vice versa?" : "Formation (consideration)",
"Did any party suggest/ made a statement that turned out to be different from the outcome of the contract/ how you thought the contract will be carried out?": "Misrepresentation",
"Was any party labouring under a mistake as to how the term was interpreted / how the contract would be carried out  / the identity of the other contracting party": "Mistake (Term/Identity)"}

// criminalqn = {
//     "Are you the victim or the accused?": {"Was there a pre-arranged plan to commit the unlawful act?":
//     "Were there two or more assailants involved in the plan?"},

//     "Was there physical injury involved?": ["Was there death involved?", "Is the victim in critical condition?"],

//     ""
// }
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
  <label class="form-check-label" for="flexRadioDefault1">
    YES
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="${contractqn[qn]}" id="flexRadioDefault2">
  <label class="form-check-label" for="flexRadioDefault2">
    NO
  </label>
</div>
      </div>

  </div>`
        
    }
    surveyhtml.innerHTML += `<div class="carousel-item ">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title pb-0">Submit to find out the category of your legal issue</h5>
      <br>
        <input type="button" id="formsub" class="btn btn-primary" value="Submit">
      </div>

  </div>`
}
else if(section == "Criminal"){
    
}
else{
    surveyhtml.innerHTML += `<div class="carousel-item ">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Description of your case</h5>
        <textarea class="card-text" rows="4" cols="50"></textarea>
        <br>
        <button type="button" id="formsub" href="#" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>`
}
surveyhtml += `</form>`

// $(function() { //getting all survey inputs 
$('#formsub').click(function() {
customersurvey = {}
console.log('hi')
$(this).closest('form').serializeArray().map(function(field, i) {
    // if(field.name.includes('*')){
        // radios = document.getElementsByName(field.name)
        // for(i=0; i<2; i++){
        //     if(radios[i].checked == true){
        //         customersurvey[field.name] = radios[i].nextElementSibling.innerText
        //     }
        // }
    // }
    // else{
        customersurvey[field.name] = field.value;            
    // }
})
    console.log(customersurvey) 
  })


termstranslate = {'Robbery/Assault/Murder' : ['Theft', 'stolen', 'Threatened', 'Slashed', 'Pushed', 'Restrained', 'Deep cut', 'bruises and contusions'], 
'Missrepresentation/Mistake' : ['Lies', 'Claim', 'Suggest', 'Mistakenly thought', 'Cheated', 'Imposter', 'Fake', 'Forged', 'did not know', 'assumed', 'false']
}

var today = new Date(); 
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

username = sessionStorage.getItem("username")
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