# 🍕 Delivery Pro: Solução Digital Inteligente para Gastronomia

**Delivery Pro** é uma plataforma de e-commerce de alto desempenho desenvolvida para transformar a forma como estabelecimentos locais gerenciam seus pedidos. Focada em conversão e agilidade, a solução elimina a fricção no atendimento via WhatsApp, automatizando a coleta de dados e a logística de entrega.

## 🚀 Diferenciais do Projeto (Setup R$ 1.200,00)

Diferente de landing pages comuns, este projeto foi arquitetado como uma **Aplicação Web Data-Driven** (guiada por dados), oferecendo funcionalidades de nível empresarial sem a necessidade imediata de um servidor backend caro:

*   **🛒 Checkout Inteligente:** Sistema de carrinho com persistência em `localStorage`. O cliente pode fechar o navegador e, ao voltar, o pedido ainda estará lá.
*   **📐 Customização Avançada:** Suporte total para múltiplos tamanhos (P, M, G, GG) e lógica de pizzas **Meio-a-Meio**, com cálculo automático baseado no sabor de maior valor.
*   **📍 Logística Integrada:** Gestão de Entrega (com taxa dinâmica) ou Retirada no Balcão, coletando endereço completo e ponto de referência de forma organizada.
*   **⏰ Automação de Horários:** Bloqueio automático de pedidos fora do horário de funcionamento ou em dias de folga do estabelecimento.
*   **💸 Gestão de Pagamento:** Validação rigorosa de troco e suporte a Pix, Cartão (Maquininha) e Dinheiro.

### 🛠️ Stack Tecnológica

*   **Front-end:** HTML5, Tailwind CSS (Design Mobile-First e Responsivo).
*   **Lógica:** Vanilla JavaScript (ES6+) focado em performance e zero dependências externas pesadas.
*   **Arquitetura:** `config.js` independente para separação entre Lógica de Negócio e Dados de Produto, facilitando a escalabilidade "White Label".

## 📐 Arquitetura Data-Driven

O sistema foi desenhado para ser escalável. Através do arquivo `config.js`, é possível alterar todo o funcionamento da loja em segundos:

```javascript
// Exemplo de facilidade de manutenção
const CONFIG = {
    business: {
        deliveryFee: 7.00
    },
    menu: [
        /* Itens dinâmicos aqui */
    ]
}
```

## 📧 Contato

Desenvolvido por **Maurilio**
*Especialista em Soluções de Automação e Desenvolvimento Web*

[<img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" width="30" height="30" alt="WhatsApp" /> Fale Comigo](https://wa.me/5584994203878)

## 📄 Licença e Propriedade Intelectual

Este software é um produto comercial desenvolvido por **Maurilio**.

*   **Licença de Uso:** A aquisição deste sistema garante ao contratante uma licença de uso não exclusiva, intransferível e limitada a um único estabelecimento comercial.
*   **Direitos Autorais:** Todos os direitos sobre o código-fonte, arquitetura de dados e lógica de negócio permanecem sob propriedade exclusiva do desenvolvedor.
*   **Restrições:** É estritamente proibida a revenda, sublicenciamento ou distribuição de cópias deste template para terceiros sem autorização prévia por escrito.
