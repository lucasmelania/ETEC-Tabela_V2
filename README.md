# 📊 ETEC - Tabela de IMC

Projeto desenvolvido em sala de aula com o objetivo de calcular o **Índice de Massa Corporal (IMC)** das pessoas e exibir automaticamente sua **classificação** de acordo com os valores definidos pela tabela de referência.

## 📌 Objetivo

Criar uma tabela de pessoas onde o sistema calcula automaticamente o IMC a partir do **peso** e da **altura**, e define a classificação correspondente (Abaixo do peso, Peso normal, Sobrepeso, Obesidade Grau I, II ou III), utilizando conceitos de **JavaScript modular**, **HTML** e manipulação do **DOM**.

## ✅ Requisitos do Projeto

- [x] Tabela com **dados das pessoas** (nome, idade, altura e peso)  
- [x] **Cálculo automático do IMC**  
- [x] Definição da **classificação** com base no IMC:
  - IMC menor que **18,5** → Abaixo do peso  
  - IMC entre **18,5 e 24,9** → Peso normal  
  - IMC entre **25,0 e 29,9** → Sobrepeso  
  - IMC entre **30,0 e 34,9** → Obesidade Grau I  
  - IMC entre **35,0 e 39,9** → Obesidade Grau II  
  - IMC maior que **40,0** → Obesidade Grau III (Mórbida)  
- [x] Uso de **módulos JavaScript (import/export)**  
- [x] Manipulação da **DOM para atualizar a tabela**

## ⚙️ Funcionamento

O script percorre cada linha da tabela (`tbody`), coleta os valores de **altura** e **peso**, calcula o IMC e define a classificação com base nas regras estabelecidas.

## 👨‍💻 Desenvolvedores

- Lucas Lopes Melania  
- Daniel Paes  

---

Projeto educacional desenvolvido na **ETEC** para prática de **JavaScript, módulos e manipulação de tabelas no HTML**.
