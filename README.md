# ðŸ“± PAM_ConsumerMobile

[![React Native](https://img.shields.io/badge/React%20Native-0.72-61DAFB?style=flat-square&logo=react)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-49.0-000020?style=flat-square&logo=expo)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

## ðŸ“‹ Sobre

Aplicativo mÃ³vel para consumidores da plataforma PAM. Permite solicitar serviÃ§os de manutenÃ§Ã£o, acompanhar pedidos, avaliar prestadores, gerenciar pagamentos e comunicar-se em tempo real com os tÃ©cnicos. Interface intuitiva e moderna para iOS e Android.

Este aplicativo mÃ³vel faz parte da **PAM (Plataforma de Agendamento de ManutenÃ§Ã£o)**, oferecendo uma experiÃªncia nativa e intuitiva para dispositivos iOS e Android.

## ðŸ—ï¸ Estrutura do Projeto

`
PAM_ConsumerMobile/
â”œâ”€â”€ assets/          # Imagens, Ã­cones e recursos
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ components/  # Componentes reutilizÃ¡veis
â”‚   â”œâ”€â”€ screens/     # Telas da aplicaÃ§Ã£o
â”‚   â”œâ”€â”€ navigation/  # ConfiguraÃ§Ã£o de navegaÃ§Ã£o
â”‚   â”œâ”€â”€ services/    # ServiÃ§os e APIs
â”‚   â”œâ”€â”€ hooks/       # Custom hooks
â”‚   â”œâ”€â”€ utils/       # UtilitÃ¡rios e helpers
â”‚   â”œâ”€â”€ styles/      # Estilos e temas
â”‚   â””â”€â”€ types/       # DefiniÃ§Ãµes de tipos TypeScript
â”œâ”€â”€ app.json         # ConfiguraÃ§Ã£o do Expo
â””â”€â”€ README.md        # Este arquivo
`

## ðŸš€ Tecnologias

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma de desenvolvimento
- **TypeScript** - Tipagem estÃ¡tica
- **React Navigation** - NavegaÃ§Ã£o entre telas
- **Expo Camera** - Funcionalidades de cÃ¢mera
- **AsyncStorage** - Armazenamento local
- **Axios** - Cliente HTTP
- **React Hook Form** - Gerenciamento de formulÃ¡rios
- **SignalR** - ComunicaÃ§Ã£o em tempo real

## ðŸ“¦ PrÃ©-requisitos

- [Node.js 18+](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Android Studio](https://developer.android.com/studio) (para Android)
- [Xcode](https://developer.apple.com/xcode/) (para iOS - apenas macOS)

## ðŸ”§ InstalaÃ§Ã£o e ExecuÃ§Ã£o

### Desenvolvimento Local

1. **Clone o repositÃ³rio**
   `ash
   git clone https://github.com/EmmanuelSMenezes/PAM_ConsumerMobile.git
   cd PAM_ConsumerMobile
   `

2. **Instale as dependÃªncias**
   `ash
   npm install
   # ou
   yarn install
   `

3. **Configure as variÃ¡veis de ambiente**
   `ash
   cp .env.example .env
   # Edite o arquivo .env com suas configuraÃ§Ãµes
   `

4. **Inicie o servidor de desenvolvimento**
   `ash
   expo start
   `

5. **Execute no dispositivo**
   - **Android**: expo start --android ou escaneie o QR code com o app Expo Go
   - **iOS**: expo start --ios ou escaneie o QR code com a cÃ¢mera do iPhone
   - **Web**: expo start --web

### Build de ProduÃ§Ã£o

1. **Android APK**
   `ash
   eas build --platform android
   `

2. **iOS IPA**
   `ash
   eas build --platform ios
   `

3. **Publicar na Store**
   `ash
   eas submit --platform android
   eas submit --platform ios
   `

## ðŸ“± Funcionalidades

- âœ… **Interface Nativa** - Performance otimizada
- âœ… **NavegaÃ§Ã£o Intuitiva** - UX/UI pensada para mobile
- âœ… **CÃ¢mera Integrada** - Captura de fotos e documentos
- âœ… **NotificaÃ§Ãµes Push** - Alertas em tempo real
- âœ… **Modo Offline** - Funcionalidades bÃ¡sicas sem internet
- âœ… **GeolocalizaÃ§Ã£o** - LocalizaÃ§Ã£o de serviÃ§os prÃ³ximos
- âœ… **Chat em Tempo Real** - ComunicaÃ§Ã£o com prestadores
- âœ… **Pagamento Integrado** - MÃºltiplas formas de pagamento

## ðŸ”’ AutenticaÃ§Ã£o

O aplicativo utiliza autenticaÃ§Ã£o segura com:

- Login biomÃ©trico (Touch ID / Face ID)
- AutenticaÃ§Ã£o por SMS
- Login social
- Tokens JWT seguros

## ðŸŒ ConfiguraÃ§Ãµes

### VariÃ¡veis de Ambiente

| VariÃ¡vel | DescriÃ§Ã£o | Exemplo |
|----------|-----------|---------|
| API_URL | URL da API backend | https://api.pam.com |
| MAPS_API_KEY | Chave da API do Google Maps | AIza... |
| PUSH_NOTIFICATION_KEY | Chave para notificaÃ§Ãµes | key123... |

### app.json

`json
{
  "expo": {
    "name": "PAM_ConsumerMobile",
    "slug": "pam-consumer",
    "version": "1.0.0",
    "platforms": ["ios", "android"],
    "orientation": "portrait"
  }
}
`

## ðŸ“Š Performance

- **Bundle Size**: Otimizado com tree-shaking
- **Startup Time**: < 3 segundos
- **Memory Usage**: Gerenciamento eficiente de memÃ³ria
- **Battery**: Otimizado para economia de bateria

## ðŸ§ª Testes

`ash
# Executar testes unitÃ¡rios
npm test

# Executar testes com cobertura
npm run test:coverage

# Executar testes E2E
npm run test:e2e
`

## ðŸ“± Compatibilidade

### Android
- **VersÃ£o MÃ­nima**: Android 6.0 (API 23)
- **VersÃ£o Alvo**: Android 13 (API 33)
- **Arquiteturas**: arm64-v8a, armeabi-v7a

### iOS
- **VersÃ£o MÃ­nima**: iOS 12.0
- **VersÃ£o Alvo**: iOS 16.0
- **Dispositivos**: iPhone 6s+ e iPad Air 2+

## ðŸ¤ ContribuiÃ§Ã£o

1. Fork o projeto
2. Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)
3. Commit suas mudanÃ§as (git commit -m 'Add some AmazingFeature')
4. Push para a branch (git push origin feature/AmazingFeature)
5. Abra um Pull Request

## ðŸ“„ LicenÃ§a

Este projeto estÃ¡ sob a licenÃ§a MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ðŸ†˜ Suporte

- ðŸ“§ Email: suporte@pam.com
- ðŸ“± WhatsApp: +55 (11) 99999-9999
- ðŸ› Issues: [GitHub Issues](https://github.com/EmmanuelSMenezes/PAM_ConsumerMobile/issues)

---

<div align="center">
  <strong>PAM - Plataforma de Agendamento de ManutenÃ§Ã£o</strong><br>
  Desenvolvido com â¤ï¸ pela equipe PAM
</div>
