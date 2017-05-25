// Imports from react and related libraries
import React, { Component } from 'react';

import { 
	View, 
	Text, 
    ScrollView, 
    RefreshControl
} from 'react-native';

interface Props { }

interface State {
    Words: string[];
    WordsLoaded: string[];
    Refreshing: boolean;
}

export class App extends Component<Props, State> {
    constructor (props: Props) {
        super(props);

        this.state = {
            Words: [
                "hello", "person", "sport", "golf", "car", "drive", "house", "window", "glass", 
                "drink", "beer", "wine", "whine", "cry", "tear", "rip", "paper", "writing", "pen", 
                "hello", "person", "sport", "golf", "car", "drive", "house", "window", "glass", 
                "drink", "beer", "wine", "whine", "cry", "tear", "rip", "paper", "writing", "pen", 
                "hello", "person", "sport", "golf", "car", "drive", "house", "window", "glass", 
                "drink", "beer", "wine", "whine", "cry", "tear", "rip", "paper", "writing", "pen", 
                "hello", "person", "sport", "golf", "car", "drive", "house", "window", "glass", 
                "drink", "beer", "wine", "whine", "cry", "tear", "rip", "paper", "writing", "pen"
            ], 
            WordsLoaded: [], 
            Refreshing: false
        };
    }

    componentDidMount (): void {
        // Load up some basic words so the scroll kicks in. 
        var words = [];

        for (var i = 0; i < 10; i++) {
            words.push(this.state.Words[i]);
        }

        this.setState({
            WordsLoaded: words
        });
    }

    reloadWords () {
        this.setState({Refreshing: true});

        // Add words
        var words = this.state.WordsLoaded
        words.push(this.state.Words[words.length])

        this.setState({
            WordsLoaded: words
        });
        
        this.setState({Refreshing: false});
    }

	render (): JSX.Element {
        let wordsTemp = this.state.WordsLoaded.slice();
        
        let words = wordsTemp.reverse().map((word, i) => {
            return (
                <View key={i.toString()} style={{ 
                    alignItems: "center", 
                    justifyContent: "center", 
                    backgroundColor: "#EEE", 
                    height: 50, 
                    borderBottomColor: "#666", 
                    borderBottomWidth: 2
                }}>
                    <Text style={{ fontSize: 16 }}>{word}</Text>
                </View>
            );
        });

        var reloading = this.state.Refreshing ? "Reloading..." : "Ready!";

		return (
            <View style={{ flex: 1 }}>
                <Text>{reloading} | {`${this.state.WordsLoaded.length}/${this.state.Words.length}`}</Text>

                <ScrollView style={{ flex: 1, flexDirection: "column" }}
                    refreshControl={
                        <RefreshControl 
                            refreshing={this.state.Refreshing} 
                            onRefresh={this.reloadWords.bind(this)} 
                            title="I am loading..."
                        />
                    }
                >
                    {words}
                </ScrollView>
            </View>
		);
	}
}
