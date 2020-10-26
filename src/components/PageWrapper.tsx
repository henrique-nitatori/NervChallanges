import React from 'react';

import '../Styles/Components/PageWrapper.css'


interface IPageWrapper {
    backgroundColor: string;
}


export default ({ backgroundColor, children }: React.PropsWithChildren<IPageWrapper>) => {
    const styles = {
        backgroundColor: backgroundColor
    }

    return(
            <div id="page-wrapper" style={styles}>
                { children }
            </div>
    )
}