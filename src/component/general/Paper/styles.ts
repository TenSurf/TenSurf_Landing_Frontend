import { Paper, styled } from '@mui/material';

const CustomPaperWrapper = styled(Paper)(
  ({ theme }) => `
    display: flex;
    padding: 17px;
    outline: none;
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 0.4s;
    border-radius: 15px;
    flex-direction: column;
    :hover {
        transition: box-shadow 0.3s;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.12);
    }
`
);

export default CustomPaperWrapper;
