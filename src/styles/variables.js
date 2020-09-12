export const StyledUnderline = () => `
    font-family: 'Playfair Display', serif;
    position: relative;
    
    ::after {
        position: absolute;
        content: '';
        height: 2px;
        border-radius: 15px;
        bottom: -2px;
        margin: 0 auto;
        left: 0;
        right: 0;
        width: 0;
        background: linear-gradient(
          111.7deg,
          rgba(80, 177, 225, 1) 20%,
          rgba(165, 41, 185, 1) 95%
        );
        transition: ease-in-out 0.25s;
    }
`;
