import { Stack, styled } from '@mui/material';

const LoginWrapper = styled(Stack)(
  ({ theme }) => `
    gap: 20px;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: ${theme.palette.primary.dark};
    .image-back {
        width: 1133px;
        height: 1020px;
        position: absolute;
        max-height: 100%;
        background-image: url('/images/intro-background.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    .login-form-wrapper {
        width: 353px;
        padding: 45px 27px;
        border-radius: 14px;
        background-color: #FFFFFF;
        .login-btn {
            gap: 8px;
            display: flex;
            padding: 14px;
            font-size: 15px;
            min-height: 44px;
            margin-top: 15px;
            font-weight: 400;
            border-radius: 12px;
            justify-content: center;
        }
        .login-title {
            font-size: 16px; 
            font-weight: 600; 
        }
        .login-subtitle {
            color:${theme.palette.grey[400]};
            font-size: 14px; 
            margin-top:16px;
        }
        .login-phone-number-submit {
            padding: 14px;
            height: 44px;
        }
    }
`
);

export default LoginWrapper;
