<?php

require_once 'common.php';

$two = [];
$dao = new UserDAO();
$user = $dao->getAll();

foreach($user as $index){
    // var_dump($index);

    // echo "<br><br>";
    //print_r($index);
    array_push($two,$index->getAdminDetails());
}
echo json_encode($two);
?>
