$(document).ready(function() {
    $("#calendar").evoCalendar({
        language: "pt",
        theme: 'Royal Navy',
        calendarEvents:[ 
            // ---------- Janeiro 2022
              {
                id: "capmg",
                name: "CAPMG",
                description: "08/01 a 17/01 - Período para <b>substituição</b> de remessa das informações <b>(ref. Novembro/2021)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["January/08/2022","January/17/2022"],
                type: "event"
            },
            {
                id: "capmg",
                name: "CAPMG",
                description: "01/01 a 31/01 - Período para <b>envio</b> de remessa das informações <b>(ref. Dezembro/2021)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["January/01/2022","January/31/2022"],
                type: "event"
            },
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/01 a 10/02 - Período para <b>envio</b> de remessa das informações <b>(ref. Novembro/2021)</b> relativas às concessões de benefícios de Aposentadoria, Pensão e Cancelamentos (art. 3º, caput, da IN. 03/2011, com redação dada pelo art. 1° da IN 05/13)",
                date: ["January/01/2021","January/10/2022"],
                type: "event",
                color: "#ffc252"
            },
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/01 a 09/02 - Período para <b>envio</b> de remessa das informações <b>(ref. Dezembro/2021)</b> relativas às concessões de benefícios de Aposentadoria, Pensão e Cancelamentos (art. 3º, caput, da IN. 03/2011, com redação dada pelo art. 1° da IN 05/13)",
                date: ["January/01/2022","February/09/2022"],
                type: "event",
                color: "#ffc252"
            },
            {
                id: "lrf",
                name: "LRF - Exec Municipal",
                description: "Último dia para publicação do Relatório Resumido da Execução Orçamentária (RREO) do <b>6º bimestre do exercício anterior</b> (art. 165, § 3º da C.R/88 c/c o art. 52 da LRF).",
                date: "January/30/2022",
                type: "event",
                color: "#d14d4d"
            },
            {
                id: "lrf",
                name: "LRF - Exec e Legis Mun.",
                description: "Último dia para publicação do Relatório de Gestão Fiscal (RGF) do <b>2º semestre do exercício anterior</b>, para municípios com <b>menos de 50.000 habitantes</b>, optantes pelo envio semestral (art. 63, § 1º da LRF). <br> Último dia para publicação do Relatório de Gestão Fiscal (RGF) do <b>3º quadrimestre do exercício anterior</b>, para municípios com <b>mais de 50.000 habitantes</b> e para municípios <b>não optantes</b> pelo envio semestral (art. 54 c/c art. 55, § 2º da LRF).",
                date: "January/30/2022",
                type: "event",
                color: "#d14d4d"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/01 a 31/01 - Período para <b>substituição</b> das informações do módulo Acompanhamento Mensal (AM), relativas ao mês de <b>novembro</b> do exercício anterior (art. 13, I, da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! O reenvio do módulo Acompanhamento Mensal invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.</b>",
                date: ["January/08/2022","January/17/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Exec Municipal",
                description: "01/01 a 31/01 - Período de <b>envio</b> das informações do módulo Instrumentos de Planejamento (IP), relativas ao <b>PPA, LDO e LOA</b>, acompanhadas dos textos integrais das referidas leis (art. 5º, § 1º, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["January/01/2022","January/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/01 a 31/01 - Período para <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>dezembro</b> do exercício anterior (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Inconsistências ou impropriedades posteriormente verificadas no balancete contábil serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b>",
                date: ["January/01/2022","January/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/01 a 31/01 - Período para <b>envio</b> das informações do módulo Acompanhamento Mensal (AM), relativas ao mês de <b>dezembro</b> do exercício anterior (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! O reenvio do módulo Acompanhamento Mensal invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.</b>",
                date: ["January/01/2022","January/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/01 a 31/03 - Período de <b>envio</b> das informações do módulo Demonstrações Contábeis Aplicadas ao Setor Público (DCASP), juntamente com os documentos especificados nos anexos I a VIII, da INTC n° 04/2017, em formato PDF (art. 10 da INTC nº 03/2015, alterada pela INTC nº 02/2017, e art. 2º, §2°, da INTC nº 04/2017), para comporem a <b>Prestação de Contas Anual</b> do exercício anterior.",
                date: ["January/01/2022","March/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "01/01 a 31/01 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>dezembro</b> do exercício anterior (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["January/01/2022","January/31/2022"],
                type: "event",
                color: "#00d1d1"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "Considerando que o Módulo Edital não pode ser enviado sem que o IP-Instrumento de Planejamento já tenha sido enviado e que a data limite de envio do IP é 31/01 do ano exercício, os prazos de envio do Módulo Edital no mês de Janeiro é: <b>Até 5 (cinco) dias úteis após a data de envio do IP</b>, caso a data de publicação do edital tenha sido anterior ou igual à data de envio do IP ou até 5 (cinco) dias úteis após a data de publicação do edital se esta for posterior à data de envio do IP. A tabela abaixo resume esta situação. <br> <b>ATENÇÃO! Podem ser encaminhados mais de um edital em uma mesma remessa, como também, serem encaminhadas mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["January/01/2022","February/05/2022"],
                type: "event",
                color: "#00d1d1"
            },


            // ---------- Fevereiro 2022
            {
                id: "capmg",
                name: "CAPMG",
                description: "08/02 a 17/02 - Período para <b>substituição</b> de remessa das informações <b>(ref. Dezembro/2021)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["February/08/2022","February/17/2022"],
                type: "event"
            },
            {
                id: "capmg",
                name: "CAPMG",
                description: "01/02 a 28/02 - Período para <b>envio</b> de remessa das informações <b>(ref. Janeiro/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["February/01/2022","February/28/2022"],
                type: "event"
            },
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/02 a 14/03 - Período para <b>envio</b> de remessa das informações <b>(ref. Janeiro/2022)</b> relativas às concessões de benefícios de Aposentadoria, Pensão e Cancelamentos (art. 3º, caput, da IN. 03/2011, com redação dada pelo art. 1° da IN 05/13)",
                date: ["February/01/2021","March/14/2022"],
                type: "event",
                color: "#ffc252"
            },
            {
                id: "lrf",
                name: "LRF - Exec Municipal",
                description: "Último dia para realização de audiência pública para demonstrar e avaliar o cumprimento das metas fiscais do <b>3º quadrimestre do exercício anterior</b> (art. 9º, § 4º da LRF).",
                date: "February/28/2022",
                type: "event",
                color: "#d14d4d"
            },
            {
                id: "sicom",
                name: "SICOM - Exec Municipal",
                description: "Último dia para <b>reenvio</b> das informações do módulo Instrumentos de Planejamento, relativas ao <b>PPA, LDO e LOA</b> (art. 12, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: "February/20/2022",
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/02 a 28/02 - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>janeiro</b> do exercício atual (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["February/01/2022","February/28/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Último dia para <b>envio</b> das informações do módulo Balancete Contábil relativas ao <b>encerramento do exercício anterior</b> (art. 9º, caput, da INTC 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Inconsistências ou impropriedades posteriormente verificadas no balancete contábil serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b>",
                date: "February/15/2022",
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/02 a 28/02 - Prazo de <b>envio</b> das informações de Acompanhamento Mensal (AM) relativas ao mês de <b>janeiro</b> (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["February/01/2022","February/28/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "08/02 a 17/02 - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal (AM) relativas ao mês de <b>dezembro do exercício anterior</b> (art. 13, inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["February/8/2022","February/17/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "21/02 a 28/02 - Período destinado ao <b>reenvio</b> permitido das informações do módulo de Acompanhamento Mensal (AM) relativas aos meses de <b>novembro e dezembro do exercício anterior</b>. <br> <b>ATENÇÃO! O reenvio do módulo Acompanhamento Mensal invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.</b>",
                date: ["February/21/2022","February/28/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019). <br> <b>ATENÇÃO! Podem ser encaminhados mais de um edital em uma mesma remessa, como também, serem encaminhadas mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["February/01/2022","March/05/2022"],
                type: "event",
                color: "#00d1d1"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "01/02 a 28/02 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>janeiro</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["February/01/2022","February/28/2022"],
                type: "event",
                color: "#00d1d1"
            },


            // Março 2022
            {
                id: "capmg",
                name: "CAPMG",
                description: "08/03 a 17/03 - Período para <b>substituição</b> de remessa das informações <b>(ref. Janeiro/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["March/08/2022","March/17/2022"],
                type: "event"
            },
            {
                id: "capmg",
                name: "CAPMG",
                description: "01/03 a 31/03 - Período para <b>envio</b> de remessa das informações <b>(ref. Fevereiro/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["March/01/2022","March/31/2022"],
                type: "event"
            },
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/03 a 11/04 - Período para <b>envio</b> de remessa das informações <b>(ref. Fevereiro/2022)</b> relativas às concessões de benefícios de Aposentadoria, Pensão e Cancelamentos (art. 3º, caput, da IN. 03/2011, com redação dada pelo art. 1° da IN 05/13)",
                date: ["March/01/2021","April/11/2022"],
                type: "event",
                color: "#ffc252"
            },
            {
                id: "lrf",
                name: "LRF - Exec Municipal",
                description: "Último dia para publicação do Relatório Resumido da Execução Orçamentária (RREO) do <b>1º bimestre do exercício atual</b> (art. 165, § 3º da C.R/88 c/c o art. 52 da LRF).",
                date: "March/30/2022",
                type: "event",
                color: "#d14d4d"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Último dia para <b>envio</b> das informações do módulo Demonstrações Contábeis Aplicadas ao Setor Público (DCASP) relativas ao <b>encerramento do exercício anterior</b>, em formato PDF de cada órgão (art. 10, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: "March/31/2022",
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Último dia para que o Prefeito Municipal efetue o <b>envio</b> das informações do módulo Demonstrações Contábeis Aplicadas ao Setor Público consolidadas do município, juntamente com os documentos especificados nos anexos I a VIII, da INTC n° 04/2017 (art. 10, § 1º, da INTC nº 03/2015, alterada pela INTC nº 02/2017 e art. 2º, §2°, da INTC nº 04/2017), para comporem a <b>Prestação de Contas Anual</b> do exercício anterior.",
                date: "March/31/2022",
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Último dia de período para <b>reenvio</b> das informações do módulo Demonstrações Contábeis Aplicadas ao Setor Público para comporem a <b>Prestação de Contas Anual</b> do exercício anterior.",
                date: "March/31/2022",
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/03 a 31/03 - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>fevereiro</b> do exercício atual (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Inconsistências ou impropriedades posteriormente verificadas no balancete contábil serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b>",
                date: ["March/01/2022","March/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/03 a 31/03 - Período para <b>envio</b> das informações do módulo de Acompanhamento Mensal (AM) relativas ao mês de <b>fevereiro</b> do exercício atual (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017)",
                date: ["March/01/2022","March/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "08/03 a 17/03 - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal (AM) relativas ao mês de <b>janeiro</b> do exercício atual (art. 13, Inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! O reenvio do módulo Acompanhamento Mensal invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.</b>",
                date: ["March/08/2022","March/17/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "19/03 a 31/03 - Período para <b>reenvio</b> das remessas do módulo Acompanhamento Mensal (AM) do <b>exercício anterior</b>, para fins de prestação de contas (art. 3º, §1º, da INTC 04/2017). <br><b>ATENÇÃO! Encerrado o prazo final para reenvio das informações em 31 de março, o último relatório consolidado será considerado como base para a análise da prestação de contas anual (art. 3°, §3°, da INTC Nº 04/2017).</b>",
                date: ["March/19/2022","February/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019). <br><b>ATENÇÃO! Podem ser encaminhados mais de um edital em uma mesma remessa, como também, serem encaminhadas mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["March/01/2022","April/05/2022"],
                type: "event",
                color: "#00d1d1"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "01/03 a 31/03 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>fevereiro</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["March/01/2022","March/31/2022"],
                type: "event",
                color: "#00d1d1"
            },


            // Abril 2022
            {
                id: "capmg",
                name: "CAPMG",
                description: "08/04 a 17/04 - Período para <b>substituição</b> de remessa das informações <b>(ref. Fevereiro/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["April/08/2022","April/17/2022"],
                type: "event"
            },
            {
                id: "capmg",
                name: "CAPMG",
                description: "01/04 a 30/04 - Período para <b>envio</b> de remessa das informações <b>(ref. Março/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["April/01/2022","April/30/2022"],
                type: "event"
            },
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/04 a 10/05 - Período para <b>envio</b> de remessa das informações <b>(ref. Março/2022)</b> relativas às concessões de benefícios de Aposentadoria, Pensão e Cancelamentos (art. 3º, caput, da IN. 03/2011, com redação dada pelo art. 1° da IN 05/13)",
                date: ["April/01/2021","May/10/2022"],
                type: "event",
                color: "#ffc252"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/04 a 30/04 - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>março</b> do exercício atual (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Inconsistências ou impropriedades posteriormente verificadas no balancete contábil serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b>",
                date: ["April/01/2022","April/30/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/04 a 30/04 - Período para <b>envio</b> das informações do módulo de Acompanhamento Mensal (AM) relativas ao mês de <b>março</b> do exercício atual (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017)",
                date: ["April/01/2022","April/30/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "08/04 a 17/04 - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal (AM) relativas ao mês de <b>fevereiro</b> do exercício atual (art. 13, Inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["April/08/2022","April/17/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "21/04 a 28/04 - Período destinado ao <b>último reenvio</b> permitido das informações do Acompanhamento Mensal (AM) relativas aos meses de <b>janeiro e fevereiro do exercício atual</b> (art. 13, Inc. II, da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Após esse prazo, as informações serão consideradas validadas e não mais poderão ser alteradas (art. 15, § 2º, da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b> <br><b>ATENÇÃO! O reenvio do módulo Acompanhamento Mensal invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.</b>",
                date: ["April/21/2022","April/28/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Exec Municipal",
                description: "01/04 a 15/04 - Período para o chefe do Poder Executivo <b>requerer</b> a alteração de dados dos arquivos do AM do exercício anterior após 31 de março no Portal do Sicom, por meio da funcionalidade 'Autorizar Substituta-PCA/Ano Referência - INTC n° 04/2017' (art. 3º, §4º, da INTC nº 04/2017). <br> <b>ATENÇÃO! Esta substituição deverá ocorrer em até 05 dias úteis da data da autorização.</b>",
                date: ["April/01/2022","April/15/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019). <br><b>ATENÇÃO! Podem ser encaminhados mais de um edital em uma mesma remessa, como também, serem encaminhadas mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["April/01/2022","May/05/2022"],
                type: "event",
                color: "#00d1d1"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "01/04 a 30/04 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>março</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["April/01/2022","April/30/2022"],
                type: "event",
                color: "#00d1d1"
            },


            // Maio 2022
            {
                id: "capmg",
                name: "CAPMG",
                description: "08/05 a 17/05 - Período para <b>substituição</b> de remessa das informações <b>(ref. Março/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["May/08/2022","May/17/2022"],
                type: "event"
            },
            {
                id: "capmg",
                name: "CAPMG",
                description: "01/05 a 31/05 - Período para <b>envio</b> de remessa das informações <b>(ref. Abril/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["May/01/2022","May/31/2022"],
                type: "event"
            },
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/05 a 09/06 - Período para <b>envio</b> de remessa das informações <b>(ref. Abril/2022)</b> relativas às concessões de benefícios de Aposentadoria, Pensão e Cancelamentos (art. 3º, caput, da IN. 03/2011, com redação dada pelo art. 1° da IN 05/13)",
                date: ["May/01/2021","June/09/2022"],
                type: "event",
                color: "#ffc252"
            },
            {
                id: "lrf",
                name: "LRF - Exec e Legis Mun.",
                description: "Último dia para publicação do Relatório de Gestão Fiscal (RGF) do <b>1º quadrimestre do exercício atual</b>, para municípios <b>com mais de 50.000 habitantes</b> e para municípios <b>não optantes</b> pelo envio semestral (art. 54 c/c art. 55, § 2º da LRF).",
                date: "May/30/2022",
                type: "event",
                color: "#d14d4d"
            },
            {
                id: "lrf",
                name: "LRF - Exec Municipal",
                description: "Último dia para publicação do Relatório Resumido da Execução Orçamentária (RREO) do <b>2º bimestre do exercício atual</b> (art. 165, § 3º da C.R/88 c/c o art. 52 da LRF).",
                date: "May/30/2022",
                type: "event",
                color: "#d14d4d"
            },
            {
                id: "lrf",
                name: "LRF - Exec Municipal",
                description: "Último dia para realização de audiência pública para demonstrar e avaliar o cumprimento das metas fiscais do <b>1º quadrimestre do exercício atual</b> (art. 9º, § 4º da LRF).",
                date: "May/31/2022",
                type: "event",
                color: "#d14d4d"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/05 a 31/05 - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>abril</b> do exercício atual (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Inconsistências ou impropriedades posteriormente verificadas no balancete contábil serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b>",
                date: ["May/01/2022","May/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/05 a 31/05 - Período para <b>envio</b> das informações do módulo de Acompanhamento Mensal (AM) relativas ao mês de <b>abril</b> do exercício atual (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017)",
                date: ["May/01/2022","May/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "08/05 a 17/05 - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal (AM) relativas ao mês de <b>março</b> do exercício atual (art. 13, Inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br><b>ATENÇÃO! O reenvio do módulo Acompanhamento Mensal invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.</b>",
                date: ["May/08/2022","May/17/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019). <br><b>ATENÇÃO! Podem ser encaminhados mais de um edital em uma mesma remessa, como também, serem encaminhadas mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["May/01/2022","June/05/2022"],
                type: "event",
                color: "#00d1d1"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "01/04 a 31/04 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>abril</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["May/01/2022","May/31/2022"],
                type: "event",
                color: "#00d1d1"
            },


             // Junho 2022
             {
                id: "capmg",
                name: "CAPMG",
                description: "08/06 a 17/06 - Período para <b>substituição</b> de remessa das informações <b>(ref. Abril/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["June/08/2022","June/17/2022"],
                type: "event"
            },
            {
                id: "capmg",
                name: "CAPMG",
                description: "01/06 a 31/06 - Período para <b>envio</b> de remessa das informações <b>(ref. Maio/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["June/01/2022","June/31/2022"],
                type: "event"
            },
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/06 a 11/07 - Período para <b>envio</b> de remessa das informações <b>(ref. Maio/2022)</b> relativas às concessões de benefícios de Aposentadoria, Pensão e Cancelamentos (art. 3º, caput, da IN. 03/2011, com redação dada pelo art. 1° da IN 05/13)",
                date: ["June/01/2021","July/11/2022"],
                type: "event",
                color: "#ffc252"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/06 a 30/06 - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>maio</b> do exercício atual (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Inconsistências ou impropriedades posteriormente verificadas no balancete contábil serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b>",
                date: ["June/01/2022","June/30/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/06 a 30/06 - Período para <b>envio</b> das informações relativas ao módulo Acompanhamento Mensal (AM) do mês de <b>maio</b> do exercício atual (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["June/01/2022","June/30/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "08/06 a 17/06 - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal (AM) relativas ao mês de <b>abril</b> do exercício atual (art. 13, Inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["June/08/2022","June/17/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "21/06 a 28/06 - Período destinado ao <b>último reenvio</b> permitido das informações do Acompanhamento Mensal (AM) relativas aos meses de <b>março e abril do exercício atual</b> (art. 13, Inc. II, da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Após esse prazo, as informações serão consideradas validadas e não mais poderão ser alteradas (art. 15, § 2º, da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b> <br><b>ATENÇÃO! O reenvio do módulo Acompanhamento Mensal invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.</b>",
                date: ["June/21/2022","June/28/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019). <br><b>ATENÇÃO! Podem ser encaminhados mais de um edital em uma mesma remessa, como também, serem encaminhadas mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["June/01/2022","July/05/2022"],
                type: "event",
                color: "#00d1d1"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "01/06 a 30/06 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>maio</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["June/01/2022","June/30/2022"],
                type: "event",
                color: "#00d1d1"
            },


            // Julho 2022
            {
                id: "capmg",
                name: "CAPMG",
                description: "08/07 a 17/07 - Período para <b>substituição</b> de remessa das informações <b>(ref. Maio/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["July/08/2022","July/17/2022"],
                type: "event"
            },
            {
                id: "capmg",
                name: "CAPMG",
                description: "01/07 a 31/07 - Período para <b>envio</b> de remessa das informações <b>(ref. Junho/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["July/01/2022","July/31/2022"],
                type: "event"
            },
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/07 a 09/08 - Período para <b>envio</b> de remessa das informações <b>(ref. Junho/2022)</b> relativas às concessões de benefícios de Aposentadoria, Pensão e Cancelamentos (art. 3º, caput, da IN. 03/2011, com redação dada pelo art. 1° da IN 05/13)",
                date: ["July/01/2021","August/09/2022"],
                type: "event",
                color: "#ffc252"
            },
            {
                id: "lrf",
                name: "LRF - Exec e Legis Mun.",
                description: "Último dia para publicação do Relatório de Gestão Fiscal (RGF) do <b>1º semestre do exercício atual</b>, para municípios <b>com menos de 50.000 habitantes,</b> optantes pelo envio semestral (art.63, § 1º da LRF).",
                date: "July/30/2022",
                type: "event",
                color: "#d14d4d"
            },
            {
                id: "lrf",
                name: "LRF - Exec Municipal",
                description: "Último dia para publicação do Relatório Resumido da Execução Orçamentária (RREO) do <b>3º bimestre do exercício atual</b> (art. 165, § 3º da C.R/88 c/c o art. 52 da LRF).",
                date: "July/30/2022",
                type: "event",
                color: "#d14d4d"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/07 a 31/07 - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>junho</b> do exercício atual (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Inconsistências ou impropriedades posteriormente verificadas no balancete contábil serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015).</b>",
                date: ["July/01/2022","July/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/07 a 31/07 - Período para <b>envio</b> das informações do módulo de Acompanhamento Mensal (AM) relativas ao mês de <b>junho</b> do exercício atual (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017)",
                date: ["July/01/2022","July/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "08/07 a 17/07 - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal (AM) relativas ao mês de <b>maio</b> do exercício atual (art. 13, Inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br><b>ATENÇÃO! O reenvio do módulo Acompanhamento Mensal invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.</b>",
                date: ["July/08/2022","July/17/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019). <br><b>ATENÇÃO! Podem ser encaminhados mais de um edital em uma mesma remessa, como também, serem encaminhadas mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["July/01/2022","August/05/2022"],
                type: "event",
                color: "#00d1d1"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "01/07 a 31/07 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>junho</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["July/01/2022","July/31/2022"],
                type: "event",
                color: "#00d1d1"
            },


            // Agosto 2022
            {
                id: "capmg",
                name: "CAPMG",
                description: "08/08 a 17/08 - Período para <b>substituição</b> de remessa das informações <b>(ref. Junho/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["August/08/2022","August/17/2022"],
                type: "event"
            },
            {
                id: "capmg",
                name: "CAPMG",
                description: "01/08 a 31/08 - Período para <b>envio</b> de remessa das informações <b>(ref. Julho/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["August/01/2022","August/31/2022"],
                type: "event"
            },
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/08 a 09/09 - Período para <b>envio</b> de remessa das informações <b>(ref. Julho/2022)</b> relativas às concessões de benefícios de Aposentadoria, Pensão e Cancelamentos (art. 3º, caput, da IN. 03/2011, com redação dada pelo art. 1° da IN 05/13)",
                date: ["August/01/2021","September/09/2022"],
                type: "event",
                color: "#ffc252"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/08 a 31/08 - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>julho</b> do exercício atual (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Inconsistências ou impropriedades posteriormente verificadas no balancete contábil serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b>",
                date: ["August/01/2022","August/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/08 a 31/08 - Período para <b>envio</b> das informações relativas ao módulo Acompanhamento Mensal (AM) do mês de <b>julho</b> do exercício atual (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["August/01/2022","August/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "08/08 a 17/08 - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal (AM) relativas ao mês de <b>junho</b> do exercício atual (art. 13, Inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["August/08/2022","August/17/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "21/08 a 28/08 - Período destinado ao <b>último reenvio</b> permitido das informações do Acompanhamento Mensal (AM) relativas aos meses de <b>maio e junho do exercício atual</b> (art. 13, Inc. II, da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Após esse prazo, as informações serão consideradas validadas e não mais poderão ser alteradas (art. 15, § 2º, da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b> <br><b>ATENÇÃO! O reenvio do módulo Acompanhamento Mensal invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.</b>",
                date: ["August/21/2022","August/28/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019). <br><b>ATENÇÃO! Podem ser encaminhados mais de um edital em uma mesma remessa, como também, serem encaminhadas mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["August/01/2022","September/05/2022"],
                type: "event",
                color: "#00d1d1"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "01/08 a 31/08 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>julho</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["August/01/2022","August/31/2022"],
                type: "event",
                color: "#00d1d1"
            },


            // Setembro 2022
            {
                id: "capmg",
                name: "CAPMG",
                description: "08/09 a 17/09 - Período para <b>substituição</b> de remessa das informações <b>(ref. Julho/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["September/08/2022","September/17/2022"],
                type: "event"
            },
            {
                id: "capmg",
                name: "CAPMG",
                description: "01/09 a 31/09 - Período para <b>envio</b> de remessa das informações <b>(ref. Agosto/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["September/01/2022","September/31/2022"],
                type: "event"
            },
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/09 a 10/10 - Período para <b>envio</b> de remessa das informações <b>(ref. Agosto/2022)</b> relativas às concessões de benefícios de Aposentadoria, Pensão e Cancelamentos (art. 3º, caput, da IN. 03/2011, com redação dada pelo art. 1° da IN 05/13)",
                date: ["September/01/2021","October/10/2022"],
                type: "event",
                color: "#ffc252"
            },
            {
                id: "lrf",
                name: "LRF - Exec e Legis Mun.",
                description: "Último dia para publicação do Relatório de Gestão Fiscal (RGF) do <b>2º quadrimestre do exercício atual</b>, para municípios <b>com mais de 50.000 habitantes</b> e para municípios <b>não optantes</b> pelo envio semestral (art. 54 c/c art. 55, § 2º da LRF).",
                date: "September/30/2022",
                type: "event",
                color: "#d14d4d"
            },
            {
                id: "lrf",
                name: "LRF - Exec Municipal",
                description: "Último dia para publicação do Relatório Resumido da Execução Orçamentária (RREO) do <b>4º bimestre do exercício atual</b> (art. 165, § 3º da C.R/88 c/c o art. 52 da LRF).",
                date: "September/30/2022",
                type: "event",
                color: "#d14d4d"
            },
            {
                id: "lrf",
                name: "LRF - Exec Municipal",
                description: "Último dia para realização de audiência pública para demonstrar e avaliar <b>o cumprimento das metas fiscais do 2º quadrimestre do exercício atual</b> (art. 9º, § 4º da LRF).",
                date: "September/30/2022",
                type: "event",
                color: "#d14d4d"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/09 a 30/09 - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>agosto</b> do exercício atual (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Inconsistências ou impropriedades posteriormente verificadas no balancete contábil serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b>",
                date: ["September/01/2022","September/30/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/09 a 30/09 - Período para <b>envio</b> das informações do módulo de Acompanhamento Mensal (AM) relativas ao mês de <b>agosto</b> do exercício atual (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017)",
                date: ["September/01/2022","September/30/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "08/09 a 17/09 - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal (AM) relativas ao mês de <b>julho</b> do exercício atual (art. 13, Inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br><b>ATENÇÃO! O reenvio do módulo Acompanhamento Mensal invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.</b>",
                date: ["September/08/2022","September/17/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019). <br><b>ATENÇÃO! Podem ser encaminhados mais de um edital em uma mesma remessa, como também, serem encaminhadas mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["September/01/2022","October/05/2022"],
                type: "event",
                color: "#00d1d1"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "01/09 a 30/09 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>agosto</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["September/01/2022","September/30/2022"],
                type: "event",
                color: "#00d1d1"
            },


            // Outubro 2022
            {
                id: "capmg",
                name: "CAPMG",
                description: "08/10 a 17/10 - Período para <b>substituição</b> de remessa das informações <b>(ref. Agosto/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["October/08/2022","October/17/2022"],
                type: "event"
            },
            {
                id: "capmg",
                name: "CAPMG",
                description: "01/10 a 31/10 - Período para <b>envio</b> de remessa das informações <b>(ref. Setembro/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["October/01/2022","October/31/2022"],
                type: "event"
            },
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/10 a 09/11 - Período para <b>envio</b> de remessa das informações <b>(ref. Setembro/2022)</b> relativas às concessões de benefícios de Aposentadoria, Pensão e Cancelamentos (art. 3º, caput, da IN. 03/2011, com redação dada pelo art. 1° da IN 05/13)",
                date: ["October/01/2021","November/09/2022"],
                type: "event",
                color: "#ffc252"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/10 a 31/10 - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>setembro</b> do exercício atual (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Inconsistências ou impropriedades posteriormente verificadas no balancete contábil serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b>",
                date: ["October/01/2022","October/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/10 a 31/10 - Período para <b>envio</b> das informações relativas ao módulo Acompanhamento Mensal (AM) do mês de <b>setembro</b> do exercício atual (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["October/01/2022","October/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "08/10 a 17/10 - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal (AM) relativas ao mês de <b>agosto</b> do exercício atual (art. 13, Inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["October/08/2022","October/17/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "21/10 a 28/10 - Período destinado ao <b>último reenvio</b> permitido das informações do Acompanhamento Mensal (AM) relativas aos meses de <b>julho e agosto do exercício atual</b> (art. 13, Inc. II, da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Após esse prazo, as informações serão consideradas validadas e não mais poderão ser alteradas (art. 15, § 2º, da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b> <br><b>ATENÇÃO! O reenvio do módulo Acompanhamento Mensal invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.</b>",
                date: ["October/21/2022","October/28/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019). <br><b>ATENÇÃO! Podem ser encaminhados mais de um edital em uma mesma remessa, como também, serem encaminhadas mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["October/01/2022","November/05/2022"],
                type: "event",
                color: "#00d1d1"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "01/10 a 31/10 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>setembro</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["October/01/2022","October/31/2022"],
                type: "event",
                color: "#00d1d1"
            },


            // November 2022
            {
                id: "capmg",
                name: "CAPMG",
                description: "08/11 a 17/11 - Período para <b>substituição</b> de remessa das informações <b>(ref. Setembro/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["November/08/2022","November/17/2022"],
                type: "event"
            },
            {
                id: "capmg",
                name: "CAPMG",
                description: "01/11 a 31/11 - Período para <b>envio</b> de remessa das informações <b>(ref. Outubro/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["November/01/2022","November/31/2022"],
                type: "event"
            },
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/11 a 12/12 - Período para <b>envio</b> de remessa das informações <b>(ref. Outubro/2022)</b> relativas às concessões de benefícios de Aposentadoria, Pensão e Cancelamentos (art. 3º, caput, da IN. 03/2011, com redação dada pelo art. 1° da IN 05/13)",
                date: ["November/01/2021","December/12/2022"],
                type: "event",
                color: "#ffc252"
            },
            {
                id: "lrf",
                name: "LRF - Exec Municipal",
                description: "Último dia para publicação do Relatório Resumido da Execução Orçamentária (RREO) do <b>5º bimestre do exercício atual</b> (art. 165, § 3º da C.R/88 c/c o art. 52 da LRF).",
                date: "November/30/2022",
                type: "event",
                color: "#d14d4d"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/11 a 30/11 - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>outubro</b> do exercício atual (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Inconsistências ou impropriedades posteriormente verificadas no balancete contábil serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b>",
                date: ["November/01/2022","November/30/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/11 a 30/11 - Período para <b>envio</b> das informações do módulo de Acompanhamento Mensal (AM) relativas ao mês de <b>outubro</b> do exercício atual (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017)",
                date: ["November/01/2022","November/30/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "08/11 a 17/11 - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal (AM) relativas ao mês de <b>setembro</b> do exercício atual (art. 13, Inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["November/08/2022","November/17/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019). <br><b>ATENÇÃO! Podem ser encaminhados mais de um edital em uma mesma remessa, como também, serem encaminhadas mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["November/01/2022","December/05/2022"],
                type: "event",
                color: "#00d1d1"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "01/11 a 30/11 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>agosto</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["November/01/2022","November/30/2022"],
                type: "event",
                color: "#00d1d1"
            },


            // Dezembro 2022
            {
                id: "capmg",
                name: "CAPMG",
                description: "08/12 a 17/12 - Período para <b>substituição</b> de remessa das informações <b>(ref. Outubro/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["December/08/2022","December/17/2022"],
                type: "event"
            },
            {
                id: "capmg",
                name: "CAPMG",
                description: "01/10 a 31/10 - Período para <b>envio</b> de remessa das informações <b>(ref. Novembro/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["December/01/2022","December/31/2022"],
                type: "event"
            },
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/12 a 10/01 - Período para <b>envio</b> de remessa das informações <b>(ref. Novembro/2022)</b> relativas às concessões de benefícios de Aposentadoria, Pensão e Cancelamentos (art. 3º, caput, da IN. 03/2011, com redação dada pelo art. 1° da IN 05/13)",
                date: ["December/01/2021","January/10/2022"],
                type: "event",
                color: "#ffc252"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/12 a 31/12 - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>novembro</b> do exercício atual (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Inconsistências ou impropriedades posteriormente verificadas no balancete contábil serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b>",
                date: ["December/01/2022","December/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "01/12 a 31/12 - Período para <b>envio</b> das informações relativas ao módulo Acompanhamento Mensal (AM) do mês de <b>novembro</b> do exercício atual (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["December/01/2022","December/31/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "08/12 a 17/12 - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal (AM) relativas ao mês de <b>outubro</b> do exercício atual (art. 13, Inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["December/08/2022","December/17/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "21/12 a 28/12 - Período destinado ao <b>último reenvio</b> permitido das informações do Acompanhamento Mensal (AM) relativas aos meses de <b>setembro e outubro do exercício atual</b> (art. 13, Inc. II, da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO! Após esse prazo, as informações serão consideradas validadas e não mais poderão ser alteradas (art. 15, § 2º, da INTC nº 03/2015, alterada pela INTC nº 02/2017).</b> <br><b>ATENÇÃO! O reenvio do módulo Acompanhamento Mensal invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.</b>",
                date: ["December/21/2022","December/28/2022"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019). <br><b>ATENÇÃO! Podem ser encaminhados mais de um edital em uma mesma remessa, como também, serem encaminhadas mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["December/01/2022","January/05/2023"],
                type: "event",
                color: "#00d1d1"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "01/12 a 31/12 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>novembro</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["December/01/2022","December/31/2022"],
                type: "event",
                color: "#00d1d1"
            },


            // Janeiro 2023

            {
                id: "lrf",
                name: "LRF - Exec Municipal",
                description: "Publicação do RREO 6° bimestre - Último dia para publicação do Relatório Resumido da Execução Orçamentária (RREO) do <b>6º bimestre do exercício anterior</b> (art. 165, § 3º da C.R/88 c/c o art. 52 da LRF).",
                date: ["January/30/2023"],
                type: "event",
                color: "#d14d4d"
            },

            {
                id: "lrf",
                name: "LRF - Exec e Legis Mun.",
                description: "Publicação do RGF 2° semestre / 3°quadrimestre - Último dia para publicação do Relatório de Gestão Fiscal (RGF) do <b>2º semestre do exercício anterior</b>, para municípios com <b>menos de 50.000 habitantes</b>, optantes pelo envio semestral (art. 63, § 1º da LRF). <br> Último dia para publicação do Relatório de Gestão Fiscal (RGF) do <b>3º quadrimestre do exercício anterior</b>, para municípios com <b>mais de 50.000 habitantes</b> e para municípios <b>não optantes</b> pelo envio semestral (art. 54 c/c art. 55, § 2º da LRF).",
                date: ["January/30/2023"],
                type: "event",
                color: "#d14d4d"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Envio do módulo DCASP - Início do período de <b>envio</b> das informações do módulo Demonstrações Contábeis Aplicadas ao Setor Público, juntamente com os documentos especificados nos anexos I a VIII, da INTC n° 04/2017, em formato PDF (art. 10 da INTC nº 03/2015, alterada pela INTC nº 02/2017, e art. 2º, §2°, da INTC nº 04/2017), para comporem a <b>Prestação de Contas Anual</b> do exercício anterior.<br><b>ATENÇÃO!</b> O prazo se encerra em 31/03!",
                date: ["January/01/2023","March/31/2023"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Envio do módulo AM de dezembro do exercício anterior - Período para <b>envio</b> das informações do módulo Acompanhamento Mensal relativas ao mês de <b>dezembro</b> do exercício anterior (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO!</b>  Antes de enviar o módulo AM de dezembro, deverá ser encaminhado o submódulo EXTRATOS com os PDF das contas bancárias e/ou conta única, ativas e encerradas, no exercício anterior, pelo Executivo, Legislativo, órgãos e entidades municipais.<br> <b>ATENÇÃO!</b>  Antes de enviar o módulo AM, deverá ser encaminhado o submódulo Legislação de Caráter Financeiro - LCF, com os PDF das leis, decretos e atos de alterações orçamentárias, caso existam, apenas pelo Executivo.",
                date: ["January/01/2023","January/31/2023"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Substituição do módulo AM de novembro do exercício anterior -  Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal e submódulo Legislação de Caráter Financeiro relativas ao mês de <b>novembro</b> do exercício anterior (art. 13, I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br> <b>ATENÇÃO!</b> O reenvio do módulo AM invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.",
                date: ["January/08/2023","January/17/2023"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Envio do módulo BLCT de dezembro do exercício anterior - Período para <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>dezembro</b> do exercício anterior (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br><b>ATENÇÃO!</b> Inconsistências ou impropriedades posteriormente verificadas no BLCT serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["January/01/2023","January/31/2023"],
                type: "event",
                color: "#b1539c"
            },
            {
                id: "sicom",
                name: "SICOM - Exec Municipal",
                description: "Envio do módulo IP - Período de <b>envio</b> das informações do módulo Instrumentos de Planejamento,  relativas ao <b>PPA, LDO e LOA</b>, acompanhadas dos textos integrais das referidas leis, por meio do submódulo Documentos em PDF do Módulo IP - DOCIP (art. 5º, § 1º, da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br> <b>ATENÇÃO!</b>  Após o envio do módulo IP, para a inclusão de novos programas, ações e metas, unidades orçamentárias e/ou conta única devem ser encaminhados por meio do submódulo Inclusão de Programas - AIP.",
                date: ["January/01/2023","January/31/2023"],
                type: "event",
                color: "#b1539c"
            },

            {
                id: "capmg",
                name: "CAPMG",
                description: "08/01 a 17/01 - Período para <b>substituição</b> de remessa das informações <b>(ref. Novembro/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["January/08/2023","January/17/2023"],
                type: "event"
            },
            {
                id: "capmg",
                name: "CAPMG",
                description: "01/01 a 31/01 - Período para <b>envio</b> de remessa das informações <b>(ref. Dezembro/2022)</b> relativas à folha de pagamento de pessoal por meio do SICOM - Módulo Folha de Pagamento (art. 2º e art. 5º da IN 04/2015)",
                date: ["January/01/2023","January/31/2023"],
                type: "event"
            },
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/12/22 a 09/01 - Período para <b>envio</b> de remessa das informações <b>(ref. Novembro/2022)</b> relativas às concessões de benefícios de Aposentadoria, Pensão e Cancelamentos (art. 3º, caput, da IN. 03/2011, com redação dada pelo art. 1° da IN 05/13)",
                date: ["December/01/2022","January/09/2022"],
                type: "event",
                color: "#ffc252"
            },
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/01 a 09/02 - Período para <b>envio</b> de remessa das informações <b>(ref. Dezembro/2022)</b> relativas às concessões de benefícios de Aposentadoria, Pensão e Cancelamentos (art. 3º, caput, da IN. 03/2011, com redação dada pelo art. 1° da IN 05/13)",
                date: ["January/01/2022","February/09/2022"],
                type: "event",
                color: "#ffc252"
            },

            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "01/01 a 31/01 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>dezembro</b> do exercício anterior (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["January/01/2023","January/31/2023"],
                type: "event",
                color: "#00d1d1"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "08/01 a 17/01 - Período para <b>substituição</b> das informações referentes ao mês de novembro 2022 (art. 4° da INTC n° 01/2019).",
                date: ["January/08/2023","January/17/2023"],
                type: "event",
                color: "#00d1d1"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "Considerando que o Módulo Edital não pode ser enviado sem que o IP-Instrumento de Planejamento já tenha sido enviado e que a data limite de envio do IP é 31/01 do ano exercício, os prazos de envio do Módulo Edital no mês de Janeiro é: <b>Até 5 (cinco) dias úteis após a data de envio do IP</b>, caso a data de publicação do edital tenha sido anterior ou igual à data de envio do IP ou até 5 (cinco) dias úteis após a data de publicação do edital se esta for posterior à data de envio do IP. A tabela abaixo resume esta situação. <br> <b>ATENÇÃO! Podem ser encaminhados mais de um edital em uma mesma remessa, como também, serem encaminhadas mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["January/01/2022","February/05/2022"],
                type: "event",
                color: "#00d1d1"
            },
            
            // Fevereiro 2023

            {
                id: "lrf",
                name: "LRF - Exec Municipal",
                description: "Realização de audiência pública -  Último dia para realização de audiência pública para demonstrar e avaliar o <b>cumprimento das metas fiscais do 3° quadrimestre do exercício anterior</b> (art. 9º, § 4º da LRF).",
                date: "February/28/2023",
                type: "event",
                color: "#d14d4d"
            },
            
            {
                id: "sicom",
                name: "SICOM - Exec Municipal",
                description: "Substituição do módulo IP - Último dia para <b>reenvio</b> das informações do módulo Instrumentos de Planejamento,  relativas ao <b>PPA, LDO e LOA</b> (art. 12, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: "February/20/2023",
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Envio do módulo AM de janeiro - Prazo de <b>envio</b> das informações de Acompanhamento Mensal relativas ao mês de <b>janeiro</b> (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br><b>ATENÇÃO!</b>  Antes de enviar o módulo AM, deverá ser encaminhado o submódulo Legislação de Caráter Financeiro - LCF, com os PDF das leis, decretos e atos de alterações orçamentárias, caso existam, apenas pelo Executivo.",
                date: ["February/1/2023","February/28/2023"],
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Substituição do módulo AM de dezembro do exercício anterior - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal e submódulos Legislação de Caráter Financeiro e Extratos relativas ao mês de <b>dezembro</b> do exercício anterior (art. 13, inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["February/8/2023","February/17/2023"],
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Substituição do módulo AM do bimestre novembro e dezembro do exercício anterior - Período destinado ao <b>reenvio</b> das informações do módulo de Acompanhamento Mensal e submódulos Legislação de Caráter Financeiro e Extratos relativas aos meses de <b>novembro</b> e <b>dezembro</b> do exercício anterior.<br><b>ATENÇÃO!</b> O reenvio do módulo AM invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.",
                date: ["February/21/2023","February/28/2023"],
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Envio do módulo BLCT de janeiro -  Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>janeiro</b> do exercício atual (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["February/1/2023","February/28/2023"],
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Envio do módulo BLCT de encerramento do exercício anterior -  Último dia para <b>envio</b> das informações do módulo Balancete Contábil relativas ao encerramento do <b>exercício anterior</b> (art. 9º, caput, da INTC 03/2015, alterada pela INTC nº 02/2017).<br> <b>ATENÇÃO!</b> Inconsistências ou impropriedades posteriormente verificadas no BLCT serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                data: "February/15/2023",
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "capmg",
                name: "CAPMG",
                description: "02/02 a 28/02 - Período para envio das informações referentes ao mês de <b>janeiro</b>.",
                date: ["February/01/2023","February/28/2023"],
                type: "event"
            },
            
            {
                id: "capmg",
                name: "CAPMG",
                description: "08/02 a 17/02 - Período para substituição das informações referentes ao mês de <b>dezembro</b> 2022.",
                date: ["February/08/2023","February/17/2023"],
                type: "event"
            },
            
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/02 a 13/03 - Início do prazo de envio das informações relativas ao mês de <b>janeiro</b>.",
                date: ["February/01/2023","March/09/2023"],
                type: "event",
                color: "#ffc252"
            },
            

            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019).<br><b>ATENÇÃO! Pode ser encaminhado mais de um edital em uma mesma remessa, como também, ser encaminhada mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["February/01/2023","March/05/2023"],
                type: "event",
                color: "#00d1d1"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "08/02 a 17/02 -  Período para substituição das informações referentes ao mês de dezembro 2022 (art. 4° da INTC n° 01/2019).",
                date: ["February/08/2023","February/17/2023"],
                type: "event",
                color: "#00d1d1"
            },
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais e Estaduais",
                description: "01/02 a 28/02 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>janeiro</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["February/01/2023","February/28/2023"],
                type: "event",
                color: "#00d1d1"
            },


            // Março 2023

            {
                id: "lrf",
                name: "LRF - Exec Municipal",
                description: "Publicação do RREO 1° bimestre - Último dia para publicação do Relatório Resumido da Execução Orçamentária (RREO) do <b>1° bimestre do exercício atual</b> (art. 165, § 3º da CF/88 e art. 52 da LRF).",
                date: "March/30/2023",
                type: "event",
                color: "#b1539c"
            },

            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Envio do módulo DCASP de cada órgão. - Último dia para <b>envio</b> das informações do módulo Demonstrações Contábeis Aplicadas ao Setor Público relativas ao <b>encerramento do exercício anterior</b>, em formato PDF de cada órgão (art. 10, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: "March/31/2023",
                type: "event",
                color: "#b1539c"
            },

            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Envio do módulo DCASP consolidado do município. - Último dia para que o Prefeito Municipal efetue o <b>envio</b> das informações do módulo Demonstrações Contábeis Aplicadas ao Setor Público consolidadas do município, juntamente com os documentos especificados nos anexos I a VIII, da INTC n° 04/2017 (art. 10, § 1º, da INTC nº 03/2015, alterada pela INTC nº 02/2017 e art. 2º, §2°, da INTC nº 04/2017), para comporem a <b>Prestação de Contas Anual</b> do exercício anterior.",
                date: "March/31/2023",
                type: "event",
                color: "#b1539c"
            },

            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Substituição do módulo DCASP para consolidação da PCA. - Último dia de período para <b>reenvio</b> das informações do módulo Demonstrações Contábeis Aplicadas ao Setor Público para comporem a <b>Prestação de Contas Anual</b> do exercício anterior.",
                date: "March/31/2023",
                type: "event",
                color: "#b1539c"
            },

            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Envio do módulo AM de fevereiro. - Período para <b>envio</b> das informações do módulo de Acompanhamento Mensal relativas ao mês de <b>fevereiro</b> (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br><b>ATENÇÃO!</b> Antes de enviar o módulo AM, deverá ser encaminhado o submódulo Legislação de Caráter Financeiro - LCF, com os PDF das leis, decretos e atos de alterações orçamentárias, caso existam, apenas pelo Executivo.",
                date: ["March/01/2023", "March/31/2023"],
                type: "event",
                color: "#b1539c"
            },

            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Substituição do módulo AM de janeiro. - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal e submódulo Legislação de Caráter Financeiro relativas ao mês de <b>janeiro</b> (art. 13, Inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br><b>ATENÇÃO!</b> O reenvio do módulo AM invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.",
                date: ["March/08/2023", "March/17/2023"],
                type: "event",
                color: "#b1539c"
            },

            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Substituição do módulo AM do exercício anterior. - Período para <b>reenvio</b> das remessas do módulo Acompanhamento Mensal e submódulo Extratos <b>do exercício anterior</b>, para consolidação da prestação de contas (art. 3º, §1º, da INTC 04/2017).<br><b>ATENÇÃO!</b> Encerrado o prazo final para reenvio das informações em 31 de março, o último relatório consolidado será considerado como base para a análise da prestação de contas anual (art. 3°, §3°, da INTC Nº 04/2017).",
                date: ["March/19/2023", "March/31/2023"],
                type: "event",
                color: "#b1539c"
            },

            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Envio do módulo BLCT de fevereiro. - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>fevereiro</b> (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO!</b> Inconsistências ou impropriedades posteriormente verificadas no BLCT serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017). ",
                date: ["March/01/2023", "March/31/2023"],
                type: "event",
                color: "#b1539c"
            },

            {
                id: "capmg",
                name: "CAPMG",
                description: "01/03 a 31/03 - Período para envio das informações referentes ao mês de <b>fevereiro</b>.",
                date: ["March/01/2023","March/31/2023"],
                type: "event"
            },
            
            {
                id: "capmg",
                name: "CAPMG",
                description: "08/03 a 17/03 - Período para substituição das informações referentes ao mês de <b>janeiro</b>.",
                date: ["March/08/2023","March/17/2023"],
                type: "event"
            },

            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/03 a 10/04 - Início do prazo de envio das informações relativas ao mês de <b>fevereiro</b>.",
                date: ["March/01/2023","April/10/2023"],
                type: "event",
                color: "#ffc252"
            },

            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019).<br><b>ATENÇÃO! Pode ser encaminhado mais de um edital em uma mesma remessa, como também, ser encaminhada mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["March/01/2023","April/05/2023"],
                type: "event",
                color: "#00d1d1"
            },
            
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais",
                description: "08/03 a 17/03 -  Período para substituição das informações referentes ao mês de janeiro(art. 4° da INTC n° 01/2019).",
                date: ["March/08/2023","March/17/2023"],
                type: "event",
                color: "#00d1d1"
            },
            
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais",
                description: "01/03 a 31/03 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>fevereiro</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["March/01/2023","March/31/2023"],
                type: "event",
                color: "#00d1d1"
            },

            // Abril 2023 - e
            {
                id: "sicom",
                name: "SICOM - Exec Municipal",
                description: "Substituição dos módulos AM e DCASP do exercício anterior. - Período para o chefe do Poder Executivo <b>requerer</b> a alteração de dados do módulo Acompanhamento Mensal, incluindo o submódulo Extratos, bem como do módulo Demonstrações Contábeis Aplicadas ao Setor Público, após 31 de março no Portal do Sicom, por meio da funcionalidade “Autorizar Substituta-PCA/Ano Referência - INTC n° 04/2017” (art. 3º, §4º, da INTC nº 04/2017) para comporem a <b>Prestação de Contas Anual</b> do exercício anterior. <br> <b>ATENÇÃO!</b>  Esta substituição deverá ocorrer em até 05 dias úteis da data da autorização.<br> <b>ATENÇÃO!</b>  Após esse prazo, as informações serão consideradas validadas e não mais poderão ser alteradas (art. 15, § 2º, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["April/03/2023", "April/19/2023"],
                type: "event",
                color: "#b1539c"
            },

            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Envio do módulo AM de março. - Período para <b>envio</b> das informações do módulo Acompanhamento Mensal relativas ao mês de <b>março</b> do exercício atual (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br><b>ATENÇÃO!</b>  Antes de enviar o módulo AM, deverá ser encaminhado o submódulo Legislação de Caráter Financeiro - LCF, com os PDF das leis, decretos e atos de alterações orçamentárias, caso existam, apenas pelo Executivo.",
                date: ["April/01/2023", "April/30/2023"],
                type: "event",
                color: "#b1539c"
            },

            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Substituição do módulo AM de fevereiro. - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal e submódulo Legislação de Caráter Financeiro relativas ao mês de <b>fevereiro</b> (art. 13, Inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br><b>ATENÇÃO!</b> O reenvio do módulo AM invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.",
                date: ["April/08/2023", "April/17/2023"],
                type: "event",
                color: "#b1539c"
            },

            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Substituição do módulo AM do bimestre de janeiro e fevereiro. - Período destinado ao último <b>reenvio</b> permitido das informações do Acompanhamento Mensal e submódulo Legislação de Caráter Financeiro relativas aos meses de <b>janeiro</b> e <b>fevereiro</b> do exercício atual (art. 13, Inc. II, da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br><b>ATENÇÃO!</b> O reenvio do módulo AM invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.",
                date: ["April/21/2023", "April/28/2023"],
                type: "event",
                color: "#b1539c"
            },

            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Envio do módulo BLCT de março - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>março</b> do exercício atual (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br> <b>ATENÇÃO!</b> Inconsistências ou impropriedades posteriormente verificadas no BLCT serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["April/01/2023","April/30/2023"],
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "capmg",
                name: "CAPMG",
                description: "01/04 a 30/04 - Período para envio das informações referentes ao mês de <b>março</b>.",
                date: ["April/01/2023","April/30/2023"],
                type: "event"
            },
            
            {
                id: "capmg",
                name: "CAPMG",
                description: "08/04 a 17/04 - Período para substituição das informações referentes ao mês de <b>fevereiro</b>.",
                date: ["April/08/2023","April/17/2023"],
                type: "event"
            },

            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/04 a 10/05 - Início do prazo de envio das informações relativas ao mês de <b>março</b>.",
                date: ["April/01/2023","May/10/2023"],
                type: "event",
                color: "#ffc252"
            },

            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019).<br><b>ATENÇÃO! Pode ser encaminhado mais de um edital em uma mesma remessa, como também, ser encaminhada mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["April/01/2023","May/05/2023"],
                type: "event",
                color: "#00d1d1"
            },
            
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais",
                description: "08/04 a 17/04 - Período para substituição das informações referentes ao mês de fevereiro (art. 4° da INTC n° 01/2019).",
                date: ["April/08/2023","April/17/2023"],
                type: "event",
                color: "#00d1d1"
            },
            
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais",
                description: "01/04 a 31/04 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>março</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["April/01/2023","April/30/2023"],
                type: "event",
                color: "#00d1d1"
            },

            // Maio 2023 - Guima
            
            {
                id: "lrf",
                name: "LRF - Exec Municipal",
                description: "Publicação do RREO 2° bimestre - Último dia para publicação do Relatório Resumido da Execução Orçamentária (RREO) do <b>2° bimestre do exercício atual</b> (art. 165, § 3º da CF/88 e art. 52 da LRF).",
                date: "May/30/2023",
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "lrf",
                name: "LRF - Exec Municipal",
                description: "Realização de audiência pública - Último dia para realização de audiência pública para demonstrar e avaliar o <b>cumprimento das metas fiscais do 1° quadrimestre do exercício atual</b>(art. 9º, § 4º da LRF).",
                date: "May/31/2023",
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "lrf",
                name: "LRF - Exec e Legis Mun.",
                description: "Publicação do RGF 1° quadrimestre - Último dia para publicação do Relatório de Gestão Fiscal (RGF) do <b>1° quadrimestre</b> do exercício atual, para municípios <b>com mais de 50.000 habitantes</b> e para municípios <b>não optantes</b> pelo envio semestral (art. 54 e art. 55, § 2º da LRF).",
                date: "May/30/2023",
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Envio do módulo AM de abril - Período para <b>envio</b> das informações do módulo Acompanhamento Mensal relativas ao mês de <b>abril</b> do exercício atual (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br><b>ATENÇÃO!</b>  Antes de enviar o módulo AM, deverá ser encaminhado o submódulo Legislação de Caráter Financeiro - LCF, com os PDF das leis, decretos e atos de alterações orçamentárias, caso existam, apenas pelo Executivo.",
                date: ["May/1/2023","May/31/2023"],
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Substituição do módulo AM de março - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal e submódulo Legislação de Caráter Financeiro relativas ao mês de <b>março</b> do exercício atual (art. 13, Inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br> <b>ATENÇÃO!</b> O reenvio do módulo AM invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.",
                date: ["May/8/2023","May/17/2023"],
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Envio do módulo BLCT de abril - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>abril</b> do exercício atual (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br> <b>ATENÇÃO!</b> Inconsistências ou impropriedades posteriormente verificadas no BLCT serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["May/1/2023","May/31/2023"],
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "capmg",
                name: "CAPMG",
                description: "01/05 a 31/05 - Período para envio das informações referentes ao mês de <b>abril</b>.",
                date: ["May/01/2023","May/31/2023"],
                type: "event"
            },
            
            {
                id: "capmg",
                name: "CAPMG",
                description: "08/05 a 17/05 - Período para substituição das informações referentes ao mês de <b>março</b>.",
                date: ["May/08/2023","May/17/2023"],
                type: "event"
            },

            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/05 a 12/06 - Início do prazo de envio das informações relativas ao mês de <b>abril</b>.",
                date: ["May/01/2023","June/12/2023"],
                type: "event",
                color: "#ffc252"
            },

            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019).<br><b>ATENÇÃO! Pode ser encaminhado mais de um edital em uma mesma remessa, como também, ser encaminhada mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["May/01/2023","May/05/2023"],
                type: "event",
                color: "#00d1d1"
            },
            
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais",
                description: "08/05 a 17/05 - Período para substituição das informações referentes ao mês de março (art. 4° da INTC n° 01/2019).",
                date: ["May/08/2023","May/17/2023"],
                type: "event",
                color: "#00d1d1"
            },
            
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais",
                description: "01/05 a 31/05 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de abril (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["May/01/2023","May/31/2023"],
                type: "event",
                color: "#00d1d1"
            },

            // Junho 2023

            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Envio do módulo AM de maio. - Período para <b>envio</b> das informações do módulo de Acompanhamento Mensal relativas ao mês de <b>maio</b> (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br><b>ATENÇÃO!</b> Antes de enviar o módulo AM, deverá ser encaminhado o submódulo Legislação de Caráter Financeiro - LCF, com os PDF das leis, decretos e atos de alterações orçamentárias, caso existam, apenas pelo Executivo.",
                date: ["June/01/2023", "June/30/2023"],
                type: "event",
                color: "#b1539c"
            },

            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Substituição do módulo AM de abril. - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal e submódulo Legislação de Caráter Financeiro relativas ao mês de <b>abril</b> (art. 13, Inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br><b>ATENÇÃO!</b> O reenvio do módulo AM invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.",
                date: ["June/08/2023", "June/17/2023"],
                type: "event",
                color: "#b1539c"
            },

            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Substituição do módulo AM do bimestre março e abril. - Período destinado ao último <b>reenvio</b> permitido das informações do módulo Acompanhamento Mensal e submódulos Legislação de Caráter Financeiro relativas aos meses de <b>março</b> e <b>abril</b> do exercício atual (art. 13, Inc. II, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["June/21/2023", "June/28/2023"],
                type: "event",
                color: "#b1539c"
            },

            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Envio do módulo BLCT de maio. - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>maio</b> (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br> <b>ATENÇÃO!</b> Inconsistências ou impropriedades posteriormente verificadas no BLCT serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017). ",
                date: ["June/01/2023", "June/30/2023"],
                type: "event",
                color: "#b1539c"
            },

            {
                id: "capmg",
                name: "CAPMG",
                description: "01/06 a 30/06 - Período para envio das informações referentes ao mês de <b>maio</b>.",
                date: ["June/01/2023","June/30/2023"],
                type: "event"
            },
            
            {
                id: "capmg",
                name: "CAPMG",
                description: "08/06 a 17/06 - Período para substituição das informações referentes ao mês de <b>abril</b>.",
                date: ["June/08/2023","June/17/2023"],
                type: "event"
            },

            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/06 a 10/07 - Início do prazo de envio das informações relativas ao mês de <b>maio</b>.",
                date: ["June/01/2023","July/10/2023"],
                type: "event",
                color: "#ffc252"
            },

            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019).<br><b>ATENÇÃO! Pode ser encaminhado mais de um edital em uma mesma remessa, como também, ser encaminhada mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["June/01/2023","July/05/2023"],
                type: "event",
                color: "#00d1d1"
            },
            
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais",
                description: "08/06 a 17/06 -  Período para substituição das informações referentes ao mês de <b>abril</b>(art. 4° da INTC n° 01/2019).",
                date: ["June/08/2023","June/17/2023"],
                type: "event",
                color: "#00d1d1"
            },
            
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais",
                description: "01/06 a 30/06 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>maio</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["June/01/2023","June/30/2023"],
                type: "event",
                color: "#00d1d1"
            },

            // Julho 2023
            {
                id: "lrf",
                name: "LRF - Exec Municipal",
                description: "Publicação do RREO 3° bimestre - Último dia para publicação do Relatório Resumido da Execução Orçamentária (RREO) do <b>3° bimestre do exercício atual</b> (art. 165, § 3º da CF/88 e art. 52 da LRF).",
                date: "July/30/2023",
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "lrf",
                name: "LRF - Exec e Legis Mun.",
                description: "Publicação do RGF 1° semestre - Último dia para publicação do Relatório de Gestão Fiscal (RGF) do <b>1° semestre</b> do exercício atual, para municípios <b>com mais de 50.000 habitantes</b>, optantes pelo envio semestral (art.63, § 1º da LRF).",
                date: "July/30/2023",
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Envio do módulo AM de junho - Período para <b>envio</b> das informações do módulo Acompanhamento Mensal relativas ao mês de <b>junho</b> do exercício atual (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br><b>ATENÇÃO!</b>  Antes de enviar o módulo AM, deverá ser encaminhado o submódulo Legislação de Caráter Financeiro - LCF, com os PDF das leis, decretos e atos de alterações orçamentárias, caso existam, apenas pelo Executivo.",
                date: ["July/01/2023","July/31/2023"],
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Substituição do módulo AM de maio - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal e submódulo Legislação de Caráter Financeiro relativas ao mês de <b>maio</b> do exercício atual (art. 13, Inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br> <b>ATENÇÃO!</b> O reenvio do módulo AM invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.",
                date: ["July/08/2023","July/17/2023"],
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Envio do módulo BLCT de junho - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>junho</b> do exercício atual (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br><b>ATENÇÃO!</b> Inconsistências ou impropriedades posteriormente verificadas no BLCT serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["July/01/2023","July/31/2023"],
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "capmg",
                name: "CAPMG",
                description: "01/07 a 31/07 - Período para envio das informações referentes ao mês de <b>junho</b>.",
                date: ["July/01/2023","July/31/2023"],
                type: "event"
            },
            
            {
                id: "capmg",
                name: "CAPMG",
                description: "08/07 a 17/07 - Período para substituição das informações referentes ao mês de <b>maio</b>.",
                date: ["July/08/2023","July/17/2023"],
                type: "event"
            },

            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/07 a 09/08 - Prazo de envio das informações relativas ao mês de <b>junho</b>.",
                date: ["July/01/2023","August/12/2023"],
                type: "event",
                color: "#ffc252"
            },

            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019).<br><b>ATENÇÃO! Pode ser encaminhado mais de um edital em uma mesma remessa, como também, ser encaminhada mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["July/01/2023","August/05/2023"],
                type: "event",
                color: "#00d1d1"
            },
            
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais",
                description: "08/07 a 17/07 - Período para substituição das informações referentes ao mês de <b>maio</b> (art. 4° da INTC n° 01/2019).",
                date: ["July/08/2023","July/17/2023"],
                type: "event",
                color: "#00d1d1"
            },
            
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais",
                description: "01/07 a 31/07 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>junho</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["July/01/2023","July/31/2023"],
                type: "event",
                color: "#00d1d1"
            },
            // Agosto 2023 - Guima

            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Envio do módulo AM de julho - Período para <b>envio</b> das informações do módulo Acompanhamento Mensal relativas ao mês de <b>julho</b>(art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br><b>ATENÇÃO!</b>  Antes de enviar o módulo AM, deverá ser encaminhado o submódulo Legislação de Caráter Financeiro - LCF, com os PDF das leis, decretos e atos de alterações orçamentárias, caso existam, apenas pelo Executivo.",
                date: ["August/01/2023","August/31/2023"],
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Substituição do módulo AM de junho - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal e submódulo Legislação de Caráter Financeiro relativas ao mês de <b>junho</b> (art. 13, Inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["August/08/2023","August/17/2023"],
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Substituição do módulo AM do bimestre maio e junho - Período destinado ao último reenvio permitido das informações do módulo Acompanhamento Mensal e submódulo Legislação de Caráter Financeiro relativas aos meses de <b>maio</b> e <b>junho</b> do exercício atual (art. 13, Inc. II, da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br><b>ATENÇÃO!</b> O reenvio do módulo AM invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.",
                date: ["August/21/2023","August/28/2023"],
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Envio do módulo BLCT de julho - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>julho</b> do exercício atual (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br><b>ATENÇÃO!</b> Inconsistências ou impropriedades posteriormente verificadas no BLCT serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["August/01/2023","August/31/2023"],
                type: "event",
                color: "#b1539c"
            },

            {
                id: "capmg",
                name: "CAPMG",
                description: "01/08 a 31/08 - Período para envio das informações referentes ao mês de <b>julho</b>.",
                date: ["August/01/2023","August/31/2023"],
                type: "event"
            },

            {
                id: "capmg",
                name: "CAPMG",
                description: "08/08 a 17/08 - Período para substituição das informações referentes ao mês de <b>junho</b>.",
                date: ["August/08/2023","August/17/2023"],
                type: "event"
            },
            
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/08 a 11/09 - Início do prazo de envio das informações relativas ao mês de <b>julho</b>.",
                date: ["August/01/2023","Septeber/11/2023"],
                type: "event",
                color: "#ffc252"
            },
            
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019).<br><b>ATENÇÃO! Pode ser encaminhado mais de um edital em uma mesma remessa, como também, ser encaminhada mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["August/01/2023","September/05/2023"],
                type: "event",
                color: "#00d1d1"
            },
            
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais",
                description: "08/08 a 17/08 - Período para substituição das informações referentes ao mês de junho (art. 4° da INTC n° 01/2019).",
                date: ["August/08/2023","August/17/2023"],
                type: "event",
                color: "#00d1d1"
            },
            
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais",
                description: "01/08 a 31/08 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>julho</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["August/01/2023","August/31/2023"],
                type: "event",
                color: "#00d1d1"
            },

            // Setembro 2023

            {
                id: "lrf",
                name: "LRF - Exec Municipal",
                description: "Publicação do RREO 4° bimestre - Último dia para publicação do Relatório Resumido da Execução Orçamentária (RREO) do <b>4° bimestre do exercício atual</b> (art. 165, § 3º da CF/88 e art. 52 da LRF).",
                date: "September/30/2023",
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "lrf",
                name: "LRF - Exec Municipal",
                description: "Realização de audiência pública - Último dia para realização de audiência pública para demonstrar e avaliar o <b>cumprimento das metas fiscais do 2° quadrimestre do exercício atual</b>(art. 9º, § 4º da LRF).",
                date: "September/30/2023",
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "lrf",
                name: "LRF - Exec e Legis Mun.",
                description: "Publicação do RGF 2° quadrimestre - Último dia para publicação do Relatório de Gestão Fiscal (RGF) do <b>2° quadrimestre</b> do exercício atual, para municípios <b>com mais de 50.000 habitantes</b> e para municípios <b>não optantes</b> pelo envio semestral (art. 54 e art. 55, § 2º da LRF).",
                date: "September/30/2023",
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Envio do módulo AM de agosto - Período para <b>envio</b> das informações do módulo Acompanhamento Mensal relativas ao mês de <b>agosto</b> do exercício atual (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br><b>ATENÇÃO!</b>  Antes de enviar o módulo AM, deverá ser encaminhado o submódulo Legislação de Caráter Financeiro - LCF, com os PDF das leis, decretos e atos de alterações orçamentárias, caso existam, apenas pelo Executivo.",
                date: ["September/01/2023","September/30/2023"],
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Substituição do módulo AM de julho - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal e submódulo Legislação de Caráter Financeiro relativas ao mês de <b>julho</b> do exercício atual (art. 13, Inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br> <b>ATENÇÃO!</b> O reenvio do módulo AM invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.",
                date: ["September/8/2023","September/17/2023"],
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Envio do módulo BLCT de agosto - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>agosto</b> do exercício atual (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br> <b>ATENÇÃO!</b> Inconsistências ou impropriedades posteriormente verificadas no BLCT serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["September/1/2023","September/30/2023"],
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "capmg",
                name: "CAPMG",
                description: "01/09 a 30/09 - Período para envio das informações referentes ao mês de <b>agosto</b>.",
                date: ["September/01/2023","October/10/2023"],
                type: "event"
            },
            
            {
                id: "capmg",
                name: "CAPMG",
                description: "08/09 a 17/09 - Período para substituição das informações referentes ao mês de <b>julho</b>.",
                date: ["September/08/2023","September/17/2023"],
                type: "event"
            },

            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/09 a 10/10 - Início do prazo de envio das informações relativas ao mês de <b>agosto</b>.",
                date: ["September/01/2023","October/10/2023"],
                type: "event",
                color: "#ffc252"
            },

            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019).<br><b>ATENÇÃO! Pode ser encaminhado mais de um edital em uma mesma remessa, como também, ser encaminhada mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["September/01/2023","October/05/2023"],
                type: "event",
                color: "#00d1d1"
            },
            
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais",
                description: "08/09 a 17/09 -  Período para substituição das informações referentes ao mês de julho(art. 4° da INTC n° 01/2019).",
                date: ["September/08/2023","September/17/2023"],
                type: "event",
                color: "#00d1d1"
            },
            
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais",
                description: "01/09 a 30/09 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>agosto</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["September/01/2023","September/30/2023"],
                type: "event",
                color: "#00d1d1"
            },
            

            // Outubro 2023
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Envio do módulo AM de setembro - Período para <b>envio</b> das informações do módulo Acompanhamento Mensal relativas ao mês de <b>setembro</b>(art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br><b>ATENÇÃO!</b>  Antes de enviar o módulo AM, deverá ser encaminhado o submódulo Legislação de Caráter Financeiro - LCF, com os PDF das leis, decretos e atos de alterações orçamentárias, caso existam, apenas pelo Executivo.",
                date: ["October/1/2023","October/31/2023"],
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Substituição do módulo AM de agosto - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal e submódulo Legislação de Caráter Financeiro relativas ao mês de <b>agosto</b> (art. 13, Inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["October/8/2023","October/17/2023"],
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Substituição do módulo AM do bimestre julho e agosto - Período destinado ao último <b>reenvio</b> permitido das informações do módulo Acompanhamento Mensal e submódulo Legislação de Caráter Financeiro relativas aos meses de <b>julho</b> e <b>agosto</b> do exercício atual (art. 13, Inc. II, da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br><b>ATENÇÃO!</b> O reenvio do módulo AM invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.",
                date: ["October/21/2023","October/28/2023"],
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Envio do módulo BLCT de setembro - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>setembro</b> do exercício atual (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br><b>ATENÇÃO!</b> Inconsistências ou impropriedades posteriormente verificadas no BLCT serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["October/01/2023","October/31/2023"],
                type: "event",
                color: "#b1539c"
            },

            {
                id: "capmg",
                name: "CAPMG",
                description: "01/10 a 31/10 - Período para envio das informações referentes ao mês de <b>setembro</b>.",
                date: ["October/01/2023","October/31/2023"],
                type: "event"
            },

            {
                id: "capmg",
                name: "CAPMG",
                description: "08/10 a 17/10 - Período para substituição das informações referentes ao mês de <b>agosto</b>.",
                date: ["October/08/2023","October/17/2023"],
                type: "event"
            },
            
            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/10 a 09/11 - Início do prazo de envio das informações relativas ao mês de <b>setembro</b>.",
                date: ["October/01/2023","November/11/2023"],
                type: "event",
                color: "#ffc252"
            },
            
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019).<br><b>ATENÇÃO! Pode ser encaminhado mais de um edital em uma mesma remessa, como também, ser encaminhada mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["October/01/2023","November/05/2023"],
                type: "event",
                color: "#00d1d1"
            },
            
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais",
                description: "08/10 a 17/10 - Período para substituição das informações referentes ao mês de <b>agosto</b> (art. 4° da INTC n° 01/2019).",
                date: ["October/08/2023","October/17/2023"],
                type: "event",
                color: "#00d1d1"
            },
            
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais",
                description: "01/10 a 31/10 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>setembro</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["October/01/2023","October/31/2023"],
                type: "event",
                color: "#00d1d1"
            },


            // Novembro 2023
            {
                id: "lrf",
                name: "LRF - Exec Municipal",
                description: "Publicação do RREO 5° bimestre - Último dia para publicação do Relatório Resumido da Execução Orçamentária (RREO) do <b>5° bimestre do exercício atual</b> (art. 165, § 3º da CF/88 e art. 52 da LRF).",
                date: "November/30/2023",
                type: "event",
                color: "#b1539c"
            },
            
            
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Envio do módulo AM de outubro - Período para <b>envio</b> das informações do módulo Acompanhamento Mensal relativas ao mês de <b>outubro</b> do exercício atual (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br><b>ATENÇÃO!</b>  Antes de enviar o módulo AM, deverá ser encaminhado o submódulo Legislação de Caráter Financeiro - LCF, com os PDF das leis, decretos e atos de alterações orçamentárias, caso existam, apenas pelo Executivo.",
                date: ["November/01/2023","November/30/2023"],
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Substituição do módulo AM de setembro - Período destinado ao <b>reenvio</b> das informações do Acompanhamento Mensal e submódulo Legislação de Caráter Financeiro relativas ao mês de <b>setembro</b> do exercício atual (art. 13, Inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br><b>ATENÇÃO!</b> O reenvio do módulo AM invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.",
                date: ["November/08/2023","November/17/2023"],
                type: "event",
                color: "#b1539c"
            },
                        
            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Envio do módulo BLCT de outubro - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>outubro</b> do exercício atual (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br><b>ATENÇÃO!</b> Inconsistências ou impropriedades posteriormente verificadas no BLCT serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["November/1/2023","November/30/2023"],
                type: "event",
                color: "#b1539c"
            },
            
            {
                id: "capmg",
                name: "CAPMG",
                description: "01/11 a 30/11 - Período para envio das informações referentes ao mês de <b>outubro</b>.",
                date: ["November/01/2023","November/30/2023"],
                type: "event"
            },
            
            {
                id: "capmg",
                name: "CAPMG",
                description: "08/11 a 17/11 - Período para substituição das informações referentes ao mês de <b>setembro</b>.",
                date: ["November/08/2023","November/17/2023"],
                type: "event"
            },

            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/11 a 11/12 - Início do prazo de envio das informações relativas ao mês de <b>outubro</b>.",
                date: ["November/01/2023","December/11/2023"],
                type: "event",
                color: "#ffc252"
            },
            
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019).<br><b>ATENÇÃO! Pode ser encaminhado mais de um edital em uma mesma remessa, como também, ser encaminhada mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["November/01/2023","December/05/2023"],
                type: "event",
                color: "#00d1d1"
            },
            
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais",
                description: "08/11 a 17/11 -  Período para substituição das informações referentes ao mês de <b>setembro</b> (art. 4° da INTC n° 01/2019).",
                date: ["November/08/2023","November/17/2023"],
                type: "event",
                color: "#00d1d1"
            },
            
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais",
                description: "01/11 a 30/11 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>outubro</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["November/01/2023","November/30/2023"],
                type: "event",
                color: "#00d1d1"
            },

            // Dezembro 2023

            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Envio do módulo AM de novembro - Período para <b>envio</b> das informações do módulo de Acompanhamento Mensal relativas ao mês de <b>novembro</b> (art. 6º, caput, da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br><b>ATENÇÃO!</b> Antes de enviar o módulo AM, deverá ser encaminhado o submódulo Legislação de Caráter Financeiro - LCF, com os PDF das leis, decretos e atos de alterações orçamentárias, caso existam, apenas pelo Executivo.",
                date: ["December/01/2023", "December/31/2023"],
                type: "event",
                color: "#b1539c"
            },

            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Substituição do módulo AM de outubro - Período destinado ao <b>reenvio</b> das informações do módulo Acompanhamento Mensal e submódulo Legislação de Caráter Financeiro relativas ao mês de <b>outubro</b> (art. 13, Inc. I, da INTC nº 03/2015, alterada pela INTC nº 02/2017).",
                date: ["December/08/2023", "December/17/2023"],
                type: "event",
                color: "#b1539c"
            },

            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Substituição do módulo AM do bimestre setembro e outubro - Período destinado ao último <b>reenvio</b> permitido das informações do módulo Acompanhamento Mensal e submódulos Legislação de Caráter Financeiro relativas aos meses de <b>setembro</b> e <b>outubro</b> do exercício atual (art. 13, Inc. II, da INTC nº 03/2015, alterada pela INTC nº 02/2017).<br><b>ATENÇÃO!</b> O reenvio do módulo AM invalidará todas as remessas mensais subsequentes, incluídas as relativas ao módulo Balancete Contábil. Todos os arquivos invalidados deverão ser reenviados até a data limite da remessa imediatamente subsequente a da alteração.",
                date: ["December/21/2023", "December/28/2023"],
                type: "event",
                color: "#b1539c"
            },

            {
                id: "sicom",
                name: "SICOM - Municipais",
                description: "Envio do módulo BLCT de novembro - Período de <b>envio</b> das informações do módulo Balancete Contábil, relativas ao mês de <b>novembro</b> (art. 8º da INTC nº 03/2015, alterada pela INTC nº 02/2017). <br><b>ATENÇÃO!</b> Inconsistências ou impropriedades posteriormente verificadas no BLCT serão ajustadas na remessa do mês em que for verificado o erro, não se sujeitando à substituição. O ajuste será justificado no arquivo Considerações e nas Notas Explicativas às Demonstrações Contábeis (art. 14 da INTC nº 03/2015, alterada pela INTC nº 02/2017). ",
                date: ["December/01/2023", "December/31/2023"],
                type: "event",
                color: "#b1539c"
            },

            {
                id: "capmg",
                name: "CAPMG",
                description: "01/12 a 31/12 - Período para envio das informações referentes ao mês de <b>novembro</b>.",
                date: ["December/01/2023","December/31/2023"],
                type: "event"
            },
            
            {
                id: "capmg",
                name: "CAPMG",
                description: "08/12 a 17/12 - Período para substituição das informações referentes ao mês de <b>outubro</b>.",
                date: ["December/08/2023","December/17/2023"],
                type: "event"
            },

            {
                id: "fiscap",
                name: "FISCAP - Municipais",
                description: "01/12 a 09/01/2024 - Início do prazo de envio das informações relativas ao mês de <b>novembro</b>.",
                date: ["December/01/2023","January/09/2024"],
                type: "event",
                color: "#ffc252"
            },

            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais",
                description: "Envio do módulo EDITAL em 05 dias contados da publicação do edital de licitação, da expedição do convite ou da abertura de dispensa ou inexigibilidade de licitação (art. 3°, inciso I da INTC n° 01/2019).<br><b>ATENÇÃO! Pode ser encaminhado mais de um edital em uma mesma remessa, como também, ser encaminhada mais de uma remessa no mês com informações de diferentes editais ou retificações dos que já foram encaminhados anteriormente.</b>",
                date: ["December/01/2023","January/05/2024"],
                type: "event",
                color: "#00d1d1"
            },
            
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais",
                description: "08/12 a 17/12 -  Período para substituição das informações referentes ao mês de <b>outubro</b> (art. 4° da INTC n° 01/2019).",
                date: ["December/08/2023","December/17/2023"],
                type: "event",
                color: "#00d1d1"
            },
            
            {
                id: "sisop-mg",
                name: "SISOP MG - Municipais",
                description: "01/12 a 31/12 - Prazo de <b>envio</b> das informações do módulo de Obras e Serviços de Engenharia relativas ao mês de <b>novembro</b> (art. 3°, inciso II da INTC n° 01/2019).",
                date: ["December/01/2023","December/31/2023"],
                type: "event",
                color: "#00d1d1"
            },
        ]
    });
})