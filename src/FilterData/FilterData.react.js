import React from 'react';

const FilterData = (props) => {
  
  
    
    return (
        props.posts.map(
            p => {
                if (Date.parse(props.inputsToFilter.to_date) < Date.parse(props.inputsToFilter.from_date)) {
                   
                    return (
                        <div>
                            <h2>Invalid Date</h2>
                        </div>
                    )
                } else if((props.inputsToFilter.to_date)===''||(props.inputsToFilter.from_date)==='')
                {
                    return (
                        <div key={p.web_url} className='alignment'>
                            Abstract: {p.abstract}<br />
                            News Desk: {p.news_desk}<br />
                            Section Name:{p.section_name}<br />
                            Date: {p.pub_date}<br />
                            Type:{p.type_of_material}<br/>
                            Visit Article : <a href={p.web_url}>Click here to know more</a>
                            <hr />
                        </div>
                    )
                }
                else if (Date.parse(p.pub_date) >= Date.parse(props.inputsToFilter.from_date) && Date.parse(p.pub_date) <= Date.parse(props.inputsToFilter.to_date)) {
                    return (
                        <div key={p.web_url} className='alignment'>
                            Abstract: {p.abstract}<br />
                            News Desk: {p.news_desk}<br />
                            Section Name:{p.section_name}<br />
                            Date: {p.pub_date}<br />
                            Type:{p.type_of_material}<br/>
                            Visit Article : <a href={p.web_url}>Click here to know more</a>
                            <hr />
                        </div>
                    )
                }
                else {
                }
            }
        ));

}

export default FilterData;