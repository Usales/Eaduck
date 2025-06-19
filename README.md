# EaDuck: Plataforma de Gestão e Comunicação Escolar 🦆📚

---

## 🚀 Novidade!
Agora o backend do EaDuck está rodando 100% online, utilizando o banco de dados Supabase (PostgreSQL Cloud). Isso significa que você pode hospedar o frontend em qualquer lugar e acessar o sistema de qualquer dispositivo, sem depender de banco local!

---

## Requisitos para rodar o software

### Backend
- Java JDK 17+
- Maven 3.9+
- Acesso à internet (para conectar ao Supabase)

### Frontend
- Node.js 18+
- NPM 9+
- Acesso à internet

### Banco de Dados
- **Supabase (PostgreSQL Cloud)** já configurado e integrado ao projeto

---

# EaDuck: Plataforma de Gestão e Comunicação Escolar 🦆📚

Bem-vindo ao **EaDuck**, uma solução digital inovadora para revolucionar a gestão escolar! Desenvolvida como projeto de conclusão do curso de Engenharia de Software na **FATESG SENAI**, a EaDuck conecta alunos, pais, professores e gestores em um ambiente integrado, promovendo comunicação eficiente, acompanhamento acadêmico e acesso fácil a recursos educacionais. 🚀

## Sobre o Projeto 🌟

O EaDuck nasceu para resolver desafios reais na educação, como a comunicação ineficiente e a complexidade na gestão de desempenho e materiais didáticos. Nosso objetivo? Criar uma plataforma acessível, segura e intuitiva que fortaleça a comunidade escolar e melhore a qualidade do ensino. 📊

### Objetivos 🎯

| **Objetivo** | **Descrição** |
|--------------|---------------|
| Comunicação 📩 | Facilitar o fluxo de informações entre alunos, pais, professores e gestores. |
| Desempenho 📈 | Simplificar o registro e acompanhamento do progresso acadêmico. |
| Recursos 📚 | Centralizar materiais didáticos em um único ambiente digital. |
| Gestão 🗂️ | Otimizar processos administrativos, como tarefas e eventos. |
| Engajamento 🤝 | Incentivar a participação ativa da comunidade escolar. |

## Funcionalidades Principais ✨

A EaDuck oferece um conjunto robusto de recursos para atender às necessidades escolares:

| **Funcionalidade** | **Descrição** | **Prioridade** |
|--------------------|---------------|----------------|
| Cadastro de Usuários | Gerenciamento de contas para alunos, pais, professores e admins. | Alta |
| Comunicação Interna | Envio de mensagens, notificações e fóruns. | Alta |
| Registro de Notas | Professores registram notas, frequência e observações. | Alta |
| Materiais Didáticos | Publicação e acesso a arquivos, links e vídeos. | Alta |
| Relatórios | Geração de relatórios acadêmicos e financeiros. | Média |
| Segurança de Dados | Criptografia de senhas e conformidade com LGPD. | Alta |

## Tecnologias Utilizadas 🛠️

Construímos a EaDuck com ferramentas modernas para garantir desempenho, escalabilidade e usabilidade:

| **Camada** | **Tecnologia** | **Finalidade** |
|------------|----------------|----------------|
| Front-end | Angular, TypeScript, TailwindCSS, SCSS | Interface dinâmica e responsiva |
| Back-end | Java, Spring Boot | Lógica de negócios e APIs |
| Banco de Dados | Supabase (PostgreSQL Cloud) | Armazenamento relacional de dados online |
| Design | Figma | Prototipagem de interfaces intuitivas |

## Equipe 💪

Desenvolvido com paixão por:

- **Gabriel Henriques Sales**  
- **Pedro Augusto dos Santos Andrade**  
- **Aleardo Cartocci Branquinho Senna**  
- **Orientadora**: Thielle Cathia de Paula dos Santos  

Agradecemos aos professores da FATESG e a todos que apoiaram essa jornada! 🙌

## Como Começar 🏁

Quer explorar a EaDuck? Siga os passos abaixo para configurar o projeto localmente:

1. **Pré-requisitos**:
   - Node.js (para Angular)
   - Java JDK 17+ (para back-end)
   - Maven 3.9+
   - Acesso à internet
   - Figma (para visualizar protótipos)

2. **Instalação**:
   ```bash
   # Clone o repositório (se disponível)
   git clone https://github.com/eaduck/eaduck.git

   # Instale dependências do front-end
   cd frontend
   npm install

   # Configure o back-end
   cd ../backend
   mvn install
   ```

3. **Rodando a Aplicação**:
   ```bash
   # Inicie o front-end
   cd frontend
   ng serve

   # Inicie o back-end
   cd ../backend
   mvn spring-boot:run
   ```

4. **Acesse**:
   - Front-end: `http://localhost:4200`
   - Documentação da API: `http://localhost:8080/swagger-ui`

## Riscos e Mitigações ⚠️

Identificamos possíveis desafios e planejamos soluções:

| **Risco** | **Impacto** | **Mitigação** |
|-----------|-------------|---------------|
| Não conformidade com LGPD | Médio | Auditorias legais regulares |
| Falha no backup de dados | Extremo | Backups automatizados diários |
| Interface confusa | Médio | Testes de usabilidade com usuários |

## Conclusão 🌈

A EaDuck é mais que uma plataforma — é um passo rumo à modernização da educação! Com foco em usabilidade, segurança e inovação, nosso projeto reflete o compromisso com a qualidade e as melhores práticas de engenharia de software. Estamos animados para ver como a EaDuck pode transformar escolas e engajar comunidades educacionais. 💡

---

**EaDuck Team** | FATESG SENAI | 2025 🦆
