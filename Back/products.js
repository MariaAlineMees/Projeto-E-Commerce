const products = [
  // Camisetas
  { id: 1, name: "Camiseta Viajar Faz Bem", qtdEstoque: 5, categoria: "Camisetas", valor: 49.90, imagem: "assets/images/camiseta1.jpg" },
  { id: 2, name: "Camiseta -Pera +Bora #2", qtdEstoque: 5, categoria: "Camisetas", valor: 54.90, imagem: "assets/images/camiseta2.jpg" },
  { id: 3, name: "Camiseta Passaporte", qtdEstoque: 0, categoria: "Camisetas", valor: 59.90, imagem: "assets/images/camiseta3.jpg" },
  { id: 4, name: "Camiseta Fusca", qtdEstoque: 8, categoria: "Camisetas", valor: 44.90, imagem: "assets/images/camiseta4.jpg" },
  { id: 5, name: "Camiseta Wanderlust", qtdEstoque: 3, categoria: "Camisetas", valor: 49.90, imagem: "assets/images/camiseta5.jpg" },
  { id: 6, name: "Camiseta Viagem", qtdEstoque: 10, categoria: "Camisetas", valor: 39.90, imagem: "assets/images/camiseta6.jpg" },
  { id: 7, name: "Camiseta Viajar", qtdEstoque: 3, categoria: "Camisetas", valor: 59.90, imagem: "assets/images/camiseta7.jpg" },
  { id: 8, name: "Camiseta Travel More", qtdEstoque: 6, categoria: "Camisetas", valor: 44.90, imagem: "assets/images/camiseta8.jpg" },
  { id: 9, name: "Camiseta Carimbo", qtdEstoque: 0, categoria: "Camisetas", valor: 54.90, imagem: "assets/images/camiseta9.jpg" },
  { id: 10, name: "Camiseta Travel", qtdEstoque: 7, categoria: "Camisetas", valor: 49.90, imagem: "assets/images/camiseta10.jpg" },

  // Canecas
  { id: 11, name: "Caneca Viajar, Histórias e Fotos", qtdEstoque: 4, categoria: "Canecas", valor: 29.90, imagem: "assets/images/Caneca1.jpg" },
  { id: 12, name: "Caneca Vivo Para Viajar", qtdEstoque: 0, categoria: "Canecas", valor: 24.90, imagem: "assets/images/Caneca2.jpg" },
  { id: 13, name: "Caneca Passaporte", qtdEstoque: 5, categoria: "Canecas", valor: 34.90, imagem: "assets/images/Caneca3.jpg" },
  { id: 14, name: "Caneca Viajar é minha Terapia", qtdEstoque: 2, categoria: "Canecas", valor: 31.90, imagem: "assets/images/Caneca4.jpg" },
  { id: 15, name: "Caneca Chá e Viagem", qtdEstoque: 3, categoria: "Canecas", valor: 29.90, imagem: "assets/images/Caneca5.jpg" },
  { id: 16, name: "Caneca Mosquetão", qtdEstoque: 6, categoria: "Canecas", valor: 32.90, imagem: "assets/images/Caneca6.jpg" },
  { id: 17, name: "Caneca Viajar é Viver", qtdEstoque: 1, categoria: "Canecas", valor: 27.90, imagem: "assets/images/Caneca7.jpg" },
  { id: 18, name: "Caneca Travel", qtdEstoque: 8, categoria: "Canecas", valor: 35.90, imagem: "assets/images/Caneca8.jpg" },

  // Chaveiros
  { id: 19, name: "Chaveiro No Matter Where", qtdEstoque: 9, categoria: "Chaveiros", valor: 12.90, imagem: "assets/images/Chaveiro1.png" },
  { id: 20, name: "Chaveiro Bússola", qtdEstoque: 0, categoria: "Chaveiros", valor: 9.90, imagem: "assets/images/Chaveiro2.png" },
  { id: 21, name: "Chaveiro Viva Cada Momento", qtdEstoque: 4, categoria: "Chaveiros", valor: 11.90, imagem: "assets/images/Chaveiro3.png" },
  { id: 22, name: "Chaveiro Fusca", qtdEstoque: 5, categoria: "Chaveiros", valor: 13.90, imagem: "assets/images/Chaveiro4.png" },
  { id: 23, name: "Chaveiro Avião", qtdEstoque: 2, categoria: "Chaveiros", valor: 10.90, imagem: "assets/images/Chaveiro5.png" },
  { id: 24, name: "Chaveiro Coração", qtdEstoque: 6, categoria: "Chaveiros", valor: 14.90, imagem: "assets/images/Chaveiro6.png" },

  // Agendas
  { id: 25, name: "Agenda Planner de Viagem", qtdEstoque: 7, categoria: "Agendas", valor: 39.90, imagem: "assets/images/Agenda1.png" },
  { id: 26, name: "Agenda Criando Memórias", qtdEstoque: 0, categoria: "Agendas", valor: 34.90, imagem: "assets/images/Agenda2.png" },
  { id: 27, name: "Agenda Diário de viagem", qtdEstoque: 3, categoria: "Agendas", valor: 42.90, imagem: "assets/images/Agenda3.png" },
  { id: 28, name: "Agenda Viajando o Mundo", qtdEstoque: 5, categoria: "Agendas", valor: 37.90, imagem: "assets/images/Agenda4.png" },
  { id: 29, name: "Agenda Time to Travel", qtdEstoque: 2, categoria: "Agendas", valor: 35.90, imagem: "assets/images/Agenda5.png" },
  { id: 30, name: "Agenda Mundo", qtdEstoque: 4, categoria: "Agendas", valor: 41.90, imagem: "assets/images/Agenda6.png" },
  { id: 31, name: "Agenda Moto", qtdEstoque: 7, categoria: "Agendas", valor: 45.90, imagem: "assets/images/Agenda7.png" },
  { id: 32, name: "Agenda Mala", qtdEstoque: 10, categoria: "Agendas", valor: 40.90, imagem: "assets/images/Agenda8.png" }
];

module.exports = products;