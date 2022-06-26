import React from 'react'
import { Link } from 'react-router-dom'


import Helmet from '../components/Helmet'
import Grid from '../components/Grid'
import HeroSlider from '../components/HeroSlider'
import PolicyCard from '../components/PolicyCard'
import ProductCard from '../components/ProductCard'
import Section, { SectionTitle, SectionBody } from '../components/Section'


import heroSliderData from '../asset/fake-data/hero-slider'
import policy from '../asset/fake-data/policy'
import productData from '../asset/fake-data/product'
import banner from '../asset/images/banner.png'

const Home = () => {
  return (
    <Helmet title="Trang chủ">
      {/* make hero slider */}
      <HeroSlider 
          data={heroSliderData}
          control={true}
          auto={true}
          size="sm"
      />
      {/* end make hero slider */}

      {/* policy section */}
      <Section>
        <SectionBody>
          <Grid 
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {
              policy.map((item, index) => (
                <Link key={index} to='/policy'>
                  <PolicyCard 
                    name={item.name}
                    desc={item.description}
                    icon={item.icon}
                  />    
                </Link>
              ))
            }
          </Grid>
        </SectionBody>
      </Section>
      {/* end policy section */}

      {/* best selling  */}
      <Section>
        <SectionTitle>
          Top product best selling 
        </SectionTitle>
        <SectionBody>
          <Grid  
              col={4}
              mdCol={2}
              smCol={1}
              gap={20}
            >
              {
                productData.getProducts(4).map(
                  (item, index) => 
                    <ProductCard
                      img01={item.image01}
                      img02={item.image02}
                      name={item.title}
                      price={Number(item.price)}
                      slug={item.slug}
                      key={index}
                  />
                )
              }
            </Grid>
        </SectionBody>
      </Section>
      {/* end best selling  */}

      {/* new arrival section */}
      <Section>
        <SectionTitle>
          Top product lastest
        </SectionTitle>
        <SectionBody>
          <Grid  
              col={4}
              mdCol={2}
              smCol={1}
              gap={20}
            >
              {
                productData.getProducts(8).map(
                  (item, index) => 
                    <ProductCard
                      img01={item.image01}
                      img02={item.image02}
                      name={item.title}
                      price={Number(item.price)}
                      slug={item.slug}
                      key={index}
                  />
                )
              }
            </Grid>
        </SectionBody>
      </Section>
      {/* end new arrival section */}

      {/* banner */}
      <Section>
        <SectionBody>
          <Link to='/catalog'>
              <img src={banner} alt="bannner avanger strongest" />
          </Link>
        </SectionBody>
      </Section>
      {/* end banner */}

      {/* popular product*/}
      <Section>
        <SectionTitle>
          Popular product
        </SectionTitle>
        <SectionBody>
          <Grid  
              col={4}
              mdCol={2}
              smCol={1}
              gap={20}
            >
              {
                productData.getProducts(12).map(
                  (item, index) => 
                    <ProductCard
                      img01={item.image01}
                      img02={item.image02}
                      name={item.title}
                      price={Number(item.price)}
                      slug={item.slug}
                      key={index}
                  />
                )
              }
            </Grid>
        </SectionBody>
      </Section>
      {/* end popular product */}
    </Helmet>
  )
}

export default Home