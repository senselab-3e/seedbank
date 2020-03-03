//Why use styled-theming on top of styled-components beyond just taking my word for it? It gives us a means to effectively scale themes as they grow in complexity by defining names instead of styles. Consider the following example, defining a couple of properties for a dark and light mode:
//https://medium.com/@rossbulat/creating-themes-in-react-with-styled-components-6fce744b4e54
import theme from "styled-theming";

export const backgroundColor = theme("mode", {
  light: "#fafafa",
  dark: "#222"
});

export const textColor = theme("mode", {
  light: "#000",
  dark: "#fff"
});

export const buttonBackgroundColor = theme("mode", {
  light: "#222",
  dark: "#eee"
});

export const buttonTextColor = theme("mode", {
  light: "#eee",
  dark: "#222"
});

//EXAMPLE:

// apply theming to a styled component
// const Wrapper = styled.div`
//   background-color: ${backgroundColor};
//   color: ${textColor}
// `;
// // use styled-components as we would expect in render(), housing <Wrapper /> within a <ThemeProvider />
// export default function App() {
//   return (
//     <ThemeProvider theme={{ mode: 'light' }}>
//       <Wrapper>
//         Hello World
//       </Wrapper>
//     </ThemeProvider>
//   );
// }

//We are not limited to only one theme name — we could define an additional name, let’s say, layout, that determines how compact the app content is:

//The power here lies in the ability for multiple themes to be used together. For example, I may want a compact dark mode, or a cozy light mode, that utilise two separate themes concurrently. Having the ability to manage this is pretty convenient as a developer, and a pretty cool experience for an end-user.

// Theme Variants
// Along with theme(), styled-theming also gives us another utility: theme.variants(). Wouldn’t it be nice if we could have a concise way to define a range of styles for a component based on props? I could then tailor my button styles by simply passing props, like <Button small /> or <Button medium /> — that will also be fully compatible with my themes.
// This is the problem theme.variants() aim to solve.
