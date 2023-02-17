export type ThemeProps = {
    theme: typeof theme;
};
const theme = {
    screen: {
        smallMobile: "320px",
        mobile: "600px",
        tablet: "850px",
        laptop: "1200px",
    },
    color: {
        black: "#0B1A21",
        charcoal: "#455A64",
        asphalt: "#444A5A",
        grey: "#B1B3BC",
        lightGrey: "#C2C2C2",
        stone: "#C4C4C4",
        navy: "#014676",
        blue: "#0B64B4",
        ice: "#F0F7FA",
        white: "#FFFFFF",
        success: "#0FA958",
        error: "#E8360E",
        disabled: "#656669",
        yellow: "#fff3cc",
        link: "#076CC1",
    },
};
export default theme;