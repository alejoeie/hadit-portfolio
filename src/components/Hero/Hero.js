import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        We are HadIT. <br />
        Your software solutions enterprise.
      </SectionTitle>
      <SectionText>
        A Costarican startup entrerprise that will lead your company up to the top in technology and up-to-date advances.
      </SectionText>
      <Button onClick={() => window.location = "https://google.com/"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;