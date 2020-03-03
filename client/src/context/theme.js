//Why use styled-theming on top of styled-components beyond just taking my word for it? It gives us a means to effectively scale themes as they grow in complexity by defining names instead of styles. Consider the following example, defining a couple of properties for a dark and light mode:
//https://medium.com/@rossbulat/creating-themes-in-react-with-styled-components-6fce744b4e54
import theme from "styled-theming";

export const fontStyle = theme("mode", {
    light: "clear sans",
    dark: "arial"
})

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


export const palettes = theme("colors", {
    palettes: {
        g1: {
            c1: "#443035",
            c2: "#535C7B",
            c3: "#70A4A2",
            c4: "#96C3B9",
            c5: "#F0E1D7"
        },
        g2: {
            c1: "#42C4AF",
            c2: "#496666",
            c3: "#5B85C7",
            c4: "#C4A460",
            c5: "#9D7950"
        },
        g3: {
            c1: "#7FF6D0",
            c2: "#2384C9",
            c3: "#524E4F",
            c4: "#98B627",
            c5: "#DBCAA5"
        },
        g4: {
            c1: "#5B5455",
            c2: "#586F8F",
            c3: "#F4BF83",
            c4: "#909A94",
            c5: "#F4F6F4"
        },
        g5: {
            c1: "#273943",
            c2: "#b96221",
            c3: "#F4BE12",
            c4: "#A6B2A8",
            c5: "#F6F8F6"
        },
        g6: {
            c1: "#273943",
            c2: "#b96221",
            c3: "#F4BE12",
            c4: "#A6B2A8",
            c5: "#F6F8F6"
        },
        g7: {
            c1: "#4111B3",
            c2: "#351082",
            c3: "#73A69D",
            c4: "#D4D4B4",
            c5: "#0D0915"
        }
    }
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


//https://medium.com/styled-components/announcing-v2-f01ef3766ac2
//Contextual Overrides
//one of the deliberate design goals of styled-components has been to make it easy to keep the styles for each component totally isolated, something that we’ve found makes the resulting CSS more for large applications. There are, however, definite instances where you need to break this rule, and have one component affect the appearance of another: