import React, {FC, ReactNode} from 'react';
import Header from "./Header";
import Footer from "./Footer";

type LayoutType = {children: ReactNode}
const Layout: FC<LayoutType> = ({children} ) => {
    return (
        <>
        <Header />
                {children}
        <Footer />
        </>

    );
};

export default Layout;