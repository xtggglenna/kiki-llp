<?php

class Cases {
    private $caseno;
    private $requestor;
    private $assignee;
    private $casestatus;
    private $details;
    private $priority;
    private $documents;
    private $updatedby;
    private $updatedat;

    function __construct($caseno, $requestor, $assignee,$casestatus,$details,$priority,$documents,$updatedby,$updatedat) {
        $this->caseno = $caseno;
        $this->requestor = $requestor;
        $this->assignee = $assignee;
        $this->casestatus = $casestatus;
        $this->details = $details;
        $this->priority = $priority;
        $this->documents = $documents;
        $this->updatedby = $updatedby;
        $this->updatedat = $updatedat;
    }
    public function getDetails(){
        $obj = ["caseno"=>$this->caseno, "requestor"=>$this->requestor,"assignee"=>$this->assignee,"casestatus"=>$this->casestatus,
        "details"=>$this->details,"priority"=>$this->priority,"documents"=>$this->documents,"updatedby"=>$this->updatedby,
        "updatedat"=>$this->updatedat];
          return $obj;
      }

    public function getUsername(){
        return $this->username;
    }

    public function getPasswordHash(){
        return $this->passwordHash;
    }

    
}

