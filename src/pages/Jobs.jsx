import React,{useEffect,useState} from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

function Jobs() {
    const [banner, setBanner] = useState([])
    useEffect(() => {
        fetch(" https://67fe0c903da09811b1775fd9.mockapi.io/api/carousel/id")
            .then(response => response.json())
            .then(json => setBanner(json))
    },[])
    console.log(banner)
  return (
      <>
          <Header />
          <section className='m-5'>
              {
                  banner.map((items, index) => {
                      return (
                          <div>
                              <div className="card">
                                  <img key={index} src={items.img} alt=""/>
                                    <div class="da"></div>
                              </div>
                        </div>
                    )
                  })
              }
          </section>
          <Footer />
      </>
  )
}

export default Jobs
