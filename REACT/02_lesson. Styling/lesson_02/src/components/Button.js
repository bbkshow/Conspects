const Button = styled.button`
    background: ${props => (props.primary ? 'palevioletred' : 'white')};
    color: ${props => (props.primary ? 'white' : 'palevioletred')};
    font-size: 1em;
    border-radius: 3px;
`;

// ${ clb=>{}}

render(
    <div>
        <Button primary>Primary</Button>
    </div>,
);
