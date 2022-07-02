<?php
require_once 'common.php';
$data = [];
$dao = new casesDAO();

// $username ='glenna';

$username = $_GET['requestor'];
$user = $dao->get($username);
array_push($data, $user->getEveryt());

echo json_encode($data);
?>