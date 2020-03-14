import React, {Component} from "react";
import Employee from "./components/employee";
import employeeList from "./data/employeeList.json";
import Form from"./components/form";

class App extends Component {
	state = {
		sorted: employeeList,
		firstName: "",
		lastName: ""
	}
	handleInputChange = event => {
		// Getting the value and name of the input which triggered the change
		let value = event.target.value;
		const name = event.target.name;
	
		// Updating the input's state
		this.setState({
		  [name]: value
		});
	  };

	  handleFormSubmit = event => {
		// Preventing the default behavior of the form submit (which is to refresh the page)
		event.preventDefault();
	
		// Using this.state; Make a if/else statement to do the following
		// If first or last name is empty alert the user that they are empty
		// Else if both have values alert the user to say "Hi firstName and lastName" 
		
		//sort a deep copy of the list
		//WRONG: this.state.property=value
		//RIGHT: this.setState({propert:value})
		let findFirstName= new Array(...employeeList)
		console.log(findFirstName)
		let filtersReturnNewArrays= findFirstName.filter(employee=>{
			console.log(employee.firstName)
			console.log(this.state.firstName)
			
			console.log(employee.firstName.includes(this.state.firstName))
			return employee.firstName.includes(this.state.firstName)
			|| employee.lastName.includes(this.state.firstName)
		})
		console.log(filtersReturnNewArrays)
		//setState 
		this.setState({sorted:filtersReturnNewArrays})
		
	  
	
		this.setState({
		  firstName: "",
		  lastName: ""
		});
	  };
	  sortName = ()=>{
		  let unsorted = new Array(...employeeList)
		  console.log(unsorted)
		  let sortof= unsorted.sort((a,b)=>{
			  console.log(a.firstName, b.firstName)
			  console.log(b.firstName - a.firstName)
			  return (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0)
			})
		  console.log(sortof)
		  this.setState({sorted:sortof})
	  }

	render(){
		return( 
			
		<div stylle = "text-align: center">
		
		<Form 
		firstName={this.state.firstName}
		lastName={this.state.lastName}
		handleInputChange={this.handleInputChange}
		handleFormSubmit={this.handleFormSubmit}
		/> 
			
			<button onClick={
				this.sortName
			}>Alphabetize Name</button>
			
		<Employee employeeList={this.state.sorted}/>
		
		</div>
	)
			}
}
export default App;