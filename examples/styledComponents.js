const TitleComponent = styled.h1`
  color: hsl(40, 60%, 45%);
  font-size: 60px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`

const Component = props => {
  return <TitleComponent>{props.text}</TitleComponent>
}

render(<Component text="Hello World" />)
