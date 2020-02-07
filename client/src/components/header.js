import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Color from "./color.js";
import { withTheme } from "styled-components";
import styled from "styled-components";

//Reasons for styled comonent. What We Liked About Styled Components https://medium.com/building-crowdriff/styled-components-to-use-or-not-to-use-a6bb4a7ffc21
// It Makes Components Less Bulky
// In a lot of cases, there’s a lot of heavy lifting that has to be done through CSS to inject user-specific styling into a component. Many components’ render methods end up containing style objects that clutter them up and split the CSS into two places, making the code harder to parse. Styled Components help keep the concerns of styling and element architecture separated and make components more readable.

// Furthermore, when you have components that rely on JavaScript for their style, Styled Components gives control of those states back to CSS instead of using a multitude of conditional class names.

//NOTES: It is important to define your styled components outside of the render method, otherwise it will be recreated on every single render pass. Defining a styled component within the render method will thwart caching and drastically slow down rendering speed, and should be avoided.

//NOTES: If the styled target is a simple element (e.g. styled.div), styled-components passes through any known HTML attribute to the DOM. If it is a custom React component (e.g. styled(MyComponent)), styled-components passes through all props.

const NavButton = styled.a`
  display: inline-block;
  border-radius: 3px;
  margin: 0.5rem 1rem;
  width: 11rem;
  font-size: 1em;
  font-family: ${props => props.theme.font};
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "teal" : "transparent")};
  color: ${props => (props.primary ? "white" : "teal")};
  &:hover {
    background: ${props =>
      props.primary ? props.theme.menuLightColor : "transparent"};
    color: ${props =>
      props.primary
        ? props.theme.menuHighlightColor
        : props.theme.menuLightColor};
    border: 2px solid deeppink;
  }
  text-decoration: none;
  text-align: center;
  padding: 0.5rem 0;
  margin: 10px 5px 10px 5px;
  border: 2px solid teal;
`;

const NavWrapper = styled.section`
  padding: 0.3em;
  text-align: left;
  background: "#333";
`;

const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  margin: 0.5rem 1rem;
  width: 4rem;
  font-size: 1em;
  padding: 0.5rem 0;
`;

class Header extends Component {
  state = {
    isActive: "true",
    count: 0,
    theme: this.props.theme
  };

  increment = () =>
    this.setState({
      count: this.state.count < 50 ? this.state.count + 1 : this.state.count
    });
  decrement = () =>
    this.setState({
      count: this.state.count !== 0 ? this.state.count - 1 : this.state.count
    });

  render() {
    return (
      <React.Fragment>
        <NavWrapper>
          <NavButton
            as={NavLink}
            to="/"
            primary={this.state.isActive}
            onClick={this.location}
          >
            Home
          </NavButton>
          <NavButton as={NavLink} to="/auth">
            login or signup
          </NavButton>
          <NavButton as={NavLink} to="/events">
            eventlisting
          </NavButton>
          <NavButton as={NavLink} to="/about">
            About oOoOs
          </NavButton>
          <NavButton as={NavLink} to="/oOoOs">
            404 oOoO Portal
          </NavButton>
          <NavButton as={NavLink} to="/patches">
            picnicpatches
          </NavButton>
          <Button onClick={this.increment}> + </Button>
          <Button onClick={this.decrement}> - </Button>
        </NavWrapper>
        <Color />
      </React.Fragment>
    );
  }
}
export default withTheme(Header);

//another native approach

// render() {
// let className = "menu";
// if (this.props.isActive) {
//   className += "menu-active";
// }

// return (

/* <React.Fragment>
<nav>
  <Wrapper>
    <NavLink to="/">Home</NavLink>|
    <NavLink to="/events" className={className}>
      Go to events
    </NavLink>
    |
    <NavLink to="/auth" className={className}>
      Login or signup
    </NavLink>
    |
    <NavLink to="/entryway" className={className}>
      EntryWay
    </NavLink>
    |
    <NavLink to="/about3e" className={className}>
      3E About
    </NavLink>
    |
    <NavLink to="/oOoOs" className={className}>
      404 oOoO Portal
    </NavLink>
    |
    <NavLink to="/patches" className={className}>
      Patches
    </NavLink>
  </Wrapper>
</nav>
<Color />
</React.Fragment> */
