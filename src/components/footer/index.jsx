import { createElement } from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { FiBookOpen, FiCoffee, FiGithub, FiGlobe, FiHeart, FiMail, FiMessageCircle } from "react-icons/fi";
import { Styled } from "./styled";

const connect = [
    ["Portfolio", "https://www.ashishranjan.net/", FiGlobe],
    ["GitHub", "https://github.com/a2rp", FiGithub],
    ["CodePen", "https://codepen.io/ash1198", FiMessageCircle],
    ["LinkedIn", "https://www.linkedin.com/in/aashishranjan", FaLinkedinIn],
    ["Facebook", "https://www.facebook.com/theash.ashish/", FaFacebookF],
    ["YouTube", "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", FaYoutube],
    ["Email", "mailto:ash.ranjan09@gmail.com", FiMail],
];

const support = [
    ["Support", "https://a2rp-donation-page.netlify.app/", FiHeart],
    ["Buy Me a Coffee", "https://buymeacoffee.com/a2rp", FiCoffee],
    ["Patreon", "https://patreon.com/a2rp", FiBookOpen],
];

function IconLinks({ items }) {
    return (
        <Styled.IconLinks>
            {items.map(([label, href, Icon]) => (
                <Styled.IconLink key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                    {createElement(Icon, { "aria-hidden": true })}
                </Styled.IconLink>
            ))}
        </Styled.IconLinks>
    );
}

export default function Footer() {
    return (
        <Styled.Wrapper>
            <Styled.FooterTop>
                <Styled.Title>Keep your revision practical.</Styled.Title>
                <Styled.Copyright>Copyright © {new Date().getFullYear()} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></Styled.Copyright>
            </Styled.FooterTop>
            <Styled.Groups>
                <div><span>Connect</span><IconLinks items={connect} /></div>
                <div><span>Support</span><IconLinks items={support} /></div>
            </Styled.Groups>
        </Styled.Wrapper>
    );
}
