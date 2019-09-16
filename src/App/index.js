import React from 'react';
import './styles.scss';

const App = () => {

  const itens = [
    {
      urlImage: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "White cat",
      description: "Its beautifull white cat"
    },
    {
      urlImage: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "White cat",
      description: "Its beautifull white cat"
    },
    {
      urlImage: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "White cat",
      description: "Its beautifull white cat"
    },
    {
      urlImage: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "White cat",
      description: "Its beautifull white cat"
    },
    {
      urlImage: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "White cat",
      description: "Its beautifull white cat"
    },
    {
      urlImage: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "White cat",
      description: "Its beautifull white cat"
    },
    {
      urlImage: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "White cat",
      description: "Its beautifull white cat"
    },
    {
      urlImage: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "White cat",
      description: "Its beautifull white cat"
    },
    {
      urlImage: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "White cat",
      description: "Its beautifull white cat"
    },
    {
      urlImage: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "White cat",
      description: "Its beautifull white cat"
    },
    {
      urlImage: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "White cat",
      description: "Its beautifull white cat"
    },
  ]

  return (
    <div className="container">
      <div className="cards-list">
        {
          itens.map(item => {
            return (
              <div className="card-item">
                <img src={item.urlImage} />
                <div className="info">
                  <span className="title" >{item.title}</span>
                  <span className="description">{item.description}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App;
