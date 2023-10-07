import { Row, Col } from 'react-bootstrap'

export function Story() {
    return(
        <section className="bg-white py-5">
            <h2 className="text-5xl font-bold text-center my-5">Our Story</h2>

            <Row className='container mb-5'>
                <Col xs={12} lg={6}>
                </Col>

                <Col xs={12} lg={6}>
                    <article className='text-2xl text-slate-400'>
                        <p className='mb-3'>
                        A major portion of our diet is dedicated to staple foods that come
                        from wheat, rice, corn, pulses, potato, oats, cassava, sorghum, millets
                        etc. The scale and outreach of agricultural crops is key to feeding <strong className='text-black'>9.6</strong> billion people sustainably by <strong className='text-black'>2050</strong>. However, the lack of protein
                        quality and quantity in agricultural products must be addressed first. <br />
                        
                        </p>

                        <p>
                        At <strong className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-green-400'>Agrifarm</strong>, we harness the power of fermentation to enrich
                        agricultural products with complete protein and make them
                        nutritionally balanced. Our mission is to deliver the best tasting
                        nutritious products for all eating occassions, that are right for our
                        entire family and for planet earth.
                        </p>
                    </article>
                </Col>
            </Row>
            
        </section>
    )
}