import React from 'react';
import styled from 'styled-components';
import { typeScale } from '../utils';
import { illustrations } from '../assets';
import PrimaryButton from './Buttons';

const ModalWrapper = styled.div`
  width: 800px;
  height: 580px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

export const SignUpModal = () => {
  return (
    <ModalWrapper>
      <img src={illustrations.SignUp} alt='' />
      <SignUpHeader>Sign Up</SignUpHeader>
      <SignUpText>Sign Up today to get access!</SignUpText>
      <PrimaryButton>Sign Up!</PrimaryButton>
    </ModalWrapper>
  );
};
