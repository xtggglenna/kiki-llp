<?php

spl_autoload_register(function($class) {
    $path = "model/" . $class . ".php";
    require_once $path; 
    
});

?>

