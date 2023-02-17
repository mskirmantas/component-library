import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Svg from "./Svg";
export default {
    title: "Shared-ui/SVG",
    component: Svg,
} as ComponentMeta<typeof Svg>;
const Template: ComponentStory<typeof Svg> = (args) => <Svg {...args} />;
const PrintIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 9V3.62109C21 3.22312 20.842 2.84203 20.5608 2.56031L18.4392 0.439219C18.158 0.157969 17.7764 0 17.3784 0H4.5C3.67172 0 3 0.671719 3 1.5V9C1.34297 9 0 10.343 0 12V17.25C0 17.6644 0.335625 18 0.75 18H3V22.5C3 23.3283 3.67172 24 4.5 24H19.5C20.3283 24 21 23.3283 21 22.5V18H23.25C23.6644 18 24 17.6644 24 17.25V12C24 10.343 22.657 9 21 9ZM18 21H6V16.5H18V21ZM18 10.5H6V3H15V5.25C15 5.66437 15.3356 6 15.75 6H18V10.5ZM20.25 13.875C19.6289 13.875 19.125 13.3711 19.125 12.75C19.125 12.1284 19.6289 11.625 20.25 11.625C20.8711 11.625 21.375 12.1284 21.375 12.75C21.375 13.3711 20.8711 13.875 20.25 13.875Z" fill="#455A64"/></svg>`;
const EditIcon = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.56 5.408L18.6716 7.525L16.56 5.408ZM17.9179 3.543L12.2082 9.27C11.9132 9.5655 11.712 9.94199 11.6299 10.352L11.1025 13L13.7425 12.47C14.1513 12.388 14.5262 12.187 14.8213 11.891L20.531 6.164C20.7025 5.99191 20.8386 5.7876 20.9315 5.56274C21.0244 5.33788 21.0722 5.09688 21.0722 4.8535C21.0722 4.61012 21.0244 4.36912 20.9315 4.14426C20.8386 3.91941 20.7025 3.7151 20.531 3.543C20.3594 3.37091 20.1557 3.23439 19.9315 3.14125C19.7073 3.04811 19.4671 3.00018 19.2244 3.00018C18.9818 3.00018 18.7415 3.04811 18.5173 3.14125C18.2932 3.23439 18.0895 3.37091 17.9179 3.543V3.543Z" stroke="#0B64B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.0782 15V18C19.0782 18.5304 18.8681 19.0391 18.4942 19.4142C18.1203 19.7893 17.6131 20 17.0843 20H6.11749C5.58866 20 5.08149 19.7893 4.70755 19.4142C4.33361 19.0391 4.12354 18.5304 4.12354 18V7C4.12354 6.46957 4.33361 5.96086 4.70755 5.58579C5.08149 5.21071 5.58866 5 6.11749 5H9.10843" stroke="#0B64B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
export const PrintSvg = Template.bind({});
PrintSvg.args = {
    src: PrintIcon,
};
export const EditSvg = Template.bind({});
EditSvg.args = {
    src: EditIcon,
};