import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';


const items = [
    { title: 'What is React?', 'content': 'React is a frontend javascript library'},
    { title: 'Why use React?', 'content': 'React is a favorite js library among engineers'},
    { title: 'How do you use React?', 'content': 'You use React by creating components'},
];

const options = [
    {label: 'the Color Red', value: 'red'},
    {label: 'the Color Green', value: 'green'},
    {label: 'A shade of Blue', value: 'blue'},
];


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion  items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown label="Select a Color" options={options} selected={selected} onSelectedChange={setSelected} />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};





