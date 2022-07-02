var username = sessionStorage.getItem("username");
// if (username === null){
//     window.location.href = "login.html";
// }

function logout() {
    sessionStorage.removeItem('username')  
    sessionStorage.clear();
    window.location.href = "login.html";
}
axios.get("client/getcase.php",{params:{
  requestor:username
}}
).then(response=>{
  console.log(response)
  console.log(response.data)
  caselist = response.data
  for(cases of caselist){
    caseno = cases.caseno
    console.log(caseno)
    requestor = cases.requestor
    casestatus = cases.casestatus
    details = JSON.parse(cases.details)
    priority = cases.priority
    assignee = cases.assignee
    updatedby = cases.updatedby
    casestatus = cases.casestatus
    updatedat = cases.updatedat
    casepart = document.getElementById('cases')
        html = `<tr>
      <td>${caseno}</td>
      <td>${requestor}</td>
      <td>${priority}</td>
      <td>${details.category}</td>
      <td>${assignee}</td>
      <td>${casestatus}</td>
      </tr> `
      casepart.innerHTML += html
  }

}).catch(error=>{
    alert(error)
})