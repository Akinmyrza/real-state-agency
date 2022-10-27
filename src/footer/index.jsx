import React from 'react';
import Facebook from '../assets/svg/facebook';
import Instagram from '../assets/svg/instagram';
import WhatsApp from '../assets/svg/whatsapp';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from './FooterStyles';

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: 'green', textAlign: 'center', marginTop: '-50px' }}>
        агентство недвижимости
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href='#'>Aim</FooterLink>
            <FooterLink href='#'>Vision</FooterLink>
            <FooterLink href='#'>Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading> Услуги</Heading>
            <FooterLink href='#'>Квартиры </FooterLink>
            <FooterLink href='#'>Дома</FooterLink>
            <FooterLink href='#'>Участки</FooterLink>
            <FooterLink href='#'>Недвижимость</FooterLink>
          </Column>
          <Column>
            <Heading> Контакты</Heading>
            <FooterLink href='#'>Uttar Pradesh</FooterLink>
            <FooterLink href='#'>Ahemdabad</FooterLink>
            <FooterLink href='#'>Indore</FooterLink>
            <FooterLink href='#'>Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>Социальные медиа</Heading>

            <FooterLink href='https://www.facebook.com/'>
              <i className='fab fa-facebook-f'>
                <span style={{ marginLeft: '10px' }}>
                  <Facebook width={20} height={20} /> Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href='https://www.instagram.com/'>
              <i className='fab fa-instagram'>
                <span style={{ marginLeft: '10px' }}>
                  <Instagram width={20} height={20} /> Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href='https://www.whatsapp.com/'>
              <i className='fab fa-whatsapp'>
                <span style={{ marginLeft: '10px' }}>
                  <WhatsApp width={20} height={20} /> Whatsapp
                </span>
              </i>
            </FooterLink>
            <FooterLink href='https://www.youtube.com/results?search_query=%D0%B0%D0%B3%D0%B5%D0%BD%D1%82%D1%81%D1%82%D0%B2%D0%BE+%D0%BD%D0%B5%D0%B4%D0%B2%D0%B8%D0%B6%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8'>
              <i className='fab fa-youtube'>
                <span style={{ marginLeft: '10px' }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
