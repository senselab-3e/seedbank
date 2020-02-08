import React, { Component } from "react";
import patch from "../assets/img/threshold-1.gif";
import patch2 from "../assets/img/threshold-2.gif";
import patch3 from "../assets/img/threshold-8.gif";
import { withTheme } from "styled-components";

// import { withTheme } from "styled-components";

///NOTES For CSS grid:  CSS Grid has a new unit that solves our problem elegantly. The fractional unit (fr)
// The fractional unit solves the problem of automatically distributing space.
// If you have three grid columns aligned as shown below, the fractional unit will automatically distribute the space equally.
///this gets me away from having to do things like this: body {
//    ...not maintainable:
//    grid-template-rows: calc(100% - 100px) 100px;
//    grid-template-columns: 50px calc(100%-50px)
//    If for some reasons you have to change any of the the fixed widths, then you must always change the calc definition.
//instead
//body {
// ...
// grid-template-rows: 1fr 100px;
// grid-template-columns: 50px 1fr;

//below: The code block above says, let the .main class have an area name of content. Let the .footer class have an area name of footer. Finally, let the aside class have a grid name of sidebar
// Now the grid items have all been assigned area names.
//Note that the entries in the property value are the names of the grid items!
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr 100px;
  grid-template-columns: 50px 1fr;
  grid-template-areas:
    "sidebar  content"
    "footer   footer";
`;

const MainGrid = styled.div`
  grid-area: content;
  background: ${props => props.theme.palettes.g2.c2};
`;

const Footer = styled.div`
  grid-area: footer;
  background: ${props => props.theme.palettes.g2.c3};
`;

const Aside = styled.div`
  grid-area: sidebar;
  background: ${props => props.theme.palettes.g2.c4};
`;

export class Patch extends Component {
  UNSAFE_componentWillMount() {
    this.props.updateLocation(window.location);
  }

  render() {
    return (
      <React.Fragment>
        <Grid>
          <Aside>a thing hllloooooeooo</Aside>
          <MainGrid>another thing</MainGrid>
          <Footer>last thing</Footer>
        </Grid>
        <img src={patch} alt="threshold" width="100px"></img>
        <img src={patch3} alt="threshold2" width="100px"></img>
      </React.Fragment>
    );
  }
}

export default withTheme(Patch);
