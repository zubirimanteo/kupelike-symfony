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
                WHERE upper(u.nombre) LIKE upper(:string) OR upper(u.direccion) LIKE upper(:string)')
                ->setParameter('string','%'.$string.'%')
                ->getResult();
    }
}
