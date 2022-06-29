import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: '',
      // hasTrunfo: false,
      isSaveButtonDisabled: true,
      myCards: [],
    };
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

     this.setState({ isSaveButtonDisabled: !(hasNoEmptyFields && atributtesLimit) });
   };

   onInputChange = ({ target }) => {
     const { name } = target;
     const value = target.type === 'checkbox' ? target.checked : target.value;
     this.setState({ [name]: value }, this.checkButton);
   };

   onSaveButtonClick = () => {
     const prevState = {
       cardName: '',
       cardDescription: '',
       cardAttr1: '0',
       cardAttr2: '0',
       cardAttr3: '0',
       cardImage: '',
       cardRare: 'normal',
       cardTrunfo: '',
       // hasTrunfo: false,
       isSaveButtonDisabled: true,
     };
     this.setState((e) => ({
       myCards: [e.myCards, this.setState(prevState)],
     }));
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
       // hasTrunfo,
       isSaveButtonDisabled,
       //  onSaveButtonClick,
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
           cardTrunfo={ cardTrunfo }
           isSaveButtonDisabled={ isSaveButtonDisabled }
           onSaveButtonClick={ this.onSaveButtonClick }
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
       </div>
     );
   }
}

export default App;
