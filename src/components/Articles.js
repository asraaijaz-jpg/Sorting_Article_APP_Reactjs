import React , {useState} from 'react';
import App from '../App.js';
import 'h8k-components';


function Articles(props) {

    const title = "Sorting Articles";
    const tangling = true;
    const tangling1 = true;

    const [upvote, setupvote] = useState(false);
    const [date, setdate] = useState(false);

//   Ascending and Descending order make comple object sorted
//   const sorting= props.articles.sort((a, b) => (a.upvote > b.upvote) ? 1 : -1)
//   const reverse= props.articles.reverse((a, b) => (a.upvote < b.upvote) ? 1 : -1)
//   const sorting1= props.articles.sort((a, b) => (a.date > b.date) ? 1 : -1)
   
function mostupvoted()
{
setupvote(true);
if(tangling)
{
  const sorting= props.articles.sort((a, b) => (a.upvote > b.upvote) ? 1 : -1);
  const reverse= props.articles.reverse((a, b) => (a.upvote < b.upvote) ? 1 : -1);   
  document.getElementById('u1').disabled=true;
   
}
}

function mostrecent()
{
setdate(true);
if(tangling1)
{
  const sorting= props.articles.sort((a, b) => new Date(a.date) - new Date(b.date));    
  document.getElementById('d1').disabled=true;
}
}

    return (  
        
<div>
        <h8k-navbar header={title}></h8k-navbar>
        <div className="layout-row align-items-center justify-content-center my-20 navigation">
            <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
            <button data-testid="most-upvoted-link" className="small" onClick={mostupvoted}
            id='u1'>Most Upvoted</button>
            <button data-testid="most-recent-link" className="small" onClick={mostrecent}
             id='d1'>Most Recent</button>

          {
              
          }

        </div>

        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                {props.heading.map(heading=><th>{heading}</th>)}
                </tr>
                </thead>
                <tbody>

                {props.articles.map((data)=>
                <tr>         
                <td data-testid="article-title" style={{fontSize:'17px'}}>{data.title}</td> 
                <td data-testid="article-upvotes" style={{fontSize:'17px'}}>{data.upvote}</td> 
                <td data-testid="article-date" style={{fontSize:'17px'}}>{data.date}</td> 
                </tr>
                )}

                </tbody>
            </table>
            {/* {array.map(name => <h2>{name}</h2>)} */}
            {/* {props.articles.map((name)=><p>{name.title}{name.upvote}{name.date}</p>)} */}
        </div>
        </div>
    );

}


export default Articles;
