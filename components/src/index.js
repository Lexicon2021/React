import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" time="Today 6:00pm" post="Nice!" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="Max"  time="Today 1:00pm" post="Okay!" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail  author="Jane" time="Today 2:00pm" post="Oh no!" avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));