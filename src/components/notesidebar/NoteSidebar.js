import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#363740',
        width: 500,
    }
})

function NoteSidebar(props) {
    return (
        <Column className={css(styles.container)}>
            
        </Column>
    )
}

export default NoteSidebar;