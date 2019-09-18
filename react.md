# React.js

> Permite definir a interface através de uma programação declarativa, ou seja, descreve-se o que se deseja na interface ao invés de codificar como a interface deve se comportar.


#### Abordagem

> Baseado em componentes. O Componente possui propriedades, que são somente leitura, e estado.
> Sempre que o estado é alterado, o componente é renderizado novamente.    
> O html é criado a partir do JSX, e inserido em um DOM intermediário chamado de Virtual DOM.
> Para atualizar o DOM real ele compara com o virtual DOM e altera somente as diferenças (Tree Reconciliation).
> Isso permite um alto ganho de desempenho na renderização da aplicação.

#### Cases

https://stackshare.io/react

#### Características

* Criador: Facebook
* Classificação: Biblioteca
* Curva de aprendizado: Curta
* Verbosidade: Baixa
* Desempenho: Alto
* Organização de código: Alta (Porém em uma abordagem diferente)
* Manutenibilidade: Alta
* Adesão da comunidade: Alta
* Quantidade de Recursos: Médio
* Compatibilidade com outras tecnologias: Alta
* Dificuldade de migração de aplicação legado: Baixa

#### Ecosistema

* react.js - Responsável por otimizar a renderização da interface de usuário, componentizar, e controlar o estado;
* react-router - responsável por gerenciar as rotas client-side
* flux - dispatcher que atualiza o estado da aplicação de maneira unidirecional é um padrão com varias implementações como Redux, Reflux,  Facebook Flux, Delorean, Marty, NuclearJS, Fluxible, Alt, Fluxxor, e Flummox 
* JSX - Linguagem baseada em xml que permite que a interface seja descrita dentro do javascript
* create-react-app - ferramenta de linha de comando de transpilação AOT (ahead of time)