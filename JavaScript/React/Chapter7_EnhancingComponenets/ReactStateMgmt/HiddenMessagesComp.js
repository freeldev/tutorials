class HiddenMessage extends Component {
  // should use stateless component --> this is only for demonstation of componentWillReceiveProps
  constructor(props) {
    super(prop);
    this.state = {
      hidden: props.hide ? props.hide : true
    };
  }

  componentWillReceiveProps(nextProps) {
    // allows us to change state when state is updated by the parent component
    this.setState({ hidden: nextProps.hide });
  }

  render() {
    const { children } = this.props;
    const { hidden } = this.state;
    return <p>{hidden ? children.replace(/[a-zA-z0-9]/g, "x") : children}</p>;
  }
}

class HiddenMessages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        "The crow crows after midnight",
        "Bring a watch and dark clothes to the spot",
        "Jericho Jericho Go"
      ],
      showing: -1
    };
  }

  componentWillMount() {
    this.interval = setInterval(() => {
      let { showing, messages } = this.state;
      showing = ++showing >= messages.length ? -1 : showing;
      this.setState({ showing });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { messages, showing } = this.state;
    return (
      <div className="hidden-messages">
        {messages.map((message, i) => (
          <HiddenMessage key={i} hide={i !== showing}>
            {message}
          </HiddenMessage>
        ))}
      </div>
    );
  }
}
