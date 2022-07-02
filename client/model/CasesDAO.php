<?php

class CasesDAO {
       
    function get( $username ) {
        
        $connMgr = new ConnectionManager();
        $conn = $connMgr->connect();
        

        $sql = "SELECT * FROM cases WHERE requestor = :requestor";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(":requestor", $username, PDO::PARAM_STR);
            
        $user = null;
        if ( $stmt->execute() ) {
            
            while ( $row = $stmt->fetch(PDO::FETCH_ASSOC) ) {
                $user = new Cases( $row["caseno"], $row["requestor"], $row["assignee"], $row["casestatus"], $row["details"], $row["priority"], $row["updatedby"], $row["updatedat"]);
            }

        }
        else {
            $connMgr->handleError( $stmt, $sql );
        }

        $stmt = null;
        $conn = null;        
        
        return $user;
    }
    
    function create($user) {
        $result = true;

        $connMgr = new ConnectionManager();
        $conn = $connMgr->connect();

        $sql = "INSERT INTO cases (caseno, requestor, assignee, casestatus, details, priority, updatedby, updatedat) VALUES (:caseno, :requestor, :assignee,:casestatus,:details,:priority,:updatedby,:updatedat)";

        $stmt = $conn->prepare($sql);
        
        $caseno = $user->getCaseno();
        $requestor = $user->getRequestor();
        $assignee = $user->getAssignee();
        $casestatus = $user->getCasestatus();
        $details = $user->getDetails();
        $priority = $user->getPriority();
        $updatedby = $user->getUpdatedby();
        $updatedat = $user->getUpdatedat();
        
        $stmt->bindParam(":caseno", $caseno, PDO::PARAM_STR);
        $stmt->bindParam(":requestor", $requestor, PDO::PARAM_STR);
        $stmt->bindParam(":assignee", $assignee, PDO::PARAM_STR);
        $stmt->bindParam(":casestatus", $casestatus, PDO::PARAM_STR);
        $stmt->bindParam(":details", $details, PDO::PARAM_STR);
        $stmt->bindParam(":priority", $priority, PDO::PARAM_STR);
        $stmt->bindParam(":updatedby", $updatedby, PDO::PARAM_STR);
        $stmt->bindParam(":updatedat", $updatedat, PDO::PARAM_STR);
        

        $result = $stmt->execute();
        if (! $result ){ 
            $parameters = [ "user" => $user, ];
            $connMgr->handleError( $stmt, $sql, $parameters );
        }
        
        $stmt = null;
        $conn = null;        
        
        return $result;
    }

}

?>