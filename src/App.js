import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import React from 'react';
import './App.css';

// components
import TimeTable from './components/TimeTable.js';
import NoteSidebar from './components/notesidebar/NoteSidebar.js';
import Sidebar from './components/Sidebar.js';

const styles = StyleSheet.create({
  container: {
    height: '100vh',
  }
})


class App extends React.Component {
  render() {
    return(
      <Row className={css(styles.container)}>
        <Sidebar />
        <TimeTable />
        <NoteSidebar />
      </Row>
    );
  }
}

export default App;
