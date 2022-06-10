import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { FiCpu } from 'react-icons/fi';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems:"center", color: "white", marginBottom: "50px"}}>
          <FiCpu size="3rem"/> <Span>HadIT</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
      </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>About us</NavLink>
      </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Services</NavLink>
      </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Contact</NavLink>
      </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/haditcorp/">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
