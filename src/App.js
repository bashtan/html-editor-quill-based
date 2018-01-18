import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Quill from 'quill';

class App extends Component {
    componentDidMount() {
        const toolbarOptions = [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],

            [{'header': 1}, {'header': 2}],               // custom button values
            [{'list': 'ordered'}, {'list': 'bullet'}],
            [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
            [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
            [{'direction': 'rtl'}],                         // text direction

            [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
            [{'header': [1, 2, 3, 4, 5, 6, false]}],

            [{'color': []}, {'background': []}],          // dropdown with defaults from theme
            [{'font': []}],
            [{'align': []}],

            ['clean'],                                         // remove formatting button
            ['link', 'image', 'video'],
            ['showHtml']
        ];
        new Quill('#editor1', {
            modules: {
                toolbar: toolbarOptions
            },
            theme: 'bubble'
        });

        new Quill('#editor2', {
            modules: {
                toolbar: toolbarOptions
            },
            theme: 'snow'
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <div id="toolbar">
                    <button className="ql-bold">Bold</button>
                    <button className="ql-italic">Italic</button>
                </div>

                <div id="editor1">
                    <p>Title!</p>
                </div>

                <div id="editor2">
                    <p>Text!</p>
                </div>

            </div>
        );
    }
}

export default App;
