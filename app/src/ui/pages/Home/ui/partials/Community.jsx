import { Row, Col } from 'react-bootstrap';
import communityBanner from 'assets/image/community-min.png';

export function Community() {
    return(
        <section className="bg-white pt-5">
            <div className='container py-5'>
                <Row>
                    <Col xs={12} lg={6}>
                        <h2 className="text-5xl font-bold text-left mb-5">
                        Thousands of people
                        trust to our agricultural
                        products
                        </h2>

                        <p className='text-slate-400 text-2xl mb-5'>
                        Join the amazing Farming that we provide for you and just you.
                        </p>

                        <div className='rounded-3xl p-4 flex justify-between content-center bg-green-800 text-white'>
                            <div className='mx-2'>
                                <h3 className="text-2xl font-bold">100 +</h3>
                                <p className='text-xl'>People join with us</p>
                            </div>
                            <div className='mx-2 text-center rounded-3xl bg-green-400 p-4 cursor-pointer hover:bg-green-500'>
                            <a href='#' className="text-xl font-bold text-white hover:text-white">Join Now</a>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className="flex content-center justify-center">
                            <img src={communityBanner} alt="" className="w-2/3 mx-auto drop-shadow-2xl" />
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
}