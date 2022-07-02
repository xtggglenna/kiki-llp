<?php

class User {
    private $username;
    private $passwordHash;

    function __construct($username, $passwordHash) {
        $this->username = $username;
        $this->passwordHash = $passwordHash;
    }
    public function getDetails(){
        $obj = ["username"=>$this->username, "passwordHash"=>$this->passwordHash];
          return $obj;
      }

    public function getUsername(){
        return $this->username;
    }

    public function getPasswordHash(){
        return $this->passwordHash;
    }

    
}

