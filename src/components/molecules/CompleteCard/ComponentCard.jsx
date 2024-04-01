import {  Heading, Paragraph, Section } from "../../atoms";
import { Btn} from "../../atoms"
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const StyledCard = styled.div`
  border-radius: 25px;
  overflow: hidden;
  text-decoration: none;
  margin-left: 8px;
  border: 2px solid #333;
  background : ${(props) => props.background ? props.background : props.theme.tertiary};
  color: ${(props) => (props.color ? props.color : props.theme.textNavbar)};
  display: flex;
  flex-direction: column;
  jusitfy-content: center;
  padding: 8px;
  padding-top: 16px;
  height: 200px;
  width: 300px;
`;

const StyledBottomCard = styled.div`
   display : flex;
   flex-direction: column;
   padding: 16px;
   border-top : 1px solid grey;
   margin-top: 16px;
`;

const StyledAchatCard = styled.div`
   display : flex;
   padding-top: 8px;
   align-items: center;
`;

const StyledAvatarCard = styled.div`
  display : flex;
  align-items: center;
`;


const CompleteCard = ({ title, text, url, component, name = "", ...props }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/buycomponent/${name}`);
  };
  
  return (
    <StyledCard>
      {component}
      <StyledBottomCard>
        <StyledAvatarCard>
          <img src={url} width="50px" height="50px" alt="avatar du créateur" />
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
          <Btn text="Acheter" onClick={handleClick}></Btn>
        </StyledAchatCard>
      </StyledBottomCard>
     {props.children}
    </StyledCard>
  );
};

export default CompleteCard;