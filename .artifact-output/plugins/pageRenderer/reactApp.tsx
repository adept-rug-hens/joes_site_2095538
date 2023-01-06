import { React } from "./deps.ts";
import { StreamOutput } from "./data.ts";
import Address from "./address.tsx";

type MyProps = {
  doc: StreamOutput
};

type MyState = {
  count: number;
};

class App extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);

    this.state = {
      count: 0
    };

   this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    const { count } = this.state;
    const newCount = count + 1;
    this.setState({ count: newCount });
  }

  render() {
    const titleStyle = {
      color: "white",
      backgroundColor: "Green",
      padding: "5px",
      fontSize: "30px",
    };
    const nameStyle = {
      padding: "10px",
    };

    const { id, name, address, _site } = this.props.doc || {};
    return (
      <div className="app">
        <div style={titleStyle} className="title">
          {_site.c_siteTitle}
        </div>
        <button className="click" onClick={this.increaseCount}>
          Click to demo hydration: {this.state.count}
        </button>
        <div style={nameStyle} className="name">Site Description: {_site.c_siteDescription}</div>
        <div style={nameStyle} className="name">Business Name: {name}</div>
        <div style={nameStyle} className="id">Entity Id: {id}</div>
        <Address address={address}/>
      </div>
    );
  }
}


const AppWrap = (doc: StreamOutput) => <App doc={doc}/>;

export { App, AppWrap };