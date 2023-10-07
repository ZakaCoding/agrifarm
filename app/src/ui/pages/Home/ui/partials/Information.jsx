import { Row, Col } from 'react-bootstrap';

export function Information() {
    return(
        <section className="information py-5">
            <div className="container p-5 rounded-3xl backdrop-blur-lg">
                <Row>
                    <Col xs={12} lg={6}>
                        <h1 className="text-white text-4xl font-bold my-5 pt-10">Get information about us</h1>

                        <p className="text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quae eligendi perspiciatis odio eius. Sunt, in cumque! Ut asperiores deleniti mollitia voluptas? Quo at consectetur fugiat ipsam quam quaerat inventore.
                        </p>
                    </Col>

                    <Col xs={12} lg={6} className='flex content-center justify-center'>
                        <div className="flex w-full max-w-sm items-center space-x-2">
                            <input type="email" placeholder="Email" className='p-2 px-4 rounded-3xl border-none outline-none' />
                            <button className='bg-green-700 text-white rounded-3xl'>Submit</button>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}