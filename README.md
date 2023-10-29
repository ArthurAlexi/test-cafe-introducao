# Integrantes:
* Arthur Alexi
* Bernado Cruz
* Maurício Fernandes
* Pablo Magalhães

## Sumário:
* [Framework](#Framework)
  
  * [Descrição](#Descricao)
  * [Criador](#Criador)
  * [Principais Funcionalidades](#PrincipaisFuncionalidades)
  * [Alguém Utiliza?](#AlguemUtiliza)
  * [Vantagens](#Vantagens)
  * [Desvantagens](#Desvantagens)
  * [Indicações de Uso](#IndicacoesDeUso)
    
* [Categorização](#Categorizacao):
  
  * [Tipos de Teste](#TiposDeTeste)
  * [Níveis de Teste](#NiveisDeTeste)
  
    
* [Instalação](#Instalacao)
  
* [Exemplos de Uso](#ExemplosDeUso)

<a id="FrameWork"></a>
# FrameWork [TestCafe](https://testcafe.io/)

<a id="Descricao"></a>
## Descrição

TestCafe é uma estrutura de teste ponta a ponta para aplicações web. TestCafe é executado em Node.js. ﻿TestCafe suporta todos os três principais sistemas operacionais – Linux, Windows e macOS.

Você pode usar TestCafe para simular cenários comuns de usuário nos principais navegadores de desktop, navegadores de nuvem e em dispositivos móveis. Se o seu site não funcionar bem, os relatórios do TestCafe podem ajudá-lo a diagnosticar o problema.

<a id="Criador"></a>
## Criador

![DevExpress-Logo-Small-Color](https://github.com/ArthurAlexi/test-cafe-introducao/assets/90854173/5d9893f8-41a1-4df3-a279-d002e083416b)

-https://www.devexpress.com/

<a id="PrincipaisFuncionalidades"></a>
## Principais Funcionalidades

### 1. Automatização Cross-Browser
TestCafe é capaz de executar testes em vários navegadores, incluindo Chrome, Firefox, Safari, Edge e Internet Explorer. Ele não requer nenhuma configuração especial para cada navegador.

### 2. Testes Paralelos
TestCafe permite executar testes em paralelo em vários navegadores, melhorando significativamente a eficiência dos testes.

### 3. Testes sem Plugins
Diferente de outras ferramentas de automação que dependem de extensões de navegador, o TestCafe não requer instalação de plugins. Ele executa os testes diretamente no navegador, o que garante uma maior confiabilidade e segurança.

### 4. Seleção de Elementos Fácil
TestCafe fornece seletores simples e flexíveis para localizar elementos na página, o que facilita a criação e manutenção dos testes.

#### 5. Testes Assíncronos
TestCafe lida automaticamente com chamadas assíncronas, esperas implícitas e carregamentos de páginas, tornando a escrita de testes mais simples.

### 6. Relatórios Detalhados
O TestCafe gera relatórios detalhados após a execução dos testes, tornando fácil identificar problemas e acompanhar o progresso dos testes.

### 7. Screenshots e Gravações de Vídeo
O TestCafe pode capturar screenshots e gravar vídeos das execuções dos testes, o que é útil para depuração e documentação.

### 8. Integração com Diversas Ferramentas 
TestCafe pode ser integrado com diversas ferramentas de CI/CD, como Jenkins, Travis CI, e outros, para automação contínua.

### 9. Suporte a Page Objects
O framework suporta o padrão Page Object, o que ajuda a organizar melhor o código dos testes e a melhorar a manutenção.

### 10. Testes em Dispositivos Móveis
Embora seu foco principal seja em testes de navegador, o TestCafe também pode ser usado para testar aplicativos da web em dispositivos móveis.

### 11. Testes em Ambientes de Desenvolvimento Locais e Remotos
Você pode executar testes em seu ambiente de desenvolvimento local ou em servidores remotos, o que é útil para testes de integração e aceitação.

### 12. Testes de Segurança
O TestCafe pode ser usado para testes de segurança, ajudando a identificar vulnerabilidades em seu aplicativo da web.

<a id="AlguemUtiliza"></a>
## Alguém Utiliza?

Algumas empresas que reconhecidamente utilizam o TestCafe ou que mencionaram publicamente seu uso incluem:

* **Microsoft**

* **DevExpress**

* **Progress Telerik**
 
* **Devbridge**:

* **D3.js**: 

<a id="Vantagens"></a>
## Vantagens

### 1. Sem dependências de terceiros
TestCafe não depende de Selenium ou outro software de teste. TestCafe é executado na popular plataforma Node.js e usa os navegadores que você já possui. Para muitos usuários, o processo de instalação consiste em uma única etapa:

### 2. Testes de JavaScript legíveis por humanos
Os componentes principais da nossa API Node.js são fáceis de usar, mesmo com pouco ou nenhum conhecimento prévio de JavaScript.

### 3. Solicitações simuladas
Emule respostas HTTP para alimentar dados de amostra em seu aplicativo, solucionar erros de conectividade e enganar o tempo de inatividade.

### 4. Injeções do lado do cliente
Execute código personalizado do lado do cliente para analisar a página da web, examinar seu estado ou até mesmo adicionar dependências extras.

### 5. Testes simultâneos
Execute seus testes em vários navegadores ao mesmo tempo para descobrir rapidamente erros específicos do navegador.

### 6. Teste de API
TestCafe inclui um conjunto abrangente de ferramentas de teste de API do lado do servidor. Você pode adicionar testes de API dedicados ao seu conjunto de testes ou incluir métodos de teste de API em testes funcionais existentes.

### 7. Gratuito e de código aberto
TestCafe é distribuído gratuitamente sob a licença do MIT.

### 8. Estúdio TestCafe
A GUI e o gravador de teste integrados ao TestCafe Studio tornam nosso produto acessível a pessoas com zero experiência em programação.
<a id="Desvantagens"></a>

## Desvantagens

### 1. Custo de Aprendizado
Embora o TestCafe seja considerado fácil de aprender em comparação com algumas outras ferramentas de automação, ainda requer tempo e esforço para os membros da equipe se familiarizarem com a sintaxe e os conceitos do TestCafe, especialmente se forem novos na automação de testes.

### 2. Recursos Limitados para Testes Móveis
Embora o TestCafe seja principalmente voltado para testes de navegadores da web, ele oferece suporte para testes de aplicativos móveis, mas os recursos específicos para testes móveis podem ser limitados em comparação com ferramentas especializadas em testes móveis.

### 3. Cobertura Limitada de Dispositivos Móveis
A cobertura de dispositivos móveis é limitada aos dispositivos em que os navegadores móveis podem ser usados. Não é uma solução de teste para dispositivos móveis nativos.

### 4. Desempenho
Para testes complexos ou extensos, o desempenho do TestCafe pode ser uma desvantagem, uma vez que a execução de testes em paralelo pode ser mais lenta em comparação com algumas outras ferramentas.

### 5. Customizações Complexas
Em alguns casos, a criação de soluções personalizadas ou a implementação de cenários de teste muito complexos no TestCafe pode ser desafiadora e exigir um conhecimento mais avançado.

### 6. Integração com Plataformas de Terceiros
A integração com algumas ferramentas ou ambientes de desenvolvimento pode não ser tão direta como em outras ferramentas. Você pode precisar fazer algum trabalho adicional para configurar a integração com certas ferramentas de CI/CD, por exemplo.

### 7. Falta de Suporte a Captura de Redes
O TestCafe não oferece suporte nativo para a captura e análise de tráfego de rede durante os testes, o que pode ser importante em cenários de testes de segurança.

### 8. Documentação Limitada
Embora haja documentação disponível, alguns usuários podem considerar que a documentação do TestCafe é menos abrangente ou menos organizada em comparação com outras ferramentas de automação.

### 9. Suporte à Comunidade
A comunidade em torno do TestCafe, embora crescente, pode ser menor do que a de algumas outras ferramentas de automação, o que pode levar a menos recursos e soluções de problemas disponíveis.


<a id="IndicacoesDeUso"></a>
## Indicações de Uso

O TestCafe é uma ferramenta de automação de testes recomendada para testar aplicativos da web em diversos navegadores, oferecendo suporte a Chrome, Firefox, Safari, Edge e Internet Explorer. É especialmente indicado para testes que exigem a execução eficiente em vários navegadores em paralelo, aprimorando a eficiência dos testes. Sua característica de funcionar sem depender de plugins torna-o uma escolha confiável, evitando a necessidade de instalar extensões de navegador. Além disso, o TestCafe pode ser usado para testar aplicativos da web em dispositivos móveis, embora sua especialização principal seja em testes de navegadores. Também é útil para testes de segurança, auxiliando na identificação de vulnerabilidades em aplicativos da web.

<a id="Categorizacao"></a>
# Categorização

<a id="TiposDeTeste"></a>
## Tipos de Teste

o TestCafe é principalmente associado à categoria "Tipo de Teste", pois é uma ferramenta que se concentra na automação de testes de funcionalidade e interação do usuário em aplicativos da web. No entanto, sua versatilidade permite que ele seja usado em vários níveis de teste, dependendo das necessidades específicas de um projeto.

<a id="NiveisDeTeste"></a>
## Níveis de Teste

 Embora sua principal aplicação seja em testes de sistema (ou seja, testes de nível mais alto que avaliam o aplicativo como um todo), o TestCafe também pode ser usado em níveis de teste mais baixos, como testes de integração, quando a automação é necessária para garantir que componentes interajam corretamente.


<a id="Instalacao"></a>
# Instalação

## Pré-requisitos:

TestCafe requer uma versão recente da plataforma Node.js. ﻿Execute o seguinte comando para confirmar se sua configuração inclui [Node.js](https://nodejs.org/en/download):
```
node --version
npm --version
```

## Instalação

Execute o comando abaixo no seu terminal:
```
npm install -g testcafe
```

<a id="ExemplosDeUso"></a>
# Exemplos de Uso

## My First Test with TestCafe

### 1. Os testes TestCafe são scripts Node.js. Crie um novo arquivo TypeScript ou JavaScript e abra-o no editor de texto.

### 2. Os arquivos de teste TestCafe consistem em acessórios e testes . Um fixture é um grupo de testes que compartilham o mesmo URL inicial. Invoque a fixturepalavra-chave para criar um novo fixture.

```javascript
fixture('My First Test with TestCafe')
```
### 3. Use o método page para definir a URL inicial do fixture.

```javascript
fixture('My First Test with TestCafe')
    .page('https://devexpress.github.io/testcafe/example');
```
### 4. Finalmente, declare um novo teste com o **test** método.
```javascript  
fixture('Getting Started')
    .page('https://devexpress.github.io/testcafe/example');

test('My first test', async t => {
    // Test code goes here
});
```

### 5. Encadeie múltiplas ações

```javascript  
fixture('My first test')
    .page('https://devexpress.github.io/testcafe/example');

test('My first test', async t => {
    await t
        .typeText('#developer-name', 'Steve Jobs')
        .click('#submit-button');
});
```

### 6. Crie uma validação:

```javascript
import { Selector } from 'testcafe';

await t.expect(Selector('#article-header').innerText).eql('Thank you, Steve Jobs!');
```

e a adicione no seu teste:

```javascript  
import { Selector } from 'testcafe';

fixture('My first test')
    .page('https://devexpress.github.io/testcafe/example');

test('My first test', async t => {
    await t
        .typeText('#developer-name', 'Steve Jobs')
        .click('#submit-button')
        .expect(Selector('#article-header').innerText).eql('Thank you, Steve Jobs!');
});
```

### 7. Execute o teste:

Execute o comando abaixo no terminal:
```
testcafe chrome getting-started.js
```

Em caso de Sucesso 

![image](https://github.com/ArthurAlexi/test-cafe-introducao/assets/90854173/10f0095c-d7fb-4934-9311-d91faa2d8ae1)

Em caso de erro

![image](https://github.com/ArthurAlexi/test-cafe-introducao/assets/90854173/2c874ddd-aff5-4565-9345-3726bb319526)



