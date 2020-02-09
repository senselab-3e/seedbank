import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { withTheme } from "styled-components";
import EventCreate from "./EventCreate";

const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr 700px;
  grid-template-columns: 300px 1fr;
  grid-template-areas:
    "header  header"
    "sidebar  content"
    "footer   footer";
`;
const Header = styled.div`
  grid-area: header;
  background: ${props => props.theme.palettes.g2.c4};
`;

const MainGrid = styled.div`
  grid-area: content;
  background: ${props => props.theme.palettes.g2.c2};
`;

const Footer = styled.div`
  grid-area: footer;
  background: ${props => props.theme.palettes.g2.c5};
`;

const Aside = styled.div`
  grid-area: sidebar;
  background: ${props => props.theme.palettes.g2.c3};
`;

class EventList extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }
  componentDidMount() {
    axios
      .get("/api/events")
      .then(events => {
        this.setState({
          events: events.data
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    var events = this.state.events;
    console.log(this.state.events);
    return (
      <Grid>
        <Header>
          <EventCreate />
        </Header>
        <Aside>
          <ul>
            {events.map(({ id, name, data }) => (
              <li key={id.toString()}>{name}</li>
            ))}
          </ul>
        </Aside>
        <MainGrid>
          <ul>
            {events.map(({ id, name, data }) => (
              <li key={id.toString()}>{data}</li>
            ))}
          </ul>
        </MainGrid>
        <Footer>last thing</Footer>
      </Grid>
    );
  }
}

export default withTheme(EventList);
