import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Andrew Spike",
      title: "Software Engineer",
      mobile: "0456784659",
      email: "andrew@spike.com",
      about:
        "A software developer with 5 years of experience in web technologies is likely to be well-versed in a variety of programming languages and frameworks commonly used for building web applications, such as HTML, CSS, JavaScript, and various web development frameworks like React, Angular or VueJS. They should also have experience working with databases, version control systems, and development tools such as debugging and testing software. Additionally, they likely have experience working in a team environment, collaborating with designers, project managers, and other developers to deliver high-quality web applications.",
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
                <input
                  type="text"
                  id="title"
                  name="title"
                  onChange={(e) => this.onChangeFormField(e)}
                  value={this.state.title}
                />
              </div>
              <div className="formElement">
                <label htmlFor="mobile">Mobile</label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  onChange={(e) => this.onChangeFormField(e)}
                  value={this.state.mobile}
                />
              </div>
              <div className="formElement">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  onChange={(e) => this.onChangeFormField(e)}
                  value={this.state.email}
                />
              </div>
              <div className="formElement">
                <label htmlFor="about">About</label>
                <textarea
                  id="about"
                  name="about"
                  onChange={(e) => this.onChangeFormField(e)}
                  value={this.state.about}
                />
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
