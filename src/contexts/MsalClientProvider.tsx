'use client'
import React, {ReactNode} from 'react';
import {MsalProvider} from "@azure/msal-react";
import {MsalInstance} from "@/lib/AzureConfig";

const MsalClientProvider = ({children}: {children: ReactNode}) => {
    return (
        <MsalProvider instance={MsalInstance}>
            {children}
        </MsalProvider>
    );
};

export default MsalClientProvider;