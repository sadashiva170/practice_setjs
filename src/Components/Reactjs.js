const List = (props) => {
    return <p>{props.tasks.join(', ')}</p>
    //join method is used to concatenate the elements of the array into a single string, separated by a comma and a space (', ').
    //<p>Walk, Cook, Bake</p> other wise its shows like this  WalkCookBake
  
  };
  
  const ToDo = () => {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["Walk", "Cook", "Bake"]} />
        <h2>Tomorrow</h2>
        <List tasks={["Study", "Code", "Eat"]} />
      </div>
    );
  };

  //default prop
  const ShoppingCart = (props) => {
    return (
      <div>
        <h1>Shopping Cart Component</h1>
      </div>
    )
  };
  // Change code below this line
  ShoppingCart.defaultProps={items:0}
  //// This will use the provided value of 0 for the items prop


  //example

  const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>//0 if we dont provide any prop in items ,now its 10 as 
    //we passed the 10 as quantity
  }
  
  Items.defaultProps = {
    quantity: 0
  }
  
  class ShoppingCarts extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      { /* Change code below this line */ }
      return <Items quantity={10}/>
      { /* Change code above this line */ }
    }
  };

  //Use PropTypes to Define the Props You Expect

  /*
  React provides useful type-checking features to verify that components receive props of the correct type. 
  For example, your application makes an API call to retrieve data that you expect to be in an array, which is then passed to a component as a prop. 
  You can set propTypes on your component to require the data to be of type array. This will throw a useful warning when the data is of any other type.

  MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }
In the example above, the PropTypes.func part checks that handleClick is a function. 
Adding isRequired tells React that handleClick is a required property for that component. 
You will see a warning if that prop isn't provided. Also notice that func represents function. Among the seven JavaScript primitive types, function and boolean (written as bool) are the only two that use unusual spelling
*/

//example

const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  };
  Items.propTypes={
    quantity:PropTypes.number.isRequired
  }
  
  Items.defaultProps = {
    quantity: 0
  };
  
  class ShoppingCarts extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items />
    }
  };

  //example 2

  class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper/>
        </div>
      );
    }
  };
  // Change code below this line
  function Camper(props){
    return <div>
    <p>{props.name}</p>
    </div>
  }
  Camper.defaultProps={
    name:"CamperBot"
  }
  Camper.propTypes={
    name:PropTypes.string.isRequired
  }

  //