import React ,{Component} from 'react';
import { Text, View, StyleSheet,TextInput,Alert,ListView,Button,AppRegistry } from 'react-native';


export default class h1 extends Component {
 constructor() {
        super()
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.arr =[];
            this.state = {
            object : '',
            dataSource: ds.cloneWithRows(this.arr),
          };
       
        
	}
	
	_handleNumber(event) {
		console.log('It\'s works !')
		var number = event.nativeEvent.text;
		this.setState({ number: event.nativeEvent.text });
	}
	
	_push(rowData){
	  console.log('It\'s works !')
	   this.arr.push(rowData);
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.arr)
        })
	  
	}
	_pop(){
	  console.log('It\'s works !')
	  Alert.alert('Pop','pop last element', [
            { text: 'Yes', onPress:()=> this._confirmPop('Yes'), style: 'positive' },
            { text: 'No', onPress:()=> this._confirmPop('No'), style: 'negative' }
        ])
	}
	  _confirmPop(text) {
        if (text == 'Yes') {
            this.arr.pop();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.arr)
            })
        }
    }
	
	
	
	
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Input number in stack
        </Text>
        
        <TextInput style={{ height: 40, width: 200 }}  placeholder="Input number to stack !"
        value={this.state.object} 
        onChangeText={(text) => this.setState({ object: text })}/>
        
        <Button title="Push" onPress={() => this._push(this.state.object)}  color="#3399ff"  />
        <Button title="Pop"  onPress={() => this._pop()}  color="#ffc299" />
       
        <Text>{this.state.number}</Text>
        
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
 
});


AppRegistry.registerComponent('h1', () => h1);
