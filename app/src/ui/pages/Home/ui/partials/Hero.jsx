import { Row, Col } from "react-bootstrap";

// css
import 'css/TextFadeIn.css';

import profile1 from "assets/image/avatar/profile-1.jpg";
import profile2 from "assets/image/avatar/profile-2.jpg";
import profile3 from "assets/image/avatar/profile-3.jpg";
import profile4 from "assets/image/avatar/profile-4.jpg";
import heroImage from "assets/image/hero-bg.jpg";

export function Hero() {
    return (

        <section
        className="container w-full my-5"
        >
            <Row>
                <Col
                xs={12}
                lg={6}
                className="">
                    <div className="flex items-center content-center relative">
                        <h1
                            className="text-8xl font-bold mb-6"
                        >
                            <div className="fade-in">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-green-400">We&nbsp;</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-green-400">Are&nbsp;</span> <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-green-400">Agrifarm</span>
                            </div>
                        </h1>

                        <div className="absolute top-10 right-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-stars w-16 fill-orange-400" viewBox="0 0 16 16">
                                <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"/>
                            </svg>
                        </div>
                    </div>

                    <p className="my-4 font-normal text-xl text-slate-400">
                    At Agrifarm, we're all about agriculture. Our passion drives innovation, and we work tirelessly to bring you the best in farming. With a deep love for the land and a commitment to sustainability, we're here to nurture crops that sustain communities and our planet. Join us in cultivating a brighter future through agriculture.
                    </p>

                    <div className="flex justify-between items-center content-center w-96">
                        <div className="flex -space-x-4 my-6">
                            <img className="w-14 h-14 border-2 border-white rounded-full dark:border-gray-800" src={profile1} alt="" />
                            <img className="w-14 h-14 border-2 border-white rounded-full dark:border-gray-800" src={profile2} alt="" />
                            <img className="w-14 h-14 border-2 border-white rounded-full dark:border-gray-800" src={profile3} alt="" />
                            <img className="w-14 h-14 border-2 border-white rounded-full dark:border-gray-800" src={profile4} alt="" />
                        </div>

                        <div className="flex items-center justify-between">
                            <p>
                                <strong>Follow us</strong> <br />
                                We're waiting for you!
                            </p>
                        </div>
                    </div>
                </Col>

                <Col
                xs={12}
                lg={6}
                className="flex content-center justify-center relative">

                    {/* content image */}
                    <img src={heroImage} className="w-96" alt="plant" />

                </Col>
            </Row>
        </section>

    )
}