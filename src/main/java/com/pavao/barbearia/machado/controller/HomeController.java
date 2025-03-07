package com.pavao.barbearia.machado.controller;

import com.pavao.barbearia.machado.model.Agendamento;
import com.pavao.barbearia.machado.model.Barber;
import com.pavao.barbearia.machado.model.Servico;
import com.pavao.barbearia.machado.repository.AgendamentoRepository;
import com.pavao.barbearia.machado.repository.BarberRepository;
import com.pavao.barbearia.machado.repository.ServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

public class HomeController {

    @Autowired
    private AgendamentoRepository agendamentoRepository;

    @Autowired
    private BarberRepository barberRepository;

    @Autowired
    private ServicoRepository servicoRepository;


    @GetMapping("/")
    public ModelAndView home() {
        ModelAndView mv = new ModelAndView("home");

        return mv
    }

    @GetMapping("/index")
    public ModelAndView index () {

        List<Barber> funcionarios = barberRepository.findAll();
        List<Servico> servicos = servicoRepository.findAll();

        ModelAndView page = new ModelAndView("index");
        page.addObject("agendamento", new Agendamento());
        page.addObject("funcionarios", funcionarios);
        page.addObject("servicos", servicos);
        return page;
    }

    @PostMapping("/agendamento-cliente")
    public ModelAndView agendamentoCliente (@ModelAttribute Agendamento agendamento) {

        agendamentoRepository.save(agendamento);

        ModelAndView sucessoAgendamento = new ModelAndView("redirect:/sucesso-agendamento");

        return sucessoAgendamento;
    }

    @GetMapping("/sucesso-agendamento")
    public ModelAndView boaAgendamento() {

        ModelAndView page = new ModelAndView("sucessoAgendamento");
        return page;

    }

    @GetMapping("/cadastro")
    public ModelAndView cadastro () {
        ModelAndView page = new ModelAndView("cadastro");

        page.addObject("funcionario", new Barber());

        return page;
    }

    @PostMapping("/cadastro-funcionario")
    public ModelAndView cadastroFuncionario(@ModelAttribute Barber barber) {

        barberRepository.save(barber);
        ModelAndView sucessoCadastro = new ModelAndView("redirect:/sucesso-cadastro");

        return sucessoCadastro;
    }

    @GetMapping("/sucesso-cadastro")
    public ModelAndView bemVindoFuncionario() {

        ModelAndView page = new ModelAndView("sucessoCadastro");
        return page;

    }

    @GetMapping("/orderAdmin")
    public ModelAndView adminBarber() {

        List<Agendamento> agendamentos = agendamentoRepository.findAll();

        ModelAndView pagina = new ModelAndView("orderAdmin");
        pagina.addObject("agendamentos", agendamentos);

        return pagina;

    }

    @PostMapping("/deleta-agendamento")
    public ModelAndView deleteAgendamento (@RequestParam(value = "id", required = false) Integer id
    ) {

        agendamentoRepository.deleteById(Long.valueOf(id));

        return new ModelAndView("redirect:/orderAdmin");
    }

    @GetMapping("/agenda")
    public ModelAndView agendA () {

        List<Barber> funcionarios = barberRepository.findAll();

        List<Agendamento> agendamentos = agendamentoRepository.findAll();

        ModelAndView page = new ModelAndView("agenda");
        page.addObject("agendamentos", agendamentos);
        page.addObject("funcionarios", funcionarios);

        return page;
    }

    @GetMapping("/agenda/{funcionario}")
    public ModelAndView agenda (@PathVariable("funcionario") String barber) {

        List<Agendamento> agendamentos = agendamentoRepository.findByBarber(barber);

        ModelAndView page = new ModelAndView("agenda");
        page.addObject("agendamento", agendamentos);
        return page;
    }

    @GetMapping("/login")
    public ModelAndView login () {

        ModelAndView page = new ModelAndView("login");

        return page;
    }

    @PostMapping("/valida-login")
    public ModelAndView validaLogin (@ModelAttribute Barber barber) {

        System.out.println(barber.getCpf());
        System.out.println(barber.getPassword());

        ModelAndView sucessoLogin = new ModelAndView("redirect:/orderAdmin");

        return sucessoLogin;
    }

    @GetMapping("/funcionarios")
    public ModelAndView Func () {

        List<Barber> funcionarios = barberRepository.findAll();

        ModelAndView pagina = new ModelAndView("funcionarios");
        pagina.addObject("funcionarios", funcionarios);

        return pagina;
    }

    @PostMapping("/deleta-funcionario")
    public ModelAndView deleteFuncionario (@RequestParam(value = "id", required = false) Integer id
    ) {

        barberRepository.deleteById(Long.valueOf(id));

        ModelAndView deleteFuncionario = new ModelAndView("redirect:/funcionarios");
        return deleteFuncionario;
    }

    @GetMapping("/servicos")
    public ModelAndView Serv () {

        List<Servico> servicos = servicoRepository.findAll();

        ModelAndView page = new ModelAndView("servicos");
        page.addObject("servicos", servicos);

        return page;
    }

    @GetMapping("/cadastro-servico")
    public ModelAndView cadastroServ () {
        ModelAndView page = new ModelAndView("cadastro-servico");

        page.addObject("servico", new Servico());

        return page;
    }

    @PostMapping("/cadastroServ")
    public ModelAndView cadastroServicp (@ModelAttribute Servico servico) {

        servicoRepository.save(servico);
        ModelAndView sucessoCadastro = new ModelAndView("redirect:/servicos");

        return sucessoCadastro;
    }

    @PostMapping("/deleta-servico")
    public ModelAndView deleteServico (@RequestParam(value = "id", required = false) Integer id
    ) {

        servicoRepository.deleteById(Long.valueOf(id));

        ModelAndView deleteServico = new ModelAndView("redirect:/servicos");
        return deleteServico;
    }
}
