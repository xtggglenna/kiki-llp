function survey(e){
    console.log(e.id)
    sessionStorage.setItem("category", e.id)
    window.location.href = 'survey.html'
}