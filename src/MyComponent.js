import React from 'react';
import PropTypes from 'prop-types'
const MyComponent = ({name, test, children}) => { //props는 프로퍼티를 나타냄. 
    // const {name, test, children} = props; //이렇게 사용하는 것을 비구조화 할당

    return (
        <div>
            <h1> {name} name 값이야.</h1>
            <h1> {test} test 값이지</h1>
            <h2> {children} 자식이야 </h2>
        </div>
    );
};

MyComponent.defaultProps = {
    name: '디폴트값이야'
}
MyComponent.propTypes = {
    name: PropTypes.string.isRequired
}

export default MyComponent;