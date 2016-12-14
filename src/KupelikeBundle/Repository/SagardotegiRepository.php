<?php

namespace KupelikeBundle\Repository;

/**
 * SagardotegiRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class SagardotegiRepository extends \Doctrine\ORM\EntityRepository
{
    public function findByLetters($string){
        return $this->getEntityManager()->createQuery('SELECT u FROM KupelikeBundle:Sagardotegi u  
                WHERE u.nombre LIKE :string OR u.direccion LIKE :string')
                ->setParameter('string','%'.$string.'%')
                ->getResult();
    }
}
