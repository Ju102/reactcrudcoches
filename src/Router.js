import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Home from './components/Home'
import MenuCoches from './components/MenuCoches'
import CreateCoche from './components/CreateCoche'
import EditCoche from './components/EditCoche'
import Details from './components/Details'

class Router extends Component {
    render() {

        function EditCocheElement() {
            let { id } = useParams();
            return <EditCoche id={id} />
        }

        function DetailsElement() {
            let { id } = useParams();
            return <Details id={id} />;
        }

        return (
            <BrowserRouter>
                <MenuCoches />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/create' element={<CreateCoche />} />
                    <Route path='/edit/:id' element={<EditCocheElement />} />
                    <Route path='/details/:id' element={<DetailsElement />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Router