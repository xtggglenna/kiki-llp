<?php
class Cases {
    private $caseno;
    private $requestor;
    private $assignee;
    private $casestatus;
    private $details;
    private $priority;
    private $updatedby;
    private $updatedat;

    function __construct($caseno, $requestor, $assignee,$casestatus,$details,$priority,$updatedby,$updatedat) {
        $this->caseno = $caseno;
        $this->requestor = $requestor;
        $this->assignee = $assignee;
        $this->casestatus = $casestatus;
        $this->details = $details;
        $this->priority = $priority;
        $this->updatedby = $updatedby;
        $this->updatedat = $updatedat;
    }
    public function getEveryt(){
        $obj = [ "caseno"=>$this->caseno, "requestor"=>$this->requestor,"assignee"=>$this->assignee,"casestatus"=>$this->casestatus,
        "details"=>$this->details,"priority"=>$this->priority,"updatedby"=>$this->updatedby,
        "updatedat"=>$this->updatedat];
          return $obj;
      }

      public function getCaseno(){
        return $this->caseno;
    }

    public function getRequestor(){
        return $this->requestor;
    }
    public function getAssignee(){
        return $this->assignee;
    }

    public function getCasestatus(){
        return $this->casestatus;
    }

    public function getDetails(){
        return $this->details;
    }
    public function getPriority(){
        return $this->priority;
    }
    public function getUpdatedby(){
        return $this->updatedby;
    }
    public function getUpdatedat(){
        return $this->updatedat;
    }
}

