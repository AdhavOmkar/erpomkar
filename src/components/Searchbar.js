import React, { useState } from 'react';
import styled from 'styled-components';

function Searchbar() {
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);

    const fetchData = (value) => {
        // Simulating the data fetching from an API
        // In a real app, replace this with an actual fetch request
        setData([
            {
                "imgSrc": "/images/mahabharat.jpg",
                "headingText": "Mahabharat",
                "descriptionText": "jhfusf foiefioewjf hfiowe hjfe wjfs jefj fiwfioewj fijewf whfi ohewf h e wjf wihfio jwefj iajfh i heff efewfwef fweff fwfwf fi osehfh fhhf iw iof"
            },
            {
                "imgSrc": "/images/mahabharat.jpg",
                "headingText": "Ramayan",
                "descriptionText": "jhfusf foiefioewjf hfiowe hjfe wjfs jefj fiwfioewj fijewf whfi ohewf h e wjf wihfio jwefj iajfh i heff efewfwef fweff fwfwf fi osehfh fhhf iw iof"
            },
            {
                "imgSrc": "/images/mahabharat.jpg",
                "headingText": "Garudpuran",
                "descriptionText": "jhfusf foiefioewjf hfiowe hjfe wjfs jefj fiwfioewj fijewf whfi ohewf h e wjf wihfio jwefj iajfh i heff efewfwef fweff fwfwf fi osehfh fhhf iw iof",
                "link": "https://www.google.com"
              },
              {
                "imgSrc": "/images/mahabharat.jpg",
                "headingText": "Dnyaneshwari",
                "descriptionText": "jhfusf foiefioewjf hfiowe hjfe wjfs jefj fiwfioewj fijewf whfi ohewf h e wjf wihfio jwefj iajfh i heff efewfwef fweff fwfwf fi osehfh fhhf iw iof",
                "link": "https://www.google.com"
              },
              {
                "imgSrc": "/images/mahabharat.jpg",
                "headingText": "Mrutyunjay",
                "descriptionText": "jhfusf foiefioewjf hfiowe hjfe wjfs jefj fiwfioewj fijewf whfi ohewf h e wjf wihfio jwefj iajfh i heff efewfwef fweff fwfwf fi osehfh fhhf iw iof",
                "link": "https://www.google.com"
              }
        ]);
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return (
        <div>
            <SearchTab type="text" placeholder="Search your module" value={input} onChange={(e) => handleChange(e.target.value)} />

            {/* Render your components using the 'data' state */}
            {data.map((item, index) => (
                <ContentContainer key={index}>
                    <img src={item.imgSrc} alt={item.headingText} />
                    <h2>{item.headingText}</h2>
                    <p>{item.descriptionText}</p>
                    {item.link && <a href={item.link}>Learn More</a>}
                </ContentContainer>
            ))}
        </div>
    );
}

export default Searchbar;

const ContentContainer = styled.div`
  /* Add your styling for each content item here */
`;

const SearchTab = styled.input.attrs({
    type: 'text'
})`
  background-color: #040714;
  width: 100%;
  height: 50%;
  border-radius: 4px;
  color: #fff;
  margin-left: 5%;
`;

const Searchbutton = styled.input.attrs({
    type: 'submit'
})`
  background-color: #5eca5c;
  width: 20%;
  height: 50%;
  border-radius: 4px;
  color: black;
`;

// Other styled components can be added as needed



// import React, { useState } from 'react'
// import styled from 'styled-components'

// function Searchbar() {

//     const [input,setInput] = useState("");
//     const fetchData = (value) => {
//         fetch('/contentData.json') // Assuming the JSON file is in the public folder
//             .then((response) => response.json())
//             .then((json) => {
//                 console.log(json);
//             })
//             .catch((error) => {
//                 console.error('Error fetching data:', error);
//             });
//     };
    

//     const handleChange = (value) => {
//         setInput(value)
//         fetchData(value)
//     }
//   return (
//     <SearchTab type="text" placeholder="Search your module" value={input}  onChange = {(e) => handleChange(e.target.value)}/>

//   )
// }

// export default Searchbar


// const SearchTab = styled.input.attrs({ 
//     type: 'text'
//   })`
  
//   background-color: #040714;
//   width: 100%;
//   height: 50%;
//   border-radius: 4px;
//   color: #fff;
//   margin-left: 5%;
  
  
//   `
  
//   const Searchbutton = styled.input.attrs({ 
//     type: 'submit'
//   })`
  
//   background-color: #5eca5c;
//   width: 20%;
//   height: 50%;
//   border-radius: 4px;
//   color: black;
//   `

//       {/* <Searchbutton type="submit" required /> */}