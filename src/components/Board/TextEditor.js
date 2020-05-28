import React, { Component } from 'react';

class TextEditor extends Component {
    render() {
        return (
            <div className="TextEditor">
                <div className="contentEditor">
                    <div className="listEditor">
                        <div className="number">1</div>
                        <div className="number">2</div>
                        <div className="number">3</div>
                    </div>
                    <textarea className="editor"></textarea>
                </div>
                <span className="runButton">Run</span>
            </div>
        );
    }
}

export default TextEditor;