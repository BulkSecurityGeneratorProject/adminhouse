package com.marianowal.adminhouse.repository;

import com.marianowal.adminhouse.domain.Producto;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Producto entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long>, JpaSpecificationExecutor<Producto> {

}
