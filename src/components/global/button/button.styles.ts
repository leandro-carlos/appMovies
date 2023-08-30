import styled from "styled-components/native";

export const View = styled.View`
  flex: 1;
  background-color: black;
`;

export const TextInput = styled.Text`
  color: white;
  font-size: 20px;
  text-align: center;
  padding: 10px;
  font-family: ${({ theme }) => theme.fonts.Montserrat_700Bold};
`;
