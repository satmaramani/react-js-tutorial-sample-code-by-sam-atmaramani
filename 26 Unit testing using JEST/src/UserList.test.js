import {render, screen, within} from "@testing-library/react";

import UserList from "./UserList";
function renderComponent()
{
    const users = [
        {name: "jane", email:"jane@jane.com"},
        {name:"sam", email:"sam@sam.com"}
    ]
    //Render the component
    render(<UserList users={users}/>);

    return {users};
}

test("Render one row per user", ()=>{

    renderComponent()


    //find all the rows in the table
    
    const rows = within(screen.getByTestId("users")).getAllByRole("row")
    // const table = container.querySelector("table");
    // const rows = container.querySelectorAll("tbody tr");

    // console.log(table);
    // screen.logTestingPlaygroundURL();
    // screen.getAllByRole("row");

    //Assertion : correct number of rows in the table 
    expect(rows).toHaveLength(3);
})


test("Render name and email of each user", ()=>{

    const {users} = renderComponent();

    for (let user of users){
        const name = screen.getByRole('cell', {name:user.name});
        const email = screen.getByRole('cell', {email:user.email});

        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }
})