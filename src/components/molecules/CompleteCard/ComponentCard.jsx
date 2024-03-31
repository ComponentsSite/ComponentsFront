import {  Heading, Paragraph, Section } from "../../atoms";
import { Btn, Divider} from "../../atoms"
import styled from "styled-components";

const StyledCard = styled.div`
  border-radius: 25px;
  overflow: hidden;
  text-decoration: none;
  margin-left: 8px;
  border: 2px solid #333;
  width: fit-content;
  height: fit-content;
  background : ${(props) => props.background ? props.background : props.theme.tertiary};
  color: ${(props) => (props.color ? props.color : props.theme.textNavbar)};
`;

const StyledBottomCard = styled.div`
   display : flex;
   flex-direction: column;
   padding: 16px;
`;

const StyledAchatCard = styled.div`
   display : flex;
   align-items: center;
`;

const StyledAvatarCard = styled.div`
   display : flex;
   align-items: center;
`;


const CompleteCard = ({ urlMain, title, text, url, component = <></>, ...props }) => {
  
  return (
    <StyledCard>
      {component}
      <StyledBottomCard>
        <StyledAvatarCard>
          <img src={url} width="50px" height="50px" alt="avatar du créateur" />
          <Divider />
          <Section>
            <Section>
              <Section>
                <Section>
                  <Section>
                    <Heading marginLeft="8px">{title}</Heading>
                  </Section>
              
                </Section>
              </Section>
            </Section>
          </Section>
        </StyledAvatarCard>
        
        <StyledAchatCard>
          <Paragraph>{"Prix : " + text}</Paragraph>
          <Btn text="Acheter"></Btn>
        </StyledAchatCard>
      </StyledBottomCard>
     {props.children}
    </StyledCard>
  );
};

export default CompleteCard;