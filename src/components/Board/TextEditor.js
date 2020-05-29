import React from 'react';

const TextEditor = (props) => {
    console.log('text', props)

    const listFunction = props.functionList.map((func, i) => {
        return <div className="function" key={i}>{func}</div>
    })

    return (
        <div className="TextEditor">
            <div className="content">
                <div className="contentEditor">
                    <div className="listEditor">
                        {
                            (props.lineNumber.map((number, i) => {
                                return <div key={i} className="number">{number}</div>
                            }))
                        }
                    </div>
                    <div className="listFunctions">
                        {props.functionList.length > 0 ? listFunction : null}
                        <input defaultValue={props.value}
                                    onKeyDown={props.handleChange}
                                    style={{marginTop: props.moveEditor}}
                                    className="editor" />
                    </div>
                </div>
            </div>
            <span onClick={props.runCode} className="runButton">Run</span>
        </div>
    );
}

export default TextEditor;