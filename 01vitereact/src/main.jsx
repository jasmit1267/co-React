import React  from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Hello app |</h1>
        </div>
    )
}
/*const reactElement = {
    type:'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit goolge '
}*/
const twoElement= (
    <a href="https://google.com" target='_blank'>open google</a>
)

const thirdElement = React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(

    <App/>

)
