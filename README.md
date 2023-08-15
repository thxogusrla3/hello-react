# 세팅
- npm install --global yran //yarn은 npm 대체 할 수 있는 도구로 npm보다 더 빠르며 효율적인 캐시 시스템과 부가 기능을 제공함
- yarn create react-app hello-react // react 프로젝트 생성
- yarn start

# 확장프로그램
- Reactjs Code Snippet: rsc 로 코드 자동 생성

# 리액트
* mvc, mvw 와는 달리 오직 View만을 위해 개발된 js 라이브러리임.
* 지속적으로 데이터가 변화하는 대규모 어플리케이션 구축에 적합함.
* Virtual Dom을 사용함.

# Dom
* Document Object Model
* 객체로 문서 구조를 표현하는 방법으로 Xml, Html로 작성함.
* 정적파일이기 때문에 동적에 취약함.
![Dom](/Dom%EA%B5%AC%EC%A1%B0.png)

# Virtual Dom
* 실제 Dom에 접근하여 조작하는 대신, 이를 추상화한 JS로 객체를 구성하여 Dom의 사본을 만든 것.

# Virtual Dom 절차
1. 데이터를 업데이트하면 전체 UI를 Virtual Dom에 리렌더링함.
2. 이전 Virtual Dom에 있던 내용과 현재 내용을 비교함.
3. 바뀐 부분만 실제 Dom에 적용

# 단어
* 크로스 브라우징: 일부 최신 브라우저에만 동작하는 기능을 추가할 때 안되는 브라우저는 해당 기능을 지우거나 수정해야함.
* 바벨: 크로스 브라우징과 같은 이슈를 해결해주는데, 모든 브라우저에서 동작할 수 있도록 호환성을 지켜주게해줌.
    - 바벨은 세 단계로 빌드를 진행함.
        > 파싱
        > 변환
        > 출력

* 번들러: 브라우저에서도 사용하기 위해 번들러가 사용되며, 주로 웹팩이 사용된다.
* 번들링: 모듈화된 코드를 한 파일로 합침.
* 웹팩: 번들링, 코드 수정할 때마다 웹 브라우저를 리로딩하는 등의 기능을 지님.

# Prettier
* 자동 코드 정리 툴
* '' => "" , Tabe size = 2 => 4 등등
* rsc 입력 시 파일의 컴포넌트 자동 생성

# 컴포넌트
- 특정 부분이 어떻게 생길지 정하는 선언체

1. 함수형 컴포넌트
    function App() {
        const name = 'react';
        return <div className="react">{name}</div>
    }

2. 클래스 컴포넌트
    class App extends Component {
        render() {
            const name = 'react';
            return <div className="react">{name}</div>
        }
    }

# 함수형과 클래스형의 차이점
* 클래스형은 State 와 Lifecyle 기능을 사용할 수 있지만 함수형은 사용하지 못함.
* 메모리 자원은 함수 컴포넌트가 덜 사용된다.
* 클래스형은 임시 메스드를 정의할 수 있음.
* 클래스형은 render 함수가 꼭 있어야 함.
* 함수형은 Hooks와 함께 사용하면 State, Lifecyle 기능은 사용할 수 있게 됨. 
* 클래스형 < 함수형 + Hooks | 방식을 선호함

# Props
* 부모 컴포넌트가 자식 컴포넌트에게 데이터를 넘겨줄 데이터를 설정해줌.
* 부모 컴포넌트만 props를 수정할 수 있음. 자식 컴포넌트에게는 읽기전용임.

# State
* 컴포넌트 내부에서 바뀔 수 있는 값을 의미함.
* 클래스형 컴포넌트는 state, 함수형 컴포넌트는 useState
* 클래스형 컴포넌트의 state
    import React, { Component } from 'react';
    class Counter extends Component {
        constructor(qwer) {
            super(qwer); //Component의 State 값을 쓰기 위해 상속을 받는 것

            this.state = {
                number:0,
                test: 12,
            };

        }
        render() {
            let { number, test } = this.state;
            return (
                <div>
                    <h1>{number}</h1>
                    <button onClick={() => {
                        this.setState({ number: number + 1});  //setState는 
                    }}> + 1
                    </button>
                    <button onClick={() => { this.setState({ number: number - 1}); }}> - 1 </button>
                    <br></br>
                    <h1>{test}</h1>
                    <button onClick={() => { this.setState({ test: number + 1}); }}> test + 1 </button>
                </div>
            );
        }
    }

* 함수형 컴포넌트의 state
    import {React, useState} from 'react';
    const Say = () => {
        const [msg, setMsg] = useState('');
        const onClickEnter = () => {setMsg('안녕하세요');}
        const onClickLeave = () => {setMsg('가세요.');}

        const [color, setColor] = useState('black');

        return (
            <div>
                <button onClick={onClickEnter}>입장</button>        
                <button onClick={onClickLeave}>퇴장</button>
                <h1 style={{color}}>{msg}</h1>

                <button style={{color: 'red'}} onClick={() => setColor('red')}>빨강</button>
                <button style={{color: 'green'}} onClick={() => setColor('green')}>초록</button>
                <button style={{color: 'blue'}} onClick={() => setColor('blue')}>파랑</button>
            </div>
        );
    };

* useState 값이 여러개일 때
    const [form, setForm] = useState({
        username:'',
        msg:'',
    });
    
# 리액트 이벤트
1. 카멜표기법으로 이벤트 작성 ex - onClick, onKeyUp 
2. 이벤트에 실행할 JS코드를 전달하는 것이 아니라, 함수 형태의 값을 전달
3. Dom 요소에만 이벤트를 설정할 수 있음.
    <MyComponent onClick={doSomeThing}>       // X
    <div onClick={this.props.onClick}></div>  // O 