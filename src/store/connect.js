import React from 'react';
import { Context } from './provider';

const { Consumer } = Context;
const connect = (mapStateToProps) => {
    return (WrappedComponent) => {
        return () =>  
            <Consumer>
                {store => {
                    const _Component = class extends React.Component {
                        constructor() {
                            super(...arguments);
                            this.state = {
                                ...mapStateToProps(store.getState())
                            };
                        }
                        componentDidMount() {
                            this.unsubscribe = store.subscribe(() => {
                                const _state = mapStateToProps(store.getState());
                                this.setState({
                                    ..._state
                                });
                            })
                        }
                        componentWillUnMount() {
                            this.unsubscribe();
                        }
                        render() {
                            return <WrappedComponent {...this.state} dispatch={store.dispatch} />
                        }
                    }
                    return <_Component />
                }}
            </Consumer>
    }
}

export default connect;
