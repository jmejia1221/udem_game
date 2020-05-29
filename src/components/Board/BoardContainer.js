import React, { Component } from 'react';

import Board from '../Board/Board';
import TextEditor from '../Board/TextEditor';

// css
import './Board.scss';

class MainBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            moveClass: {
                x: 70,
                y: 55,
                rotate: 0
            },
            lineNumber: [1],
            marginEditor: 0,
            functionList: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.runCode = this.runCode.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });

        if (event.keyCode !== 13 && event.keyCode !== 8) return;

        let count = [...this.state.lineNumber];
        let counter = [...this.state.lineNumber];
        let marginTop = this.state.marginEditor;
        let listFunctions = [...this.state.functionList];

        if (event.keyCode === 13) {
            this.runCode();

            if (event.target.value !== '') listFunctions.push(event.target.value);
            if (event.target.value === '') marginTop += 34;
            event.target.value = '';
            count.push(count[count.length - 1] + 1);
            counter = count;

            event.target.focus();
        }
        if (event.keyCode === 8 && event.target.value === '') {
            // const getRight = listFunctions[listFunctions.length - 1].indexOf('right'); 
            // const getLeft = listFunctions[listFunctions.length - 1].indexOf('left');
            // const getDown = listFunctions[listFunctions.length - 1].indexOf('down');
            // const getTop = listFunctions[listFunctions.length - 1].indexOf('top');
            // if (getRight !== -1) {
            //     eval('this.runCode("left")')
            // } else if (getLeft !== -1) {
            //     eval('this.runCode("right")')
            // } else if (getDown !== -1) {
            //     eval('this.runCode("top")')
            // } else {
            //     eval('this.runCode("down")')
            // }

            if (counter.length > 1) {
                count.pop();
                counter = count;
            }

            listFunctions.pop();
            if (marginTop > 0) marginTop -= 34;
        }
        this.setState(state => ({
            lineNumber: counter,
            marginEditor: marginTop,
            functionList: listFunctions
        }))
    }

    runCode(position) {
        const move = {
            left: () => {
                // inmutable object
                const movement = {
                    ...this.state.moveClass
                };

                movement.x -= 110;

                const movements = {...this.state.moveClass}
                movements.x = movement.x;

                try {
                    if ((this.state.moveClass.x <= 620 &&
                        this.state.moveClass.x > 70 &&
                        this.state.moveClass.rotate === 180) ||
                        position) {
                        this.setState((state) => ({
                            moveClass: movements
                        }))
                    } else {
                        throw "Limit passed"
                    }
                } catch(error) {
                    console.error(error)
                }

            },
            right: () => {
                // inmutable object
                const movement = {
                    ...this.state.moveClass
                };

                movement.x += 110;

                const movements = {...this.state.moveClass}
                movements.x = movement.x;

                try {
                    if (this.state.moveClass.x < 610 || position) {
                        this.setState((state) => ({
                            moveClass: movements
                        }))
                    } else {
                        throw "Limit passed"
                    }
                } catch(error) {
                    console.error(error)
                }
            },
            down: () => {
                // inmutable object
                const movement = {
                    ...this.state.moveClass
                };

                movement.y += 110;

                const movements = {...this.state.moveClass}
                movements.y = movement.y;

                try {
                    if ((this.state.moveClass.y > 0 &&
                        this.state.moveClass.rotate === 90) ||
                        position) {
                        this.setState((state) => ({
                            moveClass: movements 
                        }))
                    } else {
                        throw "Limit passed"
                    }
                } catch(error) {
                    console.error(error)
                }
            },
            rotate: () => {
                // inmutable object
                const movement = {
                    ...this.state.moveClass
                };

                movement.rotate += 45;

                const movements = {...this.state.moveClass}
                movements.rotate = movement.rotate;

                try {
                    if (this.state.moveClass.x > 610) {
                        this.setState((state) => ({
                            moveClass: movements 
                        }))
                    } else {
                        throw "Limit passed"
                    }
                } catch(error) {
                    console.error(error)
                }

            }
        }
        
        if (!position) {
            eval(this.state.value)
        } else {
            return move[position]();
        };
    }

    render() {
        return(
            <div className="MainBoard">
                <Board move={this.state.moveClass} />
                <TextEditor value={this.state.value}
                            functionList={this.state.functionList}
                            moveEditor={this.state.marginEditor}
                            lineNumber={this.state.lineNumber}
                            handleChange={this.handleChange}
                            runCode={this.runCode} />
            </div>
        )
    }
}


export default MainBoard;
