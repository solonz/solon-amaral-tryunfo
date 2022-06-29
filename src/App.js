import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const initialState = {
  cardName: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
};
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      ...initialState,
      // myCards: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, this.checkButton);
  };

  onSaveButtonClick = () => {
    const { cardTrunfo } = this.state;
    this.handleClearInput();
    this.setState({
      hasTrunfo: cardTrunfo,
    });
  }

  checkButton = () => {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const maxValue = 90;
    const maxSum = 210;
    const hasNoEmptyFields = [cardName, cardDescription, cardImage]
      .every((e) => e !== '');

    const atributtesLimit = [cardAttr1, cardAttr2, cardAttr3]
      .every((e) => Number(e) <= maxValue && Number(e) >= 0 && e !== '')
       && (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) <= maxSum;

    this.setState({ isSaveButtonDisabled:
     !(hasNoEmptyFields && atributtesLimit) });
  };

  handleClearInput = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
    });
  }

  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      // myCards,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          clearInput={ this.handleClearInput }
        />
        <Card
          cardName={ cardName }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {/* <div>
          { myCards.map((card) => (
            <Card key={ card.cardName } { ...card } />
          ))}
        </div> */}
      </div>
    );
  }
}

export default App;
