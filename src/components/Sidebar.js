import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import React from 'react';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#363740',
        width: 300,
    }
})

function Sidebar(props) {
    return (
        <Column className={css(styles.container)}>
            
        </Column>
    )
}

export default Sidebar;