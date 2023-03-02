import TodoList from "../components/TodoList"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe("Testando componente TodoList.js", ()=>{
test("Deve renderixar o título", ()=>{
    render(<TodoList/>)
    screen.debug()
    const titulo = screen.getByText(/Todo list/i)
    expect(titulo).toBeInTheDocument()
})
test("Deve atualizar o valor do input ao digitar nele", async ()=>{
    render(<TodoList/>)
    screen.debug()
    const input = screen.getByPlaceholderText("Enter a todo")
    // expect(input).toBeInTheDocument()
    const usuario = userEvent.setup()
    await usuario.type(input, "Almoçar")
    expect(input).toHaveValue("Almoçar")

})
test("Deve renderizar uma nova tarefa ao digitar no input a tecla 'enter'", async ()=>{
    render(<TodoList/>)

    const input = screen.getByPlaceholderText(/enter a todo/i)
    const usuario = userEvent.setup()
    await usuario.type(input, "Almoçar{enter}")
    const tarefa = screen.getByText("Almoçar")
//     const button = screen.getByText("Toggle")
// await usuario.click(button)


    expect(tarefa).toBeInTheDocument()
    expect(input).toHaveValue("")
   


    
})
test("Deve alterar o status da tarefa qquando o status for clicado", async ()=>{
    render(<TodoList/>)

    const input = screen.getByPlaceholderText(/enter a todo/i)
    const usuario = userEvent.setup()
    await usuario.type(input, "Almoçar{enter}")
    const tarefa = screen.getByText("Almoçar")
    const button = screen.getByText("Toggle")
await usuario.click(button)


    expect(tarefa).toBeInTheDocument()
    expect(input).toHaveValue("")
    expect(tarefa).toHaveStyle("text-decoration: line-through")
    await usuario.click(button)
        expect(tarefa).toHaveStyle("text-decoration: none")


    
})
})