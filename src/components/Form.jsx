import React from 'react';

class Form extends React.Component {
//   constructor() {
//     super();

  //     this.handleChange = this.handleChange.bind(this);

  //     this.state = {
  //       teste: '',
  //     };
  //   }

  //   handleChange(event) {
  //     this.setState({
  //       teste: event.target.value,
  //     });
  //   }

  render() {
    return (

      <div>
        <form>
          <label htmlFor="Name:">
            Name:
            <input type="text" data-testid="name-input" label="xablau" />
          </label>
          <label htmlFor="Description:">
            Description:
            <input type="textarea" data-testid="description-input" label="xablau" />
          </label>
          <label htmlFor="attr1">
            attr1
            <input type="number" data-testid="attr1-input" label="xablau" />
          </label>
          <label htmlFor="attr2">
            attr2
            <input type="number" data-testid="attr2-input" label="xablau" />
          </label>
          <label htmlFor="attr3">
            attr3
            <input type="number" data-testid="attr3-input" label="xablau" />
          </label>
          <label htmlFor="image">
            image
            <input type="text" data-testid="image-input" label="xablau" />
          </label>
          <label htmlFor="rare">
            rare
            <select name="rare" data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo">
            trunfo
            <input type="checkbox" data-testid="trunfo-input" />
          </label>
          <button type="button" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
