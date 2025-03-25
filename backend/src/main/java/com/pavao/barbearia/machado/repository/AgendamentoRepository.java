package com.pavao.barbearia.machado.repository;

import com.pavao.barbearia.machado.model.Agendamento;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AgendamentoRepository extends JpaRepository<Agendamento,Long> {

    public List<Agendamento> findByBarber(String barber);
    public List<Agendamento> findById(String id);

}
