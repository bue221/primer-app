/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';

import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionsList from './src/videos/containers/SuggestionsList';
import CategoriesList from './src/videos/containers/CategoriesList.js';
import VideoPlayer from './src/player/components/Video';

//utils
import Api from './utils/api';

class App extends React.Component {
  state = {
    categorias: [],
    movie: {
      list: [],
      error: '',
      load: true,
    },
  };

  async componentDidMount() {
    const data = await Api.getSugerencias(10);
    const categories = await Api.getCategorias();
    this.setState({
      ...this.state.movie,
      ...this.state.categories,
      categorias: categories,
      movie: {
        list: data,
        error: '',
        load: false,
      },
    });
    console.log(this.state.categorias);
  }
  render() {
    return (
      <Home>
        <Header>
          <Text>Andres Plaza</Text>
        </Header>
        <VideoPlayer />
        <CategoriesList List={this.state.categorias} />
        <SuggestionsList List={this.state.movie.list} />
      </Home>
    );
  }
}

//const styles = StyleSheet.create({});

export default App;
