import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Manuel Silva",
    };
  }

  onChangeFormField(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <div className="logo">CV Application</div>
        </header>
        <div className="mainContainer">
          <section className="editor">
            <div className="personalDetails">
              <div className="formElement">
                <label htmlFor="name">Name</label>
                <input
                  onChange={(e) => this.onChangeFormField(e)}
                  value={this.state.name}
                  type="text"
                  id="name"
                  name="name"
                />
              </div>
              <div className="formElement">
                <label htmlFor="name">Title</label>
                <input type="text" id="title" name="title" />
              </div>
              <div className="formElement">
                <label htmlFor="mobile">Mobile</label>
                <input type="text" id="mobile" name="mobile" />
              </div>
              <div className="formElement">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" />
              </div>
              <div className="formElement">
                <label htmlFor="about">About</label>
                <textarea id="about" name="text" />
              </div>
            </div>
          </section>
          <section className="layout"></section>
        </div>
      </div>
    );
  }
}

export default App;
