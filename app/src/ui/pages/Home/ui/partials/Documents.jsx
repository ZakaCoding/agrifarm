import { Col, Row } from 'react-bootstrap';

export function Documents() {
    return (
        <section className="bg-white p-5">
            <Row>
                <Col xs={12} lg={6}>
                    <div className="container py-5 relative">
                        <h2 className="text-left text-4xl mb-6">
                        Sustainable Practices: Discover <br /> eco-friendly farming methods that not only boost your yields but also preserve our planet for future generations.
                        </h2>
                    </div>
                </Col>
                <Col xs={12} lg={6}>        
                    <div className="carousel carousel-center w-full p-4 space-x-4 bg-green-900 rounded-box">
                        <div className="carousel-item">
                            <div className="card w-96 bg-gray-100 text-green-700">
                                <div className="card-body">
                                    <h2 className="card-title">Card title!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                    <button className="btn border-2 border-green-600 text-green-600">Download</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card w-96 bg-gray-100 text-green-700">
                                <div className="card-body">
                                    <h2 className="card-title">Card title!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                    <button className="btn border-2 border-green-600 text-green-600">Download</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card w-96 bg-gray-100 text-green-700">
                                <div className="card-body">
                                    <h2 className="card-title">Card title!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                    <button className="btn border-2 border-green-600 text-green-600">Download</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    )
}