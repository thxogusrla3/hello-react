import Counter from "./Counter";
import MyComponent from "./MyComponent";
import MyTestComponent from "./MyTestComponent";
function App() {
  return (
    <div>
      <MyComponent test='qqq'> 요놈이 </MyComponent>
      <MyTestComponent qwer="test"></MyTestComponent>

      <Counter name="test"></Counter>
    </div>
    );
}

export default App;
