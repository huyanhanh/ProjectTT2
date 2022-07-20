import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import Section, { SectionTitle, SectionBody } from '../components/Section'
import Helmet from '../components/Helmet'
import ProductView from '../components/ProductView'


import productData from '../asset/fake-data/product'


const Product = props => {

    const { slug } = useParams()

    const relatedProducts = productData.getProducts(8)

    const product = productData.getProductBySlug(slug)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [slug])

    return (
        <Helmet title={slug}>
            <Section>
                <SectionBody>
                   <ProductView product={product} />
                </SectionBody>
                <Section>
                    <SectionTitle>Related Product</SectionTitle>
                    <SectionBody>
                        <Grid
                            col={4}
                            mdCol={2}
                            smCol={1}
                            gap={20}
                        >
                            {
                                relatedProducts.map((item, index) => (
                                    <ProductCard
                                        key={index}
                                        img01={item.image01}
                                        img02={item.image02}
                                        name={item.title}
                                        price={Number(item.price)}
                                        slug={item.slug}
                                    />
                                ))
                            }
                        </Grid>
                    </SectionBody>
                </Section>
            </Section>
        </Helmet>
    )
}

export default Product