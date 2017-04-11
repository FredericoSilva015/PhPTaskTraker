<?php

class Task extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     * @Primary
     * @Identity
     * @Column(type="integer", length=3, nullable=false)
     */
    public $ID;

    /**
     *
     * @var string
     * @Column(type="string", nullable=false)
     */
    public $Name;

    /**
     *
     * @var string
     * @Column(type="string", nullable=false)
     */
    public $Action;

    /**
     *
     * @var integer
     * @Column(type="integer", length=3, nullable=false)
     */
    public $Position;

    /**
     *
     * @var string
     * @Column(type="string", nullable=false)
     */
    public $Date;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("kimanager");
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'task';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Task[]|Task
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Task
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
