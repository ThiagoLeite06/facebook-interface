import React, { Component } from 'react';

import './styles.css';
import PostItem from '../PostItem';

class PostList extends Component {

  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://i.pravatar.cc/150?img=68"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Júlia Fernandes",
              avatar: "https://i.pravatar.cc/150?img=47"
            },
            content: "A população ela precisa da Zona Franca de Manaus, porque na Zona franca de Manaus, não é uma zona de exportação, é uma zona para o Brasil. Portanto ela tem um objetivo, ela evita o desmatamento, que é altamente lucravito. Derrubar arvores da natureza é muito lucrativo!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Vinícius Duarte",
          avatar: "https://i.pravatar.cc/150?img=52"
        },
        date: "25 Mai 2019",
        content: "Eu dou dinheiro pra minha filha. Eu dou dinheiro pra ela viajar, então é... é... Já vivi muito sem dinheiro, já vivi muito com dinheiro. -Jornalista: Coloca esse dinheiro na poupança que a senhora ganha R$10 mil por mês. -Dilma: O que que é R$10 mil?",
        comments: [
          {
            id: 1,
            author: {
              name: "Akira Nohara",
              avatar: "https://i.pravatar.cc/150?img=62"
            },
            content: "A população ela precisa da Zona Franca de Manaus, porque na Zona franca de Manaus, não é uma zona de exportação, é uma zona para o Brasil. Portanto ela tem um objetivo, ela evita o desmatamento, que é altamente lucravito. Derrubar arvores da natureza é muito lucrativo!"
          },
          {
            id: 2,
            author: {
              name: "Laura Silva",
              avatar: "https://i.pravatar.cc/150?img=32"
            },
            content: "A única área que eu acho, que vai exigir muita atenção nossa, e aí eu já aventei a hipótese de até criar um ministério. É na área de... Na área... Eu diria assim, como uma espécie de analogia com o que acontece na área agrícola."
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Maria Inês",
          avatar: "https://i.pravatar.cc/150?img=34"
        },
        date: "20 Mai 2019",
        content: "No meu xinélo da humildade eu gostaria muito de ver o Neymar e o Ganso. Por que eu acho que.... 11 entre 10 brasileiros gostariam. Você veja, eu já vi, parei de ver. Voltei a ver, e acho que o Neymar e o Ganso têm essa capacidade de fazer a gente olhar.",
        comments: []
      },
      {
        id: 4,
        author: {
          name: "Letícia Moraes",
          avatar: "https://i.pravatar.cc/150?img=45"
        },
        date: "04 Mai 2019",
        content: "Primeiro eu queria cumprimentar os internautas. -Oi Internautas! Depois dizer que o meio ambiente é sem dúvida nenhuma uma ameaça ao desenvolvimento sustentável. E isso significa que é uma ameaça pro futuro do nosso planeta e dos nossos países. O desemprego beira 20%, ou seja, 1 em cada 4 portugueses.",
        comments: [
          {
            id: 1,
            author: {
              name: "Fernanda Oliveira",
              avatar: "https://i.pravatar.cc/150?img=29"
            },
            content: "Se hoje é o dia das crianças... Ontem eu disse: o dia da criança é o dia da mãe, dos pais, das professoras, mas também é o dia dos animais, sempre que você olha uma criança, há sempre uma figura oculta, que é um cachorro atrás. O que é algo muito importante!"
          }
        ]
      },
    ]
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="post-list">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}

      </div>

    );
  }
}

export default PostList;