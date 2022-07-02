<?php
    require_once "common.php";
    ini_set('display_errors', 1);



    $errors = [];

    $username = $_GET["username"];
    $password = $_GET["password"];
    
    $dao = new UserDAO();
    $user = $dao->get( $username );
    $data = [];
    if ($user)
    {

        $hashed_password = $user->getPasswordHash();

        $status = password_verify( $password, $hashed_password); 

        if ($status)
        { 
            $data["message"] = "success";
        }
        else
        {
            $errors [] = "Invalid password.";
            $data["message"] = $errors;
        }

    } else
    {
        $errors [] = "Username does not exist in the database.";
        $data["message"] = $errors;
    }
    echo json_encode($data);
?>
