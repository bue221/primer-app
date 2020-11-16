import React, {Component} from 'react';
import {FlatList, View, Text} from 'react-native';

import Empty from '../components/Empty';
import Separator from '../components/Separator';
import Suggestion from '../components/Category';
import Layout from '../components/CategoryLayout';

class CategoriesList extends Component {
  //funciones render
  keyExtractor = (item) => item.id.toString();
  renderEmpty = () => <Empty text="No hay datos para listar :(" />;
  renderSeparator = () => <Separator horizontal />;
  renderSuggestion = ({item}) => {
    return <Suggestion {...item} />;
  };

  render() {
    return (
      <Layout title="Categorias">
        <FlatList
          horizontal
          keyExtractor={this.keyExtractor}
          data={this.props.List}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={this.renderSuggestion}
        />
      </Layout>
    );
  }
}

export default CategoriesList;
