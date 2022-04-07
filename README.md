![image](https://user-images.githubusercontent.com/60453161/162291542-e72cc610-106b-404d-a330-40e080686377.png)

# Calculadora Romana

Esse projeto tem como objetivo produzir uma calculador que recebera algarismos romanos em vem de algarismos no sistema decimal e devolverá ao usuario os calculos tantos em algarismos romanos quanto decimais.

Foi um trabalho produzido com o prazo de uma semana, afim de ser entregue ao professor da Unicarioca Antonio Felipe Podgorski Bezerra para a matéria DESENVOLVIMENTO DE APLICAÇÕES WEB 2022/1

## Tecnologias Utilizadas

- HTML -> Utilizado para a produção de uma pagina statica.
- CSS -> CSS puro, utilzando flexbox para um layout responsivo. Afim de colaborar em telas de formato HD com 720 x 1280 pixeils e superiores.
- Javascript  ES6 -> Utilizando a conveção ES6 e organizando os arquivos por modulos.
- Gitflow -> Ultilizando apenas a main (não vimos a necessidade de adcionar uma develop, devido ao grupo pequeno e fechado de devs) para criar branchs e trabalharmos separadamente sem interferir no codigo em produção. Utilizando as boas praticas de criar PR para outros DEVS aprovarem e testarem.

## Um pouco sobre o Código

### CSS

Optamos por separar o css em varios arquivos afim de dividir a estilização de areas distintas do site. E importalas em um unico arquivo que é carregado nas paginas html.

![image](https://user-images.githubusercontent.com/60453161/162297493-8ddf4278-9c9d-44ff-8daf-7edcfc711813.png)


### HTML

Utilizamos apenas uma pagina HTML, criando a tag <div> aplicando o display flex para dividir as "três" areas do site, calculador, resultado romando  e resultado decimal. A tag <table> para a produção da interface da calculadora é envolvida por uma tag <div> assim como a sessão de resultado romando e decimal. 
Separamos essas areas com uma div estilizada por css, para criar as duas barras que vemos no nosso template.

![image](https://user-images.githubusercontent.com/60453161/162296939-2bb2e7be-b684-4e6a-b476-212847c9e329.png)

  
### Javascript
  
Como ja mencionado antes, utilizamos o ES6 tipo modulo. Para separarmos as funções que convertem os romanos para decimal afim de executar o calculo atribuido pelo usuario e apenas esse calculo. Utilizamos o conversor de decimal para romano e apresentamos os dois resultados. 

![image](https://user-images.githubusercontent.com/60453161/162298037-4bf009d4-af5a-45de-bdb2-b3f2252086aa.png)

  
## Projeto

https://user-images.githubusercontent.com/60453161/162291573-32d189ae-ab86-4bce-bab7-81de1ef010ef.mp4

## Projeto realizado pelos develops

- [Leonardo Pinto Silva Calazans - Matricula: 2020101772](https://github.com/LeonardoCalazans)
- [Wendel Felipe Nascimento Nogueira - Matrícula: 2020101189](https://github.com/WendelNogueira23)
- [Lucas Gomes Ribeiro - Matrícula: 2020101323](https://github.com/LucsGomes)
