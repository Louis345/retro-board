import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let cards = [
  {
    id: 1,
    category: 'Went Well',
    text: 'We ate food', 
    likes: 0,
    dislikes: 0
  },
  {
    id: 2,
    category: 'To Improve',
    text: 'Eat more food next time',
    likes: 0,
    dislikes: 0
  },
  {
    id: 3,
    category: 'Action Points',
    text: 'bring food to next class',
    likes: 0,
    dislikes: 0
  },
  {
    id: 4, 
    category: 'Went Well',
    text: 'We drank water',
    likes: 0,
    dislikes: 0
  }
];

function CardCategory(props) {      
  console.log(props.cards)    
  return (
                <div class="RetroBoardCategory RetroBoardCategory-1">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <h2>{props.title}</h2>
                <button type="button" class="button button-new"onClick={() => props.addItem(props.category)}>
                  <span class="sr-only">Add to "Went Well"</span>+
                </button>
                {props.cards.map(card => {
                  if (props.category === card.category){
                    return(
                      <div class="Retro">
                      <label class="sr-only" for="retro-label-3">Enter retro text</label>
                      <textarea id="retro-label-3" class="textbox" placeholder="Enter text here" rows="1">{card.text}</textarea>
                      <div class="ButtonGroup">
                        <button type="button" class="button button-left"onClick={() => props.moveLeft(card.id, card.category)}><span class="sr-only">Move Left</span>&lt;</button>
                        <button type="button" class="button fa fa-thumbs-up" onCLick={() => props.like(card.id, card.likes)}><span>{props.likes}</span></button>
                        <button type="button" class="button button-delete"onClick={() => props.delete(card.id)}><span class="sr-only">Delete</span>×</button>
                        <button type="button" class="button fa fa-thumbs-down" onCLick={() => props.dislike(card.id, card.dislikes)}><span>{props.dislikes}</span></button>
                        <button type="button" class="button button-right"onClick={() => props.moveRight(card.id, card.category)}><span class="sr-only">Move Right</span>&gt;</button>
                      </div>
                    </div>
                    );

                  }

                })}

                </div> 
  );
}

class App extends Component {
  state = {
    lastId: 4,
    cards: cards
  }

  moveRight = (id, category) => {
    this.setState({
      cards: this.state.cards.map(card => {
        if (card.id === id){
         if (card.category === 'Went Well') card.category = 'To Improve';
         else if (card.category === 'To Improve') card.category = 'Action Points';
         else card.category = 'Action Points';
      }
      return card;
    })
    });
  }

  moveLeft = (id, category) => {
    this.setState({
      cards: this.state.cards.map(card => {
        if (card.id === id) {
         if (card.category === 'Action Points') card.category = 'To Improve';
         else if (card.category === 'To Improve') card.category = 'Went Well';
          else card.category = 'Went Well';
      }
      return card;
    })
    });
  }

  delete = (id) => {
    this.setState({
      cards: this.state.cards.filter(card => {
        return card.id !== id;
      })
    });
  }

  addItem = (category) => {
    const {cards} = this.state;
    const newCard  = {
      id: this.state.lastId + 1,
      category: category,
      text: 'new words'
    }
    
      this.setState({
      cards:[...this.state.cards,newCard],
      lastId: ++this.state.lastId
    },()=> console.log(this.state))
  }

  like = (id, likes) => {
    this.setState({
      cards: this.state.cards.map(card => {
        if (card.id === id) {
        card.likes = card.likes + 1;
        }
        return card;
      })
    })
}

  dislike = (id, dislikes) => {
    this.setState({
      cards: this.state.cards.map(card => {
        if (card.id === id) {
        card.dislikes = card.dislikes + 1;
        }
        return card;
      })
    })
  }

  render() {
    return (
        
      
          <main class="content">
            <h1>Retro Board</h1>
            <div class="RetroBoad">
      
              <CardCategory
              title = "Went Well"
              category = "Went Well"
              cards = {this.state.cards}
              addItem = {this.addItem}
              delete = {this.delete}
              moveLeft = {this.moveLeft}
              moveRight = {this.moveRight}
              like = {this.like}
              dislike = {this.dislike}
              />
      
              <CardCategory
              title = "To Improve"
              category = "To Improve"
              cards = {this.state.cards}
              addItem = {this.addItem}
              delete = {this.delete}
              moveLeft = {this.moveLeft}
              moveRight = {this.moveRight}
              like = {this.like}
              dislike = {this.dislike}
              />
                
      
              <CardCategory
              title = "Action Points"
              category = "Action Points"
              cards = {this.state.cards}
              addItem = {this.addItem}
              delete = {this.delete}
              moveLeft = {this.moveLeft}
              moveRight = {this.moveRight}
              like = {this.like}
              dislike = {this.dislike}
              />
            </div>
          </main>
    
        
    );
  }
}

export default App;
