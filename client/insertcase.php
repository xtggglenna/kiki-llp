<?php
require_once 'common.php';
$caseno = $_GET["caseno"];
$requestor = $_GET["requestor"];
$assignee = $_GET["assignee"];
$casestatus = $_GET["casestatus"];
$details = $_GET["details"];
$priority = $_GET["priority"];
$updatedby = $_GET["updatedby"];
$updatedat = $_GET["updatedat"];

// $caseno = 1;
// $requestor =  'test';
// $assignee = 'test';
// $casestatus = 'test';
// // $details =   $_GET["details"];
// $details =  `{"test":"test"}`;
// $priority = 'test';
// $updatedby = 'test';
// $updatedat =  '2019-01-23 22:00:00';

// $inputs = {'test'=>'test'}
$new_user = new cases($caseno, $requestor, $assignee,$casestatus,$details,$priority,$updatedby,$updatedat);

$dao = new casesDAO();

$status = $dao->create($new_user);

echo json_encode($status);

?>
