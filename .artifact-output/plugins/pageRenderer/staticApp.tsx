import { React } from "./deps.ts";
import { StreamOutput } from "./data.ts";

type MyProps = {
  doc: StreamOutput
};

class Static extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
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

    const { _site } = this.props.doc || {};
    return (
      <div className="app">
        <div style={titleStyle} className="title">
          {_site.c_siteTitle}
        </div>
        <div style={nameStyle} className="name">Site Description: {_site.c_siteDescription}</div>
        <div style={nameStyle} className="name">About us: We do stuff</div>
      </div>
    );
  }
}


const StaticWrap = (doc: StreamOutput) => <Static doc={doc}/>;

export { StaticWrap };