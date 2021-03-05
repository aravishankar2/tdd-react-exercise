import App from "./App";
import PersonList from "./PersonList";
import { shallow } from "enzyme";

//  We create a "suite" by using the word describe
//      We pass in a label string, as well as a callback function to our suite
describe("App", () => {
  // We describe the behavior of the app componenent
  // "It" also takes in a label and a callback, but this would be considered our first test.
  it("renders App component successfully", () => {
    const appWrapper = shallow(<App />);
  });


  it("Renders A Person List", () => {
    const appWrapper = shallow(<App />);
    const personList = appWrapper.find(PersonList)
    //  We can check for the occurances of Person List within the App component as an array 
    expect(personList).toHaveLength(1);
  })
});
