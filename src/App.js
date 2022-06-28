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
       cardRare,
       cardTrunfo,
       // hasTrunfo,
       isSaveButtonDisabled,
       // onSaveButtonClick,
     } = this.state;

     const maxNumber = 90;
     const maxChars = 210;
     const hasNoEmptyFields = [cardName, cardDescription, cardImage]
       .every((e) => e !== '');

     const atributtesLimit = [cardAttr1, cardAttr2, cardAttr3]
       .every((e) => Number(e) <= maxNumber && Number(e) >= 0 && e !== '')
        && (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) <= maxChars;

     console.log(atributtesLimit);
     console.log(hasNoEmptyFields);

     this.setState({ isSaveButtonDisabled: !(hasNoEmptyFields && atributtesLimit) });
   };

   onInputChange = ({ target }) => {
     const { name } = target;
     const value = target.type === 'checkbox' ? target.checked : target.value;
     this.setState(({ [name]: value }), this.checkButton);
     // checkButton();
   };

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
       // onSaveButtonClick,
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
