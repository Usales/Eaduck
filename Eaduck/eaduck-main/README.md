# EaDuck - Plataforma de Ensino a Distância

## Sobre o Projeto
EaDuck é uma plataforma moderna de ensino a distância desenvolvida com Angular e Spring Boot. O projeto foi criado como parte do curso de desenvolvimento web da Alura.

## Tecnologias Utilizadas
- **Frontend**: Angular 18
- **Backend**: Spring Boot
- **Banco de Dados**: PostgreSQL
- **Deploy**: Netlify (Frontend)

## Estrutura do Projeto
```
eaduck-main/
├── frontend/           # Aplicação Angular
│   └── eaduck-frontend/
├── backend/           # API Spring Boot
└── README.md
```

## Configurações Realizadas

### Frontend (Angular)
- Configurado para deploy no Netlify
- Arquivo `netlify.toml` adicionado com as configurações necessárias
- Build otimizado para produção

### Backend (Spring Boot)
- Configuração do PostgreSQL
- Migrações do banco de dados com Flyway
- Segurança com Spring Security
- Autenticação JWT

## Como Executar

### Frontend
```bash
cd frontend/eaduck-frontend
npm install
npm start
```

### Backend
```bash
cd backend
./mvnw spring-boot:run
```

## Deploy
O frontend está configurado para deploy automático no Netlify. O processo de build é gerenciado pelo arquivo `netlify.toml` na raiz do projeto frontend.

## Credenciais Padrão
- **Email**: admin@eaduck.com
- **Senha**: admin123

## Alterações Recentes
1. Limpeza do repositório Git
2. Configuração do Netlify para deploy automático
3. Ajustes nas configurações de build
4. Documentação atualizada

## Próximos Passos
- [ ] Implementar testes automatizados
- [ ] Adicionar mais funcionalidades de interação
- [ ] Melhorar a interface do usuário
- [ ] Implementar sistema de notificações em tempo real 