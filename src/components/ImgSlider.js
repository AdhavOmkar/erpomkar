import React, { useState } from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Header from './Header';
import Innercontent from './Innercontent';

function ImgSlider() {
  const [searchTerm, setSearchTerm] = useState('');

  let setting = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
    ]
  };

  const data = [
    {
      "imgSrc": "/images/feedback.png",
      "headingText": "Feedback System",
      "descriptionText": "jhfusf foiefioewjf hfiowe hjfe wjfs jefj fiwfioewj fijewf whfi ohewf h e wjf wihfio jwefj iajfh i heff efewfwef fweff fwfwf fi osehfh fhhf iw iof",
      "link": "https://siesfeedback.vercel.app/"
    },
    {
      "imgSrc": "/images/examcell.png",
      "headingText": "Examination Cell",
      "descriptionText": "Conduction of examinations and central assessment process with result preparation are the prime responsibilities of the Exam cell on behalf of University of Mumbai.",
      "link": "https://examcell.vercel.app/"
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
  ];

  const filteredData = data.filter(item =>
    searchTerm === '' || item.headingText.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
        <Header setSearchTerm={setSearchTerm} />
        <div className='diver'>
      <Carousal {...setting}>
        {filteredData.map(item => (
          <Warp key={item.headingText}>
            <Innercontent
              imgSrc={item.imgSrc}
              headingText={item.headingText}
              descriptionText={item.descriptionText}
              link={item.link}
            />
          </Warp>
        ))}
      </Carousal>
      </div>
    </div>
  );
}

export default ImgSlider;

// import React from 'react'
// import styled from 'styled-components'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';
// import Innercontent from './Innercontent';


//  function ImgSlider() {

  
//   let setting = {
//     className : "center",
//     centerMode : true, 
//     dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       initialSlide: 0,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ]
//   }
//    return (
//      <Carousal {...setting}>
//         <Warp>
//         <Innercontent
//           imgSrc='/images/mahabharat.jpg'
//           headingText='Mahabharat'
//           descriptionText='jhfusf foiefioewjf hfiowe hjfe wjfs jefj fiwfioewj fijewf whfi ohewf h e wjf wihfio jwefj iajfh i heff efewfwef fweff fwfwf fi osehfh fhhf iw iof'
//         />
//         </Warp>
//         <Warp>
//         <Innercontent
//           imgSrc='/images/mahabharat.jpg'
//           headingText='Ramayan'
//           descriptionText='jhfusf foiefioewjf hfiowe hjfe wjfs jefj fiwfioewj fijewf whfi ohewf h e wjf wihfio jwefj iajfh i heff efewfwef fweff fwfwf fi osehfh fhhf iw iof'
//         />
//         </Warp>
//         <Warp>
//         <Innercontent
//           imgSrc='/images/mahabharat.jpg'
//           headingText='Garudpuran'
//           descriptionText='jhfusf foiefioewjf hfiowe hjfe wjfs jefj fiwfioewj fijewf whfi ohewf h e wjf wihfio jwefj iajfh i heff efewfwef fweff fwfwf fi osehfh fhhf iw iof'
//           link='https://www.google.com'
//         />
//         </Warp>
//         <Warp>
//         <Innercontent
//           imgSrc='/images/mahabharat.jpg'
//           headingText='Dnyaneshwari'
//           descriptionText='jhfusf foiefioewjf hfiowe hjfe wjfs jefj fiwfioewj fijewf whfi ohewf h e wjf wihfio jwefj iajfh i heff efewfwef fweff fwfwf fi osehfh fhhf iw iof'
//           link='https://www.google.com'
//         />
//         </Warp>
//         <Warp>
//         <Innercontent
//           imgSrc='/images/mahabharat.jpg'
//           headingText='Mrutyunjay'
//           descriptionText='jhfusf foiefioewjf hfiowe hjfe wjfs jefj fiwfioewj fijewf whfi ohewf h e wjf wihfio jwefj iajfh i heff efewfwef fweff fwfwf fi osehfh fhhf iw iof'
//           link='https://www.google.com'
//         />
//         </Warp>
//      </Carousal>
//    )
//  }
 
//  export default ImgSlider


 const Carousal = styled(Slider)`
 padding: 36px;
 border-radius: 120px;
 width: 100%;
 `

 const Warp = styled.div`
 height: 65vh;
 width: 15vw;
 margin: 70px 0px;
 border-radius: 12px;
 `
