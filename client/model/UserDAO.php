<?php

class UserDAO {
    
    function get( $username ) {
        
        $connMgr = new ConnectionManager();
        $conn = $connMgr->connect();
        

        $sql = "SELECT username, password_hash FROM client WHERE username = :username";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(":username", $username, PDO::PARAM_STR);
            
        $user = null;
        if ( $stmt->execute() ) {
            
            while ( $row = $stmt->fetch(PDO::FETCH_ASSOC) ) {
                $user = new User($row["username"], $row["password_hash"]);
            }
            
        }
        else {
            $connMgr->handleError( $stmt, $sql );
        }
        

        $stmt = null;
        $conn = null;        
        
        return $user;
    }

    function getAll() {
        
        $connMgr = new ConnectionManager();
        $conn = $connMgr->connect();

        $sql = "SELECT username, email, roles FROM cases";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $stmt->setFetchMode(PDO::FETCH_ASSOC);

        $user = []; 
        while( $row = $stmt->fetch() ) {
            $user[] =
                new Cases(
                    $row['username'],
                    $row['email'],
                    $row['roles']);
                    
                    
        }
        $stmt = null;
        $conn = null;        
        
        return $user;
    }


    function getcases( $username ) {
        
        $connMgr = new ConnectionManager();
        $conn = $connMgr->connect();
        

        $sql = "SELECT * FROM cases WHERE requestor = :requestor";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(":requestor", $username, PDO::PARAM_STR);
            
        $user = null;
        if ( $stmt->execute() ) {
            
            while ( $row = $stmt->fetch(PDO::FETCH_ASSOC) ) {
                $user = new User($row["username"], $row["password_hash"]);
            }
            
        }
        else {
            $connMgr->handleError( $stmt, $sql );
        }
        

        $stmt = null;
        $conn = null;        
        
        return $user;
    }


}