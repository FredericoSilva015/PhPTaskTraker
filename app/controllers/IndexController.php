<?php

use Phalcon\Mvc\Controller;

class IndexController extends ControllerBase
{

    public function indexAction()
    {
      $this->view->task = Task::find();
    }
    // calls the last id from the table if available
    public function idAction()
    {
      $this->view->disable();//stop the page update
      $taskId = Task::find();//call the table
      $id = $taskId->getLast();//get last record
      $this->response->setJsonContent($id);//convert it to Json for the view

      return $this->response;
    }
    //insets a new row on the table
    public function insertAction()
    {
      $this->view->disable();//stop the page update

      $task = new Task();
      $task->ID = $this->request->getPost("id");
      $task->Name = $this->request->getPost("name");
      $task->Action = "Pending";
      $task->Position = 1;
      $task->Date = date("Y-m-d");
      $task->save();
    }
    // deletes the corresponding task on the table
    public function deleteDbAction()
    {
      $this->view->disable();//stop the page update

      $var = $this->request->getPost("id");
      $this->db->delete("Task", "ID = '$var'");
    }
    // updates the position on the DB for the current position
    public function changeAction()
    {
      $this->view->disable();//stop the page update

      $id = $this->request->getPost("id");
      $act = $this->request->getPost("act");
      $task = Task::findFirst($id);
      $task->Action = $act;
      $task->update();

    }

}
