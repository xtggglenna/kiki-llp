function clientlogin(){
    var username = document.getElementById('cliuser').value
    var password = document.getElementById('clipass').value
    console.log(username)
    console.log(typeof(password))
    
    // $.ajax({
    // url:"client/process_login.php",
    // data: {
    //     "username": username,
    //     "password":password
    // },
    // type:"POST",
    // crossDomain:false,
    
    // success:function(response){
    //     response = JSON.parse(response)  
    //     console.log(response)
    //     if (response.message =="success"){
    //         sessionStorage.setItem("username", username)
    //         // window.location.href = "dashboard.html"
            
    //     }
    //     else{
    //         printErrors(response.message, 'errorscli')
    //     }
    // },
    // error : function(xhr, status, error)
    // {
    //     console.log("Status of error message" + status + "Error is" + error);
    // }   
    // })
        
    axios.get("client/process_login.php",
        {params:{
        username: username,
        password: password,
        }}).then(response=>{
        console.log(response.data)
        if(response.data.message == 'success'){
            sessionStorage.setItem("username", username)
            window.location.href = "dashboard.html"
        }
        else{
            printErrors(response.data.message, 'errorscli')
        }
        }).catch(error=>{
        alert(error)
        })
    
    }

function lawyerlogin(){
    var username = document.getElementById('regusername').value
    var password = document.getElementById('regpassword').value
    var confirmPassword = document.getElementById('regconfirmPassword').value
    var email = document.getElementById('regemail').value

    axios.get("lawyer/process_login.php",
        {params:{
        username: username,
        password: password,
    }}).then(response=>{
        console.log(response.data)
        if(response.data.message == 'success'){
            sessionStorage.setItem("username", username)
            window.location.href = "dashboard.html"
        }
        else{
            printErrors(response.data.message, 'errorslaw')
        }
        }).catch(error=>{
        alert(error)
        })
}

function printErrors(errors_arr, cliorlaw){
    errors = document.getElementById(cliorlaw)
    printerror = "<ul style='color:red;'>"
    for(error of errors_arr){
        printerror += "<li>" + error +  "</li>"
    }
    errors.innerHTML = printerror + "</ul>"
}