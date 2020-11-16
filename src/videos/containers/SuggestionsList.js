import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';

import Layout from '../components/SuggestionListLayout';
import Empty from '../components/Empty';
import Separator from '../components/Separator';
import Suggestion from '../components/Suggestion';

class SuggestionsList extends Component {
  state = {
    listSuggestions: this.props.List,
  };
  //funciones render
  keyExtractor = (item) => item.id.toString();
  renderEmpty = () => <Empty text="No hay datos para listar :(" />;
  renderSeparator = () => <Separator />;
  renderSuggestion = ({item}) => {
    return <Suggestion {...item} />;
  };

  render() {
    console.log(this.props.List);
    return (
      <Layout title="Recomendado para el bruto de los brutos">
        <FlatList
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

export default SuggestionsList;
