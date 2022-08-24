import React from 'react';
import 'h8k-components';
import Articles from './components/Articles';

const articles=[
    {
    'title':'Article1',
    'upvote':5,
    'date':'2019-6-22'
    },
    {
    'title':'Article2',
    'upvote':7,
    'date':'2022-3-2'
    },
    {
    'title':'Article3',
    'upvote':2,
    'date':'2004-6-7'
    },
    {
    'title':'Article4',
    'upvote':9,
    'date':'2017-9-12'
    },
  ]

  const heading=['Title' , 'Upvotes' , 'Date'];
 
function App() {

    return (
        <div className="App">
            <Articles articles={articles} heading={heading} />
        </div>
    );

}

export default App;
