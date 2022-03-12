import * as React from 'react';
import { Box } from '@chakra-ui/react';
import {Head} from './Head';
import Navbar from './Navbar';
import Footer from './Footer';

type ContentLayoutProps = {
    children: React.ReactNode;
    title: string;
}

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
    return (
        <>
            <Head title={title} />
            <Navbar />
            <Box py={6} maxW={"container.xl"} margin={"auto"}>
                {children}
            </Box>
            <Footer />
        </>
    );
}